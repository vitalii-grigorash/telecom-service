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

        <a href="mailto:ooo.telecomservice@yandex.ru" className="header-info__container">
          <p className="header-info__icon-email"></p>
          ooo.telecomservice@yandex.ru
        </a>

        <a href="https://yandex.ru/maps/2/saint-petersburg/house/rybatskiy_prospekt_18/Z0kYcwdjTE0OQFtjfXR1cXVrYQ" target="_blank" rel="nofollow noreferrer" className="header-info__container header-info__container_location">
          <p className="header-info__icon-vector"></p>
          г. Санкт-Петербург, Рыбацкий проспект, д. 18
        </a>

        <a href="tel:+79062681292" className="phone-numbers__link">
          <p className="phone-numbers__icon"></p>
          +7 (906) 268-12-92
        </a>
          
        <button className="button-green" type="button">
          <p className="button-green__text" onClick={onOpenPopup}>Оставить заявку</p>
        </button>

      </div>

    </div>

  );

}

export default Header;