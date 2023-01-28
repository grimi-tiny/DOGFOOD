import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";
import Ctx from "../Ctx";

export default () =>{
    const {user,setUser}=useContext(Ctx);
    const navigate = useNavigate();

    const logOut = (e) =>{
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user8");
        navigate("/");
    }
    return<>
        <h1>Личный кабинет</h1>
        <h4>Здравствуйте, {user && user.name}!</h4>
        <a href="" onClick={logOut}  style={{color: "rgba(153, 112, 112)"}}>Выйти из аккаунта</a>       
    </>
}