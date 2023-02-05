import React from "react";
import "./ads.css";
import pug from "./img/pug1.jpg";

export default ()=>{
    return <div className="promo">
    <h1 style={{fontSize: "35px"}}>Порадуй своего питомца вкуными новинками!</h1>
    <img src={pug} alt="Мопсик" />
    </div>
}