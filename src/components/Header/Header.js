import React from 'react';
import logo from '../../images/logo-1.jpg';

function Header(props) {

  const { 
    onOpenPopup,
} = props;

  return (

    <div className="header">

      <img className="header__logo" src={logo} alt="Логотип компании ТелекомСервис" />

      <div className="header__row">

        <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer" className="header-info__container header-info__container_location">
          <p className="header-info__icon-vector"></p>
          г. Санкт-Петербург, проспект Обуховской обороны, д. 199
        </a>

        <a href="mailto:spb178.com@yandex.ru" className="header-info__container">
          <p className="header-info__icon-email"></p>
          spb178.com@yandex.ru
        </a>

        <div className="phone-numbers__container">

          <a href="tel:+78124545578" className="phone-numbers__link">
            <p className="phone-numbers__icon"></p>
            +7 (812) 454-55-78
          </a>
         
          <a href="tel:+79219476179" className="phone-numbers__link">
            <p className="phone-numbers__icon"></p>
            +7 (921) 947-61-79
          </a>
          
        </div>

        <button className="button-green" type="button">
          <p className="button-green__text" onClick={onOpenPopup}>Оставить заявку</p>
        </button>

      </div>

    </div>

  );

}

export default Header;