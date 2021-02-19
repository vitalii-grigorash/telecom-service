import React from 'react';
import Header from '../Header/Header';
import Asphalt from '../Asphalt/Asphalt'
import Landscape from '../Landscape/Landscape'

function Main (props) {

  const { 
    onOpenPopup,
    isMobilePopupOpen,
    onMobilePopupOpen,
    onMobilePopupClose,
} = props;
  
    return (
      <div className="main">

        <div  className="main__background">

          <Header
            onOpenPopup={onOpenPopup}
            onMobilePopupOpen={onMobilePopupOpen}
            onMobilePopupClose={onMobilePopupClose}
            isMobilePopupOpen={isMobilePopupOpen}
          />

          <div className="heading__container">
            <h1 className="heading__header">ТелекомСервис — не только ваш надежный партнер в сфере телекоммуникаций, а также в благоустройстве территорий и асфалтировании</h1>
            <button className="button-green" type="button" onClick={onOpenPopup}>
              <p className="button-green__text">Оставить заявку</p>
            </button>
          </div>

        </div>

        <Asphalt
          onOpenPopup={onOpenPopup}
        />

        <Landscape
          onOpenPopup={onOpenPopup}
        />

      </div>
    );
  }
  
export default Main;