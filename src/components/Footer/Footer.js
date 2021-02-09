import React from 'react';
import map from '../../images/map.jpg'

function Footer() {

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

                            <p className="phone-numbers__number">
                                <a href="tel:+78124545578" className="phone-numbers__link phone-numbers__link_black">
                                    <div className="phone-numbers__icon phone-numbers__icon_black"></div>
                                    +7 (812) 454-55-78
                                </a>
                            </p>

                            <p className="phone-numbers__number">
                                <a href="tel:+79219476179" className="phone-numbers__link phone-numbers__link_black">
                                    <div className="phone-numbers__icon phone-numbers__icon_black"></div>
                                    +7 (921) 947-61-79
                                </a>
                            </p>

                        </div>

                        <a href="mailto:spb178.com@yandex.ru" className="header-info__email header-info__email_black">
                            <div className="header-info__icon-email header-info__icon-email_black"></div>
                            spb178.com@yandex.ru
                        </a>

                        <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer" className="header-info__map header-info__map_black">
                            <div className="header-info__icon-vector header-info__icon-vector_black"></div>
                            г. Санкт-Петербург, проспект Обуховской обороны, д. 199
                        </a>

                    </div>

                </div>

                <form className="footer__form">

                    <h3 className="footer__form-heading">Остались вопросы? Наш специалист свяжется с вами</h3>

                    <span className="footer__form-span">Ваше имя</span>
                    <input
                        type="text"
                        className="footer__form-input"
                        minLength="2"
                        maxLength="40"
                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                        required
                    />

                    <span className="footer__form-span">Ваш контактный номер</span>
                    <input
                        type="text"
                        className="footer__form-input"
                        minLength="7"
                        maxLength="13"
                        required
                    />

                    <span className="footer__form-span">Комментарии</span>
                    <textarea className="footer__form-textarea"></textarea>

                    <button className="button-green button-green_footer">
                        <p className="button-green__text">Оставить заявку</p>
                    </button>

                </form>

            </div>

            <p className="footer__copyright">2021 - ТелекомСервис &copy;</p>

        </div>
    );
}

export default Footer;