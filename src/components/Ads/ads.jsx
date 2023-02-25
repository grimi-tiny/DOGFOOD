import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Ctx from "../../Ctx";
import "./ads.css";
import pug from "./img/pug1.jpg";
import corg from "./img/corg1.png"

export default ()=>{
    const {PATH} = useContext(Ctx);

    return <div className="promo">
    <div className="cat_cont">
    <h1 style={{fontSize: "30px"}}>Порадуй своего питомца!</h1>
        <Link className="cat" to={PATH+"catalog"} style={{fontSize: "30px"}}>Переходи в каталог</Link>
    </div>
    <img src={corg} alt="Мопсик" />
    </div>
}