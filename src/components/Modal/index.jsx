import React, {useState} from "react";
import "./style.css";

import SignUp from "./SignUp"; 
import LogIn from "./LogIn";

export default ({isActive, setState}) => {
    const [auth, setAuth] = useState(true);
    let style ={
        display: isActive && "flex"
      
    }
    return <div className="modal-container" style={style}>
        <div className="modal">
            <div className="modal-close" onClick={() =>setState(false)}/>
            <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
            {auth ? <LogIn change={setAuth}/>  : <SignUp change={setAuth}/>}
        </div>
    </div>
}