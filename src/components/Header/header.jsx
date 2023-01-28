import React, {useContext} from "react";
import "./header.css";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import  Ctx from "../../Ctx"

export default () => {
    const {user, setUser, setModalActive} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to="/">DogFood <i class="fa-solid fa-dog"></i></Link>
        <Search />
        <nav className="menu">
            { user && user.name && <Link to= "/profile">{user.name}</Link>}
            { !user && <a href="" onClick={logIn}>Войти <i class="fa-solid fa-house"></i></a>}
            { user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}