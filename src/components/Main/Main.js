import React from 'react';
import Header from '../Header/Header';
import Asphalt from '../Asphalt/Asphalt'
import Landscape from '../Landscape/Landscape'

function Main (props) {

  const { 
    onOpenPopup,
} = props;
  
    return (
      <div className="main">
        <div  className="main__background">
          <Header
            onOpenPopup={onOpenPopup}
          />
            <div className="heading__container">
                <h1 className="heading__header">ТелекомСервис — Благоустройство территорий и асфальтирование</h1>
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