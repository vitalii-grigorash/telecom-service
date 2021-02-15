import React from 'react';
import logo from '../../images/logo-1.jpg';

function Header(props) {

  const { 
    onOpenPopup,
    isMobilePopupOpen,
    onMobilePopupOpen,
    onMobilePopupClose,
} = props;

  return (

    <div className="header">

      <img className="header__logo" src={logo} alt="Логотип компании ТелекомСервис" />

      <div className="header__burger-menu" onClick={onMobilePopupOpen}></div>

      <div className="header__row">

        <a href="mailto:ooo.telecomservice@yandex.ru" className="header-info__container">
          <p className="header-info__icon-email"></p>
          ooo.telecomservice@yandex.ru
        </a>

        <a href="https://yandex.ru/maps/2/saint-petersburg/house/rybatskiy_prospekt_18/Z0kYcwdjTE0OQFtjfXR1cXVrYQ" target="_blank" rel="nofollow noreferrer" className="header-info__container header-info__container_location">
          <p className="header-info__icon-vector"></p>
          г. Санкт-Петербург, Рыбацкий проспект, д. 18
        </a>

        <a href="tel:+79062681292" className="phone-numbers__link phone-numbers__link_header">
          <p className="phone-numbers__icon"></p>
          +7 (906) 268-12-92
        </a>
          
        <button className="button-green button-green_header" type="button">
          <p className="button-green__text" onClick={onOpenPopup}>Оставить заявку</p>
        </button>

      </div>

      <div className={`header-mobile-popup ${isMobilePopupOpen && 'header-mobile-popup_active'}`}>

        <button
          type='button'
          className='header-mobile-popup__close-button'
          onClick={onMobilePopupClose}
        ></button>

        <div className="header-mobile-popup__links-row">

          <a href="tel:+79062681292" className="header-mobile-popup__link header-mobile-popup__link_phone-number">
            <p className="header-mobile-popup__phone-numbers-icon"></p>
            +7 (906) 268-12-92
          </a>

          <a href="mailto:ooo.telecomservice@yandex.ru" className="header-mobile-popup__link">
            <p className="header-mobile-popup__emai-icon"></p>
            ooo.telecomservice@yandex.ru
          </a>

          <a href="https://yandex.ru/maps/2/saint-petersburg/house/rybatskiy_prospekt_18/Z0kYcwdjTE0OQFtjfXR1cXVrYQ" target="_blank" rel="nofollow noreferrer" className="header-mobile-popup__link">
            <p className="header-mobile-popup__vector-icon"></p>
            г. Санкт-Петербург, <br/> Рыбацкий проспект, д. 18
          </a>

        </div>

      </div>

    </div>

  );

}

export default Header;