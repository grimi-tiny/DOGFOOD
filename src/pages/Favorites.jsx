import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {favorites, PATH} = useContext(Ctx);
    const paginate = usePagination(favorites, 6);
    return <>
        {favorites.length > 0 
            ? <>
                <h1>Каталог товаров</h1>
                <Link to={PATH+"catalog"} >Вернуться в каталог</Link>  
                <Pagination hook={paginate}/>
                <div className="cards">
                    {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Card key={"card_" + i} {...el}/>
                    </Link>)}
                </div>
            </>
            : <div className="err-search">
                <EmojiFrown/>
                <p>Вы еще не добавили ни одного любимого товара</p>
                <Link to={PATH+"catalog"} className="butn-err">Вернуться в каталог</Link>
            </div>
        }
    </>
}