import React, {useState,useContext} from "react";
import "./search.css"
import { useNavigate } from "react-router";
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/xmark-solid.svg";
import Ctx from "../../Ctx";

export default () =>{
    const navigate = useNavigate();
    const {goods,setVisibleGoods, PATH} = useContext(Ctx);
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(goods);
    const clearSearch = ()=>{
        updateText("");
        setSearchData(goods);
        setVisibleGoods(goods);
    }
    const search = (e) => {
        navigate(PATH +"catalog");
        updateText(e.target.value);
        let arr = goods.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchData(arr);
        console.log(arr);
        setVisibleGoods(arr);
    }
    return <div className="search-block">
        <input placeholder="Поиск..." value={text} onChange={search}/>
            <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
            { text && (
            <div className="search-result">
                 По запросу <b>{text}</b>&nbsp;
                 {searchData.length > 0 
                 ? ` найдено ${searchData.length} товаров`
                 : " ничего не найдено"}
                 </div>)}
    </div>
};