import React, {useState} from "react";
import "./header.css";
import Search from "../Search/search";


export default ({user, setUser, products}) => {
    /*const [user, setUser] = useState(localStorage.getItem("user8"));

/*    let user = localStorage.getItem("user8");*/
    const logIn = (e) =>{
        e.preventDefault();
        let name = prompt("Whats your name?");
        if (name){
            localStorage.setItem("user8", name);
            setUser(name);
        }
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <a className="logo" href="">DoogFood</a>
        <Search data={products}/>
        <nav className="menu">
            { user && <a href="">{user}</a>}
            { !user && <a href="" onClick={logIn}>Войти</a>}
            { user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}