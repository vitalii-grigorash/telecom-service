import React from 'react';
import logo from '../../images/logo-1.jpg';

function Header() {

  return (

    <div className="header">

      <img className="header__logo" src={logo} alt="Логотип компании ТелекомСервис" />

      <div className="header__row">

        <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer" className="header-info__map">
          <div className="header-info__icon-vector"></div>
          г. Санкт-Петербург, проспект Обуховской обороны, д. 199
        </a>

        <a href="mailto:spb178.com@yandex.ru" className="header-info__email">
          <div className="header-info__icon-email"></div>
          spb178.com@yandex.ru
        </a>

        <div className="phone-numbers__container">
          <p className="phone-numbers__number">
            <a href="tel:+78124545578" className="phone-numbers__link">
              <div className="phone-numbers__icon"></div>
              +7 (812) 454-55-78
            </a>
          </p>

          <p className="phone-numbers__number">
            <a href="tel:+79219476179" className="phone-numbers__link">
              <div className="phone-numbers__icon"></div>
              +7 (921) 947-61-79
            </a>
          </p>
        </div>

        <button className="button-green" type="button">
          <p className="button-green__text">Оставить заявку</p>
        </button>

      </div>

    </div>

  );

}

export default Header;