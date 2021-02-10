import React from 'react';
import { Validation } from '../../utils/Validation';

function Popup(props) {

    const { 
        isOpen,
        onClose,
        // onSendEmail,
    } = props;

    const name = Validation();
    const number = Validation();
    const description = Validation();

    function closePopup () {
        onClose();
        name.setValue('');
        number.setValue('');
        description.setValue('');
        name.setErrorMessage('');
        number.setErrorMessage('');
    }

    // function submitForm(evt) {
    //     evt.preventDefault();
    //     onSendEmail(name.value, number.value, description.value);
    //     closePopup();
    // }

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup();
        }
      }

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>

            <div className="popup__form-background">

            <form 
                className="footer__form footer__form_type-popup"
                // onSubmit={submitForm}
                action="https://formspree.io/f/xzbkwleg"
                method="POST"
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
                    className="footer__form-input"
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
                    className="footer__form-input"
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
                    className="footer__form-textarea"
                    name="description"
                    value={description.value}
                    onChange={description.onChange}
                ></textarea>

                <button 
                    className="button-green button-green_footer"  
                    type='submit'
                >
                    <p className="button-green__text">Оставить заявку</p>
                </button>

            </form>

            </div>

        </div>
    );
}

export default Popup;