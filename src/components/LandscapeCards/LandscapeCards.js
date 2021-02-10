import React from 'react';
import cardGrass from '../../images/card-grass.jpg'
import imgFive from '../../images/img-5.jpg'
import imgSix from '../../images/img-6.jpg'

function LandscapeCards(props) {

  const { 
    onOpenPopup,
} = props;

  return (
    <div className="landscape-cards">

      <div className="about-work">

        <div className="about-work__right-green">
          <img className="about-work__img" src={cardGrass} alt="Фотография образец" />
          <div className="about-work__description-container">
            <h3 className="about-work__heading-green">Устройство газонов</h3>
            <p className="about-work__description">Это рекультивация земельного участка с заменой существующего грунта на плодородный
              и посев газона. Мы находимся не в Англии, устройство газонов в Санкт-Петербурге, это скорее, дань красоте, а не природный
              фактор. Здесь нет возможности подстричь существующий газон, засеять семенами залысины и забыть. Нам приходится подбирать грунт,
              подбирать семена, производить подкормку травы удобрениями. В редких случаях, когда нужен быстрый и надежный результат, производится
              настил газона в матах или рулонах. Данный способ более дорогостоящий, но приносит быстрый и качественный результат. Стоит отметить
              стоимость выше средней и трудоемкий уход за покрытием в первые месяцы.
            </p>
            <button className="about-work-button-green" type="button" onClick={onOpenPopup}>
              <p className="about-work-button__text-green">Оставить заявку</p>
            </button>
          </div>
        </div>

        <div className="about-work__left-green">
          <img className="about-work__img-left" src={imgFive} alt="Фотография образец" />
          <div className="about-work__description-container-left">
            <h3 className="about-work__heading-green">Посадка деревьев, посадка кустарников</h3>
            <p className="about-work__description">Это поле для творчества нашего ландшафтного дизайнера. Оградить дорожки или размежевать
              линии отличных друг от друга покрытий можно за счёт посадки деревьев и кустарников. Разместить дерево – это произвести устройство
              лунки под посадочный материал, произвести размещение с добавлением плодородной земли, произвести прикормку растения удобрениями.
              Апробация кустарников похожа по технологии, описанной выше, но имеет более декоративный оттенок. Здесь, действительно, нет предела
              для творчества. В данный момент агрономы вывели невероятное количество растений, пригодных для нашего региона. В зависимости от 
              задачи, бюджета и пожеланий, можно сотворить картинку, которая будет радовать глаз и долго напоминать о правильности проделанной работы.
            </p>
            <button className="about-work-button-left-green" type="button" onClick={onOpenPopup}>
              <p className="about-work-button__text-green">Оставить заявку</p>
            </button>
          </div>
        </div>

        <div className="about-work__right-green">
          <img className="about-work__img" src={imgSix} alt="Фотография образец" />
          <div className="about-work__description-container">
            <h3 className="about-work__heading-green">Снос и посадка зелёных насаждений</h3>
            <p className="about-work__description">Это услуга, которая наиболее востребована. Зачастую, необходим 
              перенос детских площадок для увеличения парковочной зоны, либо другое изменение архитектурного плана 
              участка для большего удобства. Есть несколько вариантов, как поступить с зелёными друзьями. Можно вырубить 
              деревья и кустарники и высадить новые, можно перенести существующие с большой долей сохранения. Целесообразно, 
              конечно, запустить естественный механизм смены поколений посадок, ведь у всего есть свой срок службы. Но мы живём 
              в Санкт-Петербурге, это город парадных, поребриков и вечной памяти блокады Ленинграда. Мы часто руководствуемся 
              желанием сохранить близкий сердцу уголок. И здесь, в отличии, от многих, «БлагоСтрой-Проект» всегда идёт на встречу!
            </p>
            <button className="about-work-button-green" type="button" onClick={onOpenPopup}>
              <p className="about-work-button__text-green">Оставить заявку</p>
            </button>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default LandscapeCards;