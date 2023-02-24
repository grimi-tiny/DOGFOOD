import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";

export default ({name, pictures, price, likes, _id}) => {
    const {user, setFavorites, api, setGoods, setVisibleGoods, setBasket} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));
    const [flag, setFlag] = useState(false);

    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setFlag(true);
        setLike(!like); // false => true
        api.setLike(_id, like) // false
            .then(res => res.json())
            .then(data => {
                setFavorites(prev => {
                    let arr = prev.filter(el => el._id === _id);
                    return arr.length > 0 ? 
                        prev.filter(el => el._id !== _id) : 
                        [...prev, data]
                })
                setGoods(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
                setVisibleGoods(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
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
    useEffect(() =>{
        if (flag){
            api.getProducts()
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setGoods(data.products);
                }
            })
        }
    }, [like])
    
    return <div className="card">
        <img src={pictures} alt={name} style={{height: "150px"}}/>
        <h3 className="card_name">{name}</h3>
        <button className="butn-card" onClick={buy}> Купить товар {price}</button>
        <span className="card__heart" onClick={update}>
        {
        like
        ? <i className="fa-solid fa-heart"></i>
        : <i className="fa-regular fa-heart"></i>
        }
        
    </span>
    </div>
}

