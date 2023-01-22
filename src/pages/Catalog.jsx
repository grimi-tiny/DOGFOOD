import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default ({data}) => {
    return <>
            <h1>Каталог товаров</h1>
            <div className="cards">
                     {data && data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Card 
                            key={"card_" + i} 
                            text={el.name} 
                            like={(i+1) % 3 ===0 }
                            picturues={el.picturues}
                            weight={el.weight}                            
                            />
                            </Link>)}

            </div>
</>
}