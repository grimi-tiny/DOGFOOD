import React from "react";
import "./footer.css";

export default () => {
    const year = new Date().getFullYear();
    return <footer> 
        <span className="footer__copy">&copy;{year}</span>
        <span className="footer__text">Сайт разработан <br/>с использованием библиотеки React</span>
        </footer>
}