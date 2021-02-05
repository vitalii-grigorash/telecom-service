import React from 'react';
import Header from '../Header/Header';
import Asphalt from '../Asphalt/Asphalt'
import Landscape from '../Landscape/Landscape'

function Main () {
  
    return (
      <div className="main">

        <div  className="main__background">
          <Header />
            <div className="heading__container">
                <h1 className="heading__header">ТелекомСервис — Благоустройство территорий и асфальтирование</h1>
                <button className="button-green" type="button">
                    <p className="button-green__text">Оставить заявку</p>
                </button>
            </div>
        </div>

        <Asphalt />

        <Landscape />
  
      </div>
    );
  }
  
  export default Main;