import React from "react";
import "./footer.css";
import { Telegram, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";

export default () => {
    const year = new Date().getFullYear();
    return <footer> 
        <span className="footer__copy">&copy; {year}</span>
        <div className="foot">
            <span className="footer__text">Сайт разработан <br/>с использованием библиотеки React</span>
            <div className="messegers">
            <Telegram href=""/>
            <Instagram href=""/>
            <Twitter href=""/>
            <Whatsapp href=""/>
            </div>
        </div>
        </footer>
}