import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
//route - маршрут

import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Modal from "./components/Modal";

import { Api } from "./Api";



const smiles = ["fsdf"];

const App = () =>{
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"))
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    
    useEffect(() => {
        console.log("Hello")
        console.log(token);
            if (token) {
                //загрузить данные с сервера
            }
            api.getProducts()
                .then(res => res.json())
                .then(data => { setGoods(data.products);
                })
    }, []); //функция сработает один раз при создании компонента

    useEffect(() =>{
        console.log("Change token")
        setApi(new Api(token));
        setUser(localStorage.getItem("user8"))
    }, [token]);
    
    useEffect(()=>{
        if (!user){
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        if (token){
            //Загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {setGoods(data.products);
                })
        }
    }, [api])
    return (
    <>
    <div className="container">
        <Header 
        user={user}
        setUser={setUser}
        products={products}
        setModalActive={setModalActive}/>
        <main>
            <Routes>
                <Route path="/" element={<Home data={smiles}/>}/>
                <Route path="/catalog" element={
                    <Catalog data={goods}/>}/>
                <Route path="/profile" element={
                    <Profile setUser={setUser} user={user}/>
                }/>
            </Routes>   
        </main>
        <Footer/>
    </div>
    <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
    </>
    )
}

export default App;