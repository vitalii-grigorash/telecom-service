import React from 'react';
import { Validation } from '../../utils/Validation';

function Popup(props) {

    const { 
        isOpen,
        onClose,
        onSendForm,
        submitButtonText,
    } = props;

    const name = Validation();
    const number = Validation();
    const comment = Validation();

    function clearAll () {
        name.setValue('');
        number.setValue('');
        comment.setValue('');
        name.setErrorMessage('');
        number.setErrorMessage('');
    }

    function closePopup () {
        onClose();
        clearAll();
    }

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup();
        }
    }

    function submitForm(evt) {
        evt.preventDefault();
        onSendForm(name.value, number.value, comment.value);
        clearAll();
    }

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>

            <div className="popup__form-background">

                <form 
                    className="footer__form footer__form_type-popup"
                    onSubmit={submitForm}
                >

                    <button
                        type='button'
                        className='popup__close-button'
                        onClick={closePopup}
                    ></button>

                    <h3 className="footer__form-heading footer__form-heading_type-popup">Остались вопросы? Наш специалист свяжется с вами</h3>

                    <span className="footer__form-span footer__form-span_type-popup">Ваше имя</span>
                    <input
                        type="text"
                        className="footer__form-input footer__form-input_type-popup"
                        id="name-input"
                        name="name"
                        value={name.value}
                        onChange={name.onChange}
                        minLength="2"
                        maxLength="50"
                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                        required
                    />
                    <span id="name-input" className="form__input_error">{name.errorMessage}</span>

                    <span className="footer__form-span footer__form-span_type-popup">Ваш контактный номер</span>
                    <input
                        type="text"
                        className="footer__form-input footer__form-input_type-popup"
                        id="number-input"
                        name="number"
                        value={number.value}
                        onChange={number.onChange}
                        minLength="3"
                        maxLength="20"
                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                        required
                    />
                    <span id="number-input" className="form__input_error">{number.errorMessage}</span>

                    <span className="footer__form-span footer__form-span_type-popup">Комментарии</span>
                    <textarea 
                        type="text"
                        className="footer__form-textarea footer__form-textarea_type-popup"
                        name="comment"
                        value={comment.value}
                        onChange={comment.onChange}
                    ></textarea>

                    <button 
                        className="button-green button-green_footer button-green_footer_type-popup"  
                        type='submit'
                    >
                        <p className="button-green__text button-green__text_type-popup">{submitButtonText}</p>
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Popup;