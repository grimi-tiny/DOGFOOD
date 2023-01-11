import React, { useState } from "react";

export default ({change,api,close}) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2 ] = useState("");
   
    const sendForm = (e)=>{
        e.preventDefault();
        const body ={
            email: inp1,
            password: inp2
        }
        console.log(body); //чтобы увидеть пароль
        api.signIn(body)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInp1("");
                setInp2("");
                close(false)
            })

    }

    return <form onSubmit ={sendForm}>

        <input 
        type="email" 
        placeholder="Введите вашу почту" 
        value={inp1} 
        required
        onChange={(e) => {setInp1(e.target.value)}}
        />
        <input 
        type="password" 
        placeholder="Пароль" 
        value={inp2} 
        onChange={(e) => {setInp2(e.target.value)}}
        />
        <button className="btn link" type="submit" >Войти</button>    
        <button className="btn link" type="button" onClick={()=> {change(prev => !prev)}}>Зарегистрироваться</button>  
    </form>
}