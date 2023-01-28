import React, {useState,useContext} from "react";
import "./style.css";
import Ctx from "../../Ctx";

import SignUp from "./SignUp"; 
import LogIn from "./LogIn";

export default (    ) => {
    const [auth, setAuth] = useState(true);
    const {modalActive,setModalActive} = useContext(Ctx)
    let style ={
        display: modalActive && "flex"
      
    }
    return <div className="modal-container" style={style} >
        <div className="modal">
            <div/>
            <i id="modal-close" className="fa-sharp fa-solid fa-paw" onClick={() =>setModalActive(false)}></i>
            <h2>{auth ? "Войти"  : "Зарегистрироваться"}</h2>
            {auth 
            ?
             <LogIn change={setAuth}  close={setModalActive} />  
            : 
             <SignUp change={setAuth}  close={setModalActive} />
             }
        </div>
    </div>
}