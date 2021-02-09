import React from 'react';

function Popup(props) {

    const { 
        isOpen,
        onClose,
        onOverlayClose,
    } = props;

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} onMouseDown={onOverlayClose}>

            <form className="footer__form footer__form_type-popup">

                <button
                    type='button'
                    className='popup__close-button'
                    onClick={onClose}
                ></button>

                <h3 className="footer__form-heading footer__form-heading_type-popup">Остались вопросы? Наш специалист свяжется с вами</h3>

                <span className="footer__form-span footer__form-span_type-popup">Ваше имя</span>
                <input
                    type="text"
                    className="footer__form-input"
                    minLength="2"
                    maxLength="40"
                    pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                    required
                />

                <span className="footer__form-span footer__form-span_type-popup">Ваш контактный номер</span>
                <input
                    type="text"
                    className="footer__form-input"
                    minLength="7"
                    maxLength="13"
                    required
                />

                <span className="footer__form-span footer__form-span_type-popup">Комментарии</span>
                <textarea className="footer__form-textarea"></textarea>

                <button className="button-green button-green_footer">
                    <p className="button-green__text">Оставить заявку</p>
                </button>

            </form>

        </div>
    );
}

export default Popup;