import React from "react";
import { Link } from "react-router-dom";

export default ({setUser, user}) =>{
    const logOut = (e) =>{
        e.preventDefault();
        setUser=("");
    }
    return<>
        <h1>Личный кабинет</h1>
        <p>Привет, {user}</p>
        <Link to="" onClick={logOut}>Выйти из аккаунта</Link>
    </>
}