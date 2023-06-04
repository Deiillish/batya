import React from 'react';
import Catalog from "../../components/catalog"
import HeaderSubSpace from "../../components/helpcomponents/headerspace"
import {Link} from "react-router-dom";
import Popup from "../../components/popup1";
import { useState } from "react";
import Moreinfo from "../../components/moreinfo";
import HelpP from '../../components/helpcomponents/helpP';
function Generator1() {
    
    const [state, setState] = useState({ 
        MPcontent:
         <div className="card__table-wrapper">
        <table width="100%">
                    <tr>
            <td>Мощность</td>
            <td>16 кВт 20 kVa</td>
        </tr>
                    <tr>
            <td>Двигатель</td>
            <td>атм. дизель 26 л.с.</td>
        </tr>
                    <tr>
            <td>Расход под нагр. 75% (л. в час)</td>
            <td>3.9 л. в час</td>
        </tr>
                    <tr>
            <td>Напряжение/Частота /Сила тока</td>
            <td>220/380 50/60 30.4</td>
        </tr>
                    <tr>
            <td>Объем бака (л)</td>
            <td>65 литров</td>
        </tr>
                    <tr>
            <td>Вес</td>
            <td>630 кг</td>
        </tr>
                    <tr>
            <td>Габариты</td>
            <td>1550 х 700 х 950</td>
        </tr>
        </table>
        <h2>Стоимость</h2>
        <table width="100%">
                                            <tr>
            <td>в сутки, ТО вкл</td>
            <td>1 600 руб </td>
        </tr>
                                                        <tr>
            <td>в сутки, ТО вкл</td>
            <td>1 900 руб с НДС</td>
        </tr>
                                                        <tr>
            <td>резерв + моточас 100 руб</td>
            <td>800 руб</td>
        </tr>
                            </table>
        </div>,
        MPClass1: "item__content__top-button buttonActive",
        MPClass2: "item__content__top-button",
        afd:"dd"
    });
    
    return (
        <>
        <HeaderSubSpace/>
        <Catalog/>

        <div className='item__wrapper'>
            <div className='item__tittle'>Аренда дизельного генератора 16 кВт Airman SDG 25 S   </div>
            <div className='item__container'>
                <div className='item__content'>
                    <div className='item__content__top'>
                        <button className={state.MPClass1} onClick={()=>{
                            setState({
                                MPcontent:
                                <div className="card__table-wrapper">
    <table width="100%">
                <tr>
        <td>Мощность</td>
        <td>16 кВт 20 kVa</td>
    </tr>
                <tr>
        <td>Двигатель</td>
        <td>атм. дизель 26 л.с.</td>
    </tr>
                <tr>
        <td>Расход под нагр. 75% (л. в час)</td>
        <td>3.9 л. в час</td>
    </tr>
                <tr>
        <td>Напряжение/Частота /Сила тока</td>
        <td>220/380 50/60 30.4</td>
    </tr>
                <tr>
        <td>Объем бака (л)</td>
        <td>65 литров</td>
    </tr>
                <tr>
        <td>Вес</td>
        <td>630 кг</td>
    </tr>
                <tr>
        <td>Габариты</td>
        <td>1550 х 700 х 950</td>
    </tr>
    </table>
    <h2>Стоимость</h2>
    <table width="100%">
                                        <tr>
        <td>в сутки, ТО вкл</td>
        <td>1 600 руб </td>
    </tr>
                                                    <tr>
        <td>в сутки, ТО вкл</td>
        <td>1 900 руб с НДС</td>
    </tr>
                                                    <tr>
        <td>резерв + моточас 100 руб</td>
        <td>800 руб</td>
    </tr>
                        </table>
                                </div>,
                                MPClass1:"item__content__top-button buttonActive",
                                MPClass2:"item__content__top-button"
                            })
                        }}>Технические характеристики</button>
                        <button className={state.MPClass2} onClick={()=>{
                            setState({
                                MPcontent:<HelpP/>,
                                MPClass2:"item__content__top-button buttonActive",
                                MPClass1:"item__content__top-button"
                            })
                        }}>Оплата и Доставка</button>
                    </div>
                    <div className='item__content__main'>{state.MPcontent}</div>
                    <button className='item__content__bottom-button'>Арендовать</button>
                </div>
                <img className='item__image'></img>
            </div>
        </div>

        <Moreinfo/>
        </>
    );
    
}



export default Generator1;