import React, {useState} from "react";
import "./search.css"
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/xmark-solid.svg";


export default ({data}) =>{
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(data.filter(el => el.name.toLowerCase().includes(text.toLowerCase())));
    const clearSearch = ()=>{
        updateText("");
        setSearchData(data);
    }
    const search = (e) => {
        updateText(e.target.value);
        let arr = data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchData(arr);
        console.log(arr);
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