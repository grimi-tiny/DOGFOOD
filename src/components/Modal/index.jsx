import React, {useState} from "react";
import "./style.css";

import SignUp from "./SignUp"; 
import LogIn from "./LogIn";

export default ({isActive, setState,  api, setToken}) => {
    const [auth, setAuth] = useState(true);
    let style ={
        display: isActive && "flex"
      
    }
    return <div className="modal-container" style={style} >
        <div className="modal">
            <div/>
            <i id="modal-close" className="fa-sharp fa-solid fa-paw" onClick={() =>setState(false)}></i>
            <h2>{auth ? "Войти"  : "Зарегистрироваться"}</h2>
            {auth 
            ?
             <LogIn change={setAuth} api={api} close={setState} setToken={setToken}/>  
            : 
             <SignUp change={setAuth} api={api} close={setState} setToken={setToken}/>}
        </div>
    </div>
}