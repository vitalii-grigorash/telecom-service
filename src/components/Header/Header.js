import React from 'react';
import logo from '../../images/logo-1.jpg';
import phoneIcon from '../../images/svg/phone-icon.svg';
import vector from '../../images/svg/vector.svg';
import emailIcon from '../../images/svg/email-icon.svg';

function Header() {

    return (

      <div className="header">

          <img className="header__logo" src={logo} alt="Логотип компании ТелекомСервис"/>

          <div className="header__row">

            <a href="https://yandex.ru/maps/-/CCUMu0GBkC" target="_blank" rel="nofollow noreferrer" className="header__info">г. Санкт-Петербург, проспект Обуховской обороны, д. 199</a>
            <a href="mailto:spb178.com@yandex.ru" className="header__info">spb178.com@yandex.ru</a>
  
            <div className="phone-numbers__container">
  
              <p className="phone-numbers__number">
                <img className="phone-numbers__icon" src={phoneIcon} alt="Иконка трубки"/>
                <a href="tel:+78124545578">+7 (812) 454-55-78</a>
              </p>
  
              <p className="phone-numbers__number">
                <img className="phone-numbers__icon" src={phoneIcon} alt="Иконка трубки"/>
                <a href="tel:+79219476179">+7 (921) 947-61-79</a>
              </p> 
  
            </div>

            <button className="header__button" type="button">
              <p className="header__button-text">Оставить заявку</p> 
            </button>

          </div>

      </div>

    );

  }
  
  export default Header;