import React,{useContext} from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default () => {
    const {visibleGoods,user,PATH} = useContext(Ctx);
    const paginate = usePagination(visibleGoods,9);
    
    return <>
    {user && <>
    {visibleGoods.length > 0 
    ? <>
            <h1>Каталог товаров</h1>
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
