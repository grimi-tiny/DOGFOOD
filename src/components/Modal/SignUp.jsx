import React, { useState } from "react";

export default ({change, api, close}) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2 ] = useState("");
    const [inp3, setInp3] = useState("");
    const [testPwd, setTestPwd] = useState(true);

    const checkPwd = (val, type="main") =>{
        type === "main" ? setInp2(val): setInp3(val);

        if (val) {
            if (type === "main"){
                setTestPwd(val !== inp3);
                setInp2(val);
            }else{
                setTestPwd(val !== inp2);
                setInp3(val);
            }
        }
    }
    const sendForm = (e)=>{
        e.preventDefault();
        const body ={
            email: inp1,
            password: inp2
        }
        console.log(body);
        api.signUp(body)
            .then(res => res.json())
            .then(data => {
                    console.log(data);
                    if(!data.err){
                        api.logIn(body);
                        setInp1("");
                        setInp2("");
                        setInp3("");
                        close(false);
                    } else{
                        alert(data.message);
                        // отобразить
                    }
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
        onChange={(e) => {checkPwd(e.target.value)}}
        />
        <input 
        type="password" 
        placeholder="Повтоите пароль" 
        value={inp3} 
        onChange={(e) => {checkPwd(e.target.value, "secondary")}}
        />
        <button className="btn link" type="submit" disabled ={testPwd}>Зарегистрироваться</button>    
        <button className="btn link" type="button" onClick={()=> {change(prev => !prev)}}>Войти</button>  
    </form>
}