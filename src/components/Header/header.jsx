import React, {useContext} from "react";
import "./header.css";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import  Ctx from "../../Ctx"
import {PlusCircle,HeartFill,Cart} from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";


export default () => {
    const {user, setModalActive, PATH, favorites,basket} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    return <header>
        <Link className="logo" to={PATH}>DogFood <i class="fa-solid fa-dog"></i></Link>
        <Search />
        <nav className="menu">
            {/* добавить товар */}
            { user && <Link to={PATH + "add"}><PlusCircle style={{fontsize: "20px"}}/></Link>}

            {/* фавориты */}
            { user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontsize: "20px"}}/>
                <Badge bg="bisque" text="black">{favorites.length}</Badge>
                </Link>}

                {/* корзина */}
            { user && <Link to={PATH + "basket"} className="badge-link">
                <Cart style={{fontsize: "20px"}}/>
                <Badge bg="bisque" text="black" >
                    {basket.reduce((acc, el)=> acc + el.cnt, 0)}
                </Badge>
                </Link>}
                {/* пользователь */}
            { !user && <a href="" onClick={logIn}>Войти <i class="fa-solid fa-house"></i></a>}
            { user && user.name && <Link to= {PATH + "profile"}>{user.name}</Link>}
            
            {/* { user && <a href="" onClick={logOut}>Выйти</a>} */}
        </nav>
    </header>
}