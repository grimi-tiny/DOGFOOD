import React, {useState} from "react";
import "./header.css";
import Search from "../Search/search";
import {Link} from "react-router-dom";


export default ({user, setUser, goods, searchGoods, setModalActive}) => {
    /*const [user, setUser] = useState(localStorage.getItem("user8"));

/*    let user = localStorage.getItem("user8");*/
    const logIn = (e) => {
        e.preventDefault();
        /*let name = prompt("Whats your name?");
        if (name){
            localStorage.setItem("user8", name);
            setUser(name);
        }*/
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to="/">DogFood <i class="fa-solid fa-dog"></i></Link>
        <Search data={goods} searchGoods={searchGoods}/>
        <nav className="menu">
            { user && <Link to= "/profile">{user}</Link>}
            { !user && <a href="" onClick={logIn}>Войти <i class="fa-solid fa-house"></i></a>}
            { user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}