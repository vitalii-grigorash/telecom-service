import React from 'react';
import asphaltImg from '../../images/asphalt-img.jpg'
import imgTwo from '../../images/img-2.jpg'
import imgThree from '../../images/img-3.jpg'
import imgFour from '../../images/img-4.jpg'

function AsphaltCards (props) {

    const { 
        onOpenPopup,
    } = props;
  
    return (

        <div className="about-work">

            <div className="about-work__right">
                <div className="about-work__img-container">
                    <img className="about-work__img" src={asphaltImg} alt="Фотография образец" />   
                </div>
                <div className="about-work__container">
                    <div className="about-work__description-container">
                        <h3 className="about-work__heading">Капитальный ремонт дорожного покрытия (асфальтирование дорог)</h3>
                        <p className="about-work__description">Ремонт дорожного покрытия – это 80% усилий на 
                            демонтаж асфальтобетонного покрытия. И только 20% — это асфальтирование.
                        </p>
                        <p className="about-work__description">
                            Зачастую, перед тем как сделать капитальный ремонт дороги или площадки, есть необходимость в следующих работах:
                        </p>
                        <ul className="about-work__lists">
                            <li className="about-work__list">Ремонт колодцев</li>
                            <li className="about-work__list">Замена труб и других инженерных сетей</li>
                            <li className="about-work__list">Проектирование и устройство новых ливнесточных колодцев</li>
                        </ul>
                        <p className="about-work__description">
                            Данные виды работ связаны с нежелательностью «вскрытия» асфальтного полотна и тем самым 
                            нарушения целостности покрытия после окончания асфальтирования.
                        </p>
                        <button className="about-work-button" type="button" onClick={onOpenPopup}>
                            <p className="about-work-button__text">Оставить заявку</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="about-work__left">
                <div className="about-work__img-container-left">
                    <img className="about-work__img-left" src={imgTwo} alt="Фотография образец" />
                </div>
                <div className="about-work__container">
                    <div className="about-work__description-container-left">
                        <h3 className="about-work__heading">Ямочный ремонт асфальтобетонного покрытия</h3>
                        <p className="about-work__description">Асфальтированная территория нуждается в выборочном ремонте асфальта. 
                            Это обусловлено механическими повреждениями, проводимыми работами, аварийным ремонтом инженерных сетей. Естественно, при данной ситуации, 
                            найдется много желающих прописать один пункт в договоре – замена асфальтного покрытия. Но, позвольте, зачем менять то, что продержится еще 
                            не один год или десятилетие?! Ответ очевиден.
                        </p>
                        <p className="about-work__description">
                            Многие строители, как и люди других профессий, давно уже пошли на сделку с совестью и рассматривают свою деятельность 
                            только как коммерческий проект. Мы же предлагаем: произвести демонтаж поврежденных участков, комплекс работ по укреплению 
                            основания и улучшению адгезии, ямочный ремонт асфальта. Разница в стоимости будет существенна!
                        </p>
                        <p className="about-work__description">
                            Будем рады, если Вы выберете нашу организацию для снятия асфальтобетонного покрытия и укладки асфальта по истечении 
                            срока годности всего «асфальтного полотна».
                        </p>
                        <button className="about-work-button-left" type="button" onClick={onOpenPopup}>
                            <p className="about-work-button__text">Оставить заявку</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="about-work__right">
                <div className="about-work__img-container">
                    <img className="about-work__img" src={imgThree} alt="Фотография образец" />
                </div>
                <div className="about-work__container">
                    <div className="about-work__description-container">
                        <h3 className="about-work__heading">Отмостка из асфальта</h3>
                        <p className="about-work__description">Производство работ по демонтажу ветхой отмостки для дальнейшего устройства отмостки из 
                            асфальтобетона — это основные этапы работ, необходимые для предотвращения разрушений фундамента из-за неисправности водоотведения здания. 
                            Специалисты ООО «БлагоСтрой-Проект» решают задачи по монтажу асфальтной отмостки регулярно. За счет опыта сможем предложить адекватный 
                            анализ существующего основания отмостки дома и самый экономичный выход из ситуации. При этом просчитав экономику, учитывая стоимость 
                            ремонта и сроки эксплуатации.
                        </p>
                        <button className="about-work-button" type="button" onClick={onOpenPopup}>
                            <p className="about-work-button__text">Оставить заявку</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="about-work__left">
                <div className="about-work__img-container-left">
                    <img className="about-work__img-left" src={imgFour} alt="Фотография образец" />
                </div>
                <div className="about-work__container">
                    <div className="about-work__description-container-left">
                        <h3 className="about-work__heading">Реконструкция асфальтобетонного покрытия</h3>
                        <p className="about-work__description">При условии, что основание сделали качественно, а «ковёр» 
                            пришёл в состояние естественного износа, зачастую мы предлагаем реконструкцию полотна. Для начала 
                            делаем фрезеровку полотна, далее готовим основание и производим укладку асфальта. Быстро, недорого и долговечно.
                        </p>
                        <button className="about-work-button-left" type="button" onClick={onOpenPopup}>
                            <p className="about-work-button__text">Оставить заявку</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
  }
  
  export default AsphaltCards;