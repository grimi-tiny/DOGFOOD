/*import React, { useState, useEffect } from "react";
import {Link,useParams} from "react-router-dom";
import Review from "../components/Review/review";

export default ()=>{
    const {id} = useParams();
    const [product, setProduct] = useState({});
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
    return<>
    <Link to="/catalog/:id">Вернуться к товару</Link>
    <h3>Отывы</h3>
    <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}*/
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
    return<>
    <Link to="/catalog/:id">Вернуться к товару</Link>
    <h3>Отывы</h3>
    <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}