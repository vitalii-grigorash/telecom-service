import React from 'react';
import map from '../../images/map.jpg'
import { Validation } from '../../utils/Validation';

function Footer() {

    const name = Validation();
    const number = Validation();
    const description = Validation();

    return (
        <div className="footer">

            <h2 className="footer__heding">НАШИ КОНТАКТЫ</h2>

            <div className="footer__info-form-container">

                <div className="footer__info-container">

                    <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer">
                        <img className="footer__map" src={map} alt="Карта" />    
                    </a>

                    <div className="header__row header__row_column">

                        <div className="phone-numbers__container">

                            <div className="phone-numbers__number">
                                <a href="tel:+78124545578" className="phone-numbers__link phone-numbers__link_black">
                                    <p className="phone-numbers__icon phone-numbers__icon_black"></p>
                                    +7 (812) 454-55-78
                                </a>
                            </div>

                            <div className="phone-numbers__number">
                                <a href="tel:+79219476179" className="phone-numbers__link phone-numbers__link_black">
                                    <p className="phone-numbers__icon phone-numbers__icon_black"></p>
                                    +7 (921) 947-61-79
                                </a>
                            </div>

                        </div>

                        <a href="mailto:spb178.com@yandex.ru" className="header-info__email header-info__email_black">
                            <p className="header-info__icon-email header-info__icon-email_black"></p>
                            spb178.com@yandex.ru
                        </a>

                        <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer" className="header-info__map header-info__map_black">
                            <p className="header-info__icon-vector header-info__icon-vector_black"></p>
                            г. Санкт-Петербург, проспект Обуховской обороны, д. 199
                        </a>

                    </div>

                </div>

                <form 
                    className="footer__form"
                    action="https://formspree.io/f/xzbkwleg"
                    method="POST"
                >

                    <h3 className="footer__form-heading">Остались вопросы? Наш специалист свяжется с вами</h3>

                    <span className="footer__form-span">Ваше имя</span>
                    <input
                        type="text"
                        className="footer__form-input"
                        id="name-input"
                        name="Имя"
                        value={name.value}
                        onChange={name.onChange}
                        minLength="2"
                        maxLength="50"
                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                        required
                    />
                    <span id="name-input" className="form__input_error">{name.errorMessage}</span>

                    <span className="footer__form-span">Ваш контактный номер</span>
                    <input
                        type="text"
                        className="footer__form-input"
                        id="number-input"
                        name="Номер телефона"
                        value={number.value}
                        onChange={number.onChange}
                        minLength="3"
                        maxLength="20"
                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                        required
                    />
                    <span id="number-input" className="form__input_error">{number.errorMessage}</span>

                    <span className="footer__form-span">Комментарии</span>
                    <textarea 
                        type="text"
                        className="footer__form-textarea"
                        name="Комментарии"
                        value={description.value}
                        onChange={description.onChange}
                    ></textarea>

                    <button 
                        className="button-green button-green_footer"
                        type='submit'>
                        <p className="button-green__text">Оставить заявку</p>
                    </button>

                </form>

            </div>

            <p className="footer__copyright">2021 - ТелекомСервис &copy;</p>

        </div>
    );
}

export default Footer;