import React from 'react';
import AsphaltCards from "../AsphaltCards/AsphaltCards"

function Asphalt () {
  
    return (
        <div className="asphalt">
            <h1 className="asphalt__heading">Асфальтирование</h1>
            <div className="asphalt__description-container">
                <p className="asphalt__description">
                    Компания “ТелекомСервис” способна спроектировать дороги с учетом необходимого класса назначения, и, после проведенных геодезических 
                    испытаний, построить их. Качественный ремонт существующего дорожного покрытия – не проблема для нашей компании.
                </p>
                <p className="asphalt__description">
                    В современной действительности к вопросу асфальтирования дорог в Санкт-Петербурге приковано особое внимание общественности. Наши коллеги не 
                    раз доказывали свой непрофессионализм.
                </p>
                <p className="asphalt__description">
                    Что же касается нашей организации, мы не производим работы «дёшево» и быстро, можем предложить лишь качественно и быстро за реальную 
                    стоимость.
                </p>
            </div>
            <AsphaltCards />
        </div>
    );
  }
  
  export default Asphalt;