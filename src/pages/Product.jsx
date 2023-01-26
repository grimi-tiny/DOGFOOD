import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [users, setUsers] = useState([]);
    const productDiscountPrice = Math.round(product.price - (product.price * product.discount) / 100);
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    let token = localStorage.getItem("token8");
    useEffect(() => {
        if (token) {
            fetch(`https://api.react-learning.ru/products/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
        }
    })
    // useEffect(() => {
    //     if (token) {
    //         fetch(`https://api.react-learning.ru/v2/group-8/users`, {
    //             headers: {
    //                 authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //             console.log(data);
    //         })
    //     }
    // })*/
    return <>
        <h1>{product.name || "Страница товара"}</h1>
        <Link to="/catalog" style={{color: "red"}}> Вернутся в каталог</Link>
        <div className="Prod-description">
            <div className="img_id">
                <img className="product_i" src={product.pictures} alt="Здесь будет фотография товара" />
            </div>
            <div className="price">
                                <div className="css_price">
                <h3>Цена</h3>
                    <p>{product.price} ₽</p>
                    <span style={{color: "rgb(228, 26, 66)" }} 
                        className={product.discount > 0 
                            ? 
                                "product__price product__price_type_discount" 
                            : 
                                "product__price"}>{productDiscountPrice} ₽
                    </span></div>
                <div className="cross">
                    <i class="fa-sharp fa-solid fa-slash"></i>
                </div>
                <div className="price-butn">
                    <button className="butn">Купить</button>
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
            <h3>Описание товара</h3>
                <p>{product.description}</p>
            <h3>Характерситики</h3>
                <p>Вес: {product.wight}</p>
                <p>Количество: {product.stock} штук </p>
        </div>
        
        <h2>Отывы</h2>
        <Link to="/reviews"> Перейти к отзывам</Link>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}