import React, { useState, useEffect, useContext } from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {Trash3} from "react-bootstrap-icons";
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({name, pictures, price, likes, _id}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    const productDiscountPrice = Math.round(product.price - (product.price * product.discount) / 100);
    const {api, PATH, user, setGoods,setBasket} = useContext(Ctx);
    const navigate = useNavigate();

    const [like, setLike] = useState(likes && likes.includes(user._id));
    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);
    const btnSt = {
        position: "absolute",
        right: "20px",
        top: "120px",
        cursor: "pointer",
        height: "auto"
    }
    const remove = () => {
        api.deleteProducts(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setGoods(prev => prev.filter(g => g._id !== data._id))
                    navigate(`${PATH}catalog`);
                }
            })
    }
    const buy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev =>{
            const test= prev.filter(el => el._id === _id)
            if(test.length){
                return prev.map(el => {
                    if (el.id === _id){
                        el.cnt++;
                    }
                    return el;
                });
            }else{
                return [...prev,{id: _id, cnt: 1}]
            }
            
        })
        
    }
    useEffect (() =>{
        api.getProducts()
        .then(res => res.json())
        .then(data =>{
            if (!data.error){
                setGoods(data.products);
            }
        })
    }, [like])
    return <>
        {product && product.author && product.author._id === user._id && <button 
            onClick={remove} 
            className="btn" 
            style={btnSt}
        >
            <Trash3/>
        </button>}
        <h1>{product.name || "Страница товара"}</h1>
        
        <h3>{product.id}</h3>
        <Link to={PATH + "catalog"} style={{color: "red"}}> Вернутся в каталог</Link>
        
        <div className="Prod-description">
            
            <div className="img_id">
                <img className="product_i" src={product.pictures} alt="Здесь будет фотография товара" />
            </div>
            
            <div className="price">

                <div className="css_price">
                    <h3>Цена <i class="fa-solid fa-ruble-sign"></i></h3>
                    <p >{product.price} ₽</p>
                    
                    <button className="butnn" onClick={buy}>
                        <span style={{color: "rgb(228, 26, 66)" }} 
                        className={product.discount > 0 
                            ? 
                                "product__price product__price_type_discount" 
                            : 
                                "product__price"}>{productDiscountPrice} ₽
                        </span>
                        
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
            <Link to={`/catalog/${id}/reviews`}> Перейти к отзывам</Link>  
        </div>
    </>
}