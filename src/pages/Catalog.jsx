import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";

export default ({data}) => {
    return <>
    {data.length > 0 
    ? <>
            <h1>Каталог товаров</h1>
                <div className="cards">
                     {data && data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Card 
                            key={"card_" + i} 
                            text={el.name} 
                            like={(i+1) % 2 ===0 }
                            picturues={el.picturues}
                            weight={el.weight}/>
                        </Link>)}
                </div>
            </>
            : <div className="err-search">
                <EmojiFrown/>
                <h4 >Простите, по вашему запросу товаров не найдено</h4>
                <Link to="/" className="butn-err">Вернуться на главную страницу</Link>
            </div>
        }
    </>
}