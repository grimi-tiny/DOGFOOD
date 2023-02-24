import React,{useContext, useState} from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {EmojiFrown, SortNumericUp, SortNumericDown } from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default () => {
    const {visibleGoods,user,PATH} = useContext(Ctx);
    const [sortGoods, setSortGoods] = useState(visibleGoods);
    const paginate = usePagination(sortGoods,9);
    const [btnType, setBtnType] = useState("");
    let st ={
        display:"flex",
        gap:"10px"
    }
    const updSort = (e) => {
        let el = e.currentTarget;
        let flag = false;
        if (el.classList.contains("sort")) {
            el.classList.remove("sort");
            setBtnType("");
            flag = true;
        } else {
            el.classList.add("sort");
            setBtnType(el.title);
        }
        if (flag) {
            setSortGoods(visibleGoods);
        } else {
            let data = [...visibleGoods];
            switch (el.title) {
                case "down": 
                    data.sort((a,b) => a.price - b.price);
                    break;
                case "up": 
                    data.sort((a,b) => b.price - a.price);
                    break;
                case "new": 
                    data = data.filter(d => d.tags.includes("new"));
                    break;
                case "sale": 
                    data = data.filter(d => d.discount > 0);
                    break;
            }
            setSortGoods(data);
        }
    }
    return <>
    {user && <>
    {visibleGoods.length > 0 
    ? <>
            <h1>Каталог товаров</h1>
            <div style={st}>
                        <button className={`btn sort  ${btnType === "up" ? "sort" : ""}`} title="up" onClick={updSort}><SortNumericUp/> Цены</button>
                        <button className={`btn sort ${btnType === "down" ? "sort" : ""}`} title="down" onClick={updSort}><SortNumericDown/> Цены</button>
                        <button className={`btn sort ${btnType === "new" ? "sort" : ""}`} title="new" onClick={updSort}>Новинки</button>
                        <button className={`btn sort ${btnType === "sale" ? "sort" : ""}`} title="sale" onClick={updSort}>Скидка</button>
                    </div>
            <Pagination hook={paginate}/>
                <div className="cards">
                     {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id} >
                        <Card 
                            key={"card_" + i} 
                           {...el} />
                        </Link>)}
                </div>
            </>
            : <div className="err-search">
                <EmojiFrown/>
                <h4 >Простите, по вашему запросу товаров не найдено</h4>
                <Link to={PATH} className="butn-err">Вернуться на главную страницу</Link>
            </div>
        }
    </>}
    {!user && 
    <div className="err-search">
                <EmojiFrown/>
                <h4 >Простите, у вас нет доступа к товарам без авторизации</h4>
                <Link to={PATH} className="butn-err">Вернуться на главную страницу</Link>
            </div>
    } 
    </>
}
