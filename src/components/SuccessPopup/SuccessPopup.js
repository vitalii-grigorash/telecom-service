import React from 'react';

function SuccessPopup(props) {

    const { 
        isOpen, 
        onClose,
    } = props;

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('success-popup_opened')) {
            onClose();
        }
    }

    return (

        <div className={`success-popup ${isOpen && 'success-popup_opened'}`} onMouseDown={handleOverlayClose}>

            <div className="success-popup__background">

                <button
                    type='button'
                    className='success-popup__close-button'
                    onClick={onClose}
                ></button>

                <p className="success-popup__title">Заявка успешно отправлена!</p>

                <button
                    type='button'
                    className='success-popup__ok-button'
                    onClick={onClose}
                >
                    <p className="success-popup__ok-button-text">Закрыть</p>
                </button>

            </div>

        </div>
    )
}

export default SuccessPopup;