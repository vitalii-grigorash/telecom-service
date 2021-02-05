import React from 'react';
import LandscapeCards from '../LandscapeCards/LandscapeCards'

function Landscape() {

  return (
    <div className="landscape">
      <h1 className="landscape__heading">Благоустройство территорий</h1>
      <div className="landscape__heading-container">
        <div className="landscape__description-container">
          <p className="landscape__description">
            Благоустройство – достаточно объемное определение, включающее в себя: настил покрытий, озеленение, возведение площадочного 
            оборудования, установку памятников и МАФ (малые архитектурные формы).
          </p>
          <p className="landscape__description">
            Зачастую, трудам по благоустройству, как мы привыкли понимать данное понятие, 
            предшествуют следующие этапы:
          </p>
          <ul className="landscape__lists">
            <li className="landscape__list">Демонтаж существующего двора, сквера, сада и т.д.</li>
            <li className="landscape__list">Планирование участка (ландшафтный дизайн)</li>
            <li className="landscape__list">Монтаж подземных инженерных сетей (устройство дренажной системы, заложение водоотведения, прокладка электрических кабелей, монтаж слаботочных проводов и т.д.)</li>
            <li className="landscape__list">Разработка искусственных или отсечение природных водоемов</li>
          </ul>
        </div>
      </div>
      <LandscapeCards />
    </div>
  );
}

export default Landscape;