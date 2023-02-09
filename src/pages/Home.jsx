import React from "react";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";

export default ({data}) => {
    return <>
            <div className="home">
                <div className="cat_cont">
                    <Link className="cat" to="/catalog">Перейти в каталог</Link>
                </div>
            <Ads></Ads>
            <h2 className="hit">Хиты</h2>
            <div className="productItem">
                <div className="productItem_1">
                    <img className="itemimg" src="http://gavtorg.com/wp-content/uploads/2017/04/GAVTORG_-1-3-300x169.png"/>
                    <div className="text">
                        <h2 style={{fontSize: "20px"}}>Рога оленя для собак</h2>
                        <button  className="butnn">Цена: 350 ₽</button>
                    </div>
                </div>

                <div className="productItem_1">
                    <img className="itemimg" src="https://k-lai.ru/wp-content/uploads/2022/07/image-41.png"/>
                    <div className="text">
                        <h2 style={{fontSize: "20px"}}>Крупная говяжья сушено-вяленая жилка</h2>
                        <button className="butnn">Цена: 450 ₽</button>
                    </div>
                </div>

                <div className="productItem_1">
                    <img className="itemimg" src="https://gavtorg.com/wp-content/uploads/2021/07/PhotoRoom-20220316_124745.png"/>
                    <div className="text">
                        <h2 style={{fontSize: "20px"}}>Бублик из бычьего корня</h2>
                        <button className="butnn">Цена: 340 ₽</button>
                    </div>
                </div>
            </div>
            <h2 className="hit">Акциии</h2>
            <div className="productItem_2">
                    <img className="itemimg_1" src="https://files.lavkapitomca.ru/storage/product/00/50/90/photo/miski.png"/>
                    <div className="text">
                        <h1 className="order" style={{fontSize: "20px"}}>При заказе на 2500 ₽ вы получите двойную миску для вашего питомца </h1>
                        <button className="butnn">Посмотреть подробнее...</button>
                    </div>
                    <img  className="reklamaimg"src="https://static.insales-cdn.com/images/collections/1/4144/88715312/1-1.png" alt="" />
                </div>
                <h2 className="hit" >Специальные предложения</h2>
                <div className="productItems">
                <div className="productItem_1">
                    <img className="itemimg" src="https://shampoo.doctor/images/detailed/1/Recover_dog.png"/>
                    <div className="text">
                        <h2 style={{fontSize: "20px"}}>Шампуни и средства по уходу для собак </h2>
                        <button className="butnn">От 899 ₽</button>
                    </div>
                </div>

                <div className="productItem_1">
                    <img className="itemimg-ball" src="https://zoopt.ru/upload/iblock/078/079f448b_0c7c_11e6_80bb_002590b55a9c_1.jpg"/>
                    <div className="text">
                        <h2 style={{fontSize: "20px"}}>Игрушки для домашних питомцев</h2>
                        <button className="butnn">От 199 ₽</button>
                    </div>
                </div>
            </div>
                <div className="discription">
                    <h2 className="dis-hit">Если у вас остались вопросы - оставьте свои контакты и мы вам перезвоним</h2>
                </div>
                
                <div className="form">
                    <div className="lbl">
                        <label className="lbl-css">Введите ваше имя:</label>

                        <label className="lbl-css">Введите вашу почту:</label>

                        <label className="lbl-css">Введите номер телефона:</label>
                    </div>
                    
                    <form className="form_box">

                            <input className="input" type="text" placeholder="Как вас зовут?"/>
                        
                            <input className="input" type="email" placeholder="Введите почту..."/>
                                                
                            <input className="input" type="text" placeholder="Ваш номер телефона..."/>
    
                           
                        
                    </form>
                </div>
                
                </div>
    </>
    
}   