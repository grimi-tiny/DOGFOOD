import React, { useState, useEffect, useContext } from "react";
import {useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const productDiscountPrice = Math.round(product.price - (product.price * product.discount) / 100);
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    const {api} =useContext(Ctx);
    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    })
    return <>
        <h1>{product.name || "Страница товара"}</h1>
        
        <Link to="/catalog" style={{color: "red"}}> Вернутся в каталог</Link>
        
        <div className="Prod-description">
            
            <div className="img_id">
                <img className="product_i" src={product.pictures} alt="Здесь будет фотография товара" />
            </div>
            
            <div className="price">

                <div className="css_price">
                    <h3>Цена <i class="fa-solid fa-ruble-sign"></i></h3>
                    <p >{product.price} ₽</p>
                    
                    <button className="butnn">
                        <span style={{color: "rgb(228, 26, 66)" }} 
                        className={product.discount > 0 
                            ? 
                                "product__price product__price_type_discount" 
                            : 
                                "product__price"}>{productDiscountPrice} ₽
                        </span>
                         <br />Добавить в корзину
                         </button>
                
                    
                </div>
                
                <div className="cross">
                    <i class="fa-sharp fa-solid fa-slash"></i>
                </div>
                
                
                
                    <p className="discouner">{product.discount} % 
                        <i class="fa-solid fa-tag"></i>
                    </p>          
                
            </div>

            <div className="dile-garant">
            
                <div className="garantia">
                    <h2><i class="fa-sharp fa-solid fa-car-side"></i> Доставка по всему миру!</h2>
                    <p>Доставка курьером - <span className="spn"> от 399₽</span></p>
                    <p>Доставка в пункт выдачи - <span className="spn"> от 199₽</span></p>
                </div>  
                
                <div className="garantia">
                    <h2><i class="fa-solid fa-trophy"></i> Гарантия качества!</h2>
                    <p className="p">Если Вам не понравится качество нашей продукции, мы вернем деьги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>    
                </div>  
            
            </div>
        
        </div>
        
        <div className="description">
            <h3>Описание товара:</h3>
                <p>{product.description}</p>
            <h3>Характерситики:</h3>
                <p>Вес: {product.wight}</p>
                <p>Количество: {product.stock} штук </p>
               <h3>Отывы:</h3>
            <Link to="/reviews"> Перейти к отзывам</Link>  
        </div>
        
       
            <div className="reviews">
                {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
            </div>
    </>
}