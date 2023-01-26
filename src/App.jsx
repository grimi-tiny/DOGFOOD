import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
//route - маршрут

import "./style.css";
//import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";

import Modal from "./components/Modal";

import { Api } from "./Api";



const smiles = ["fsdf"];

const App = () =>{
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"))
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visiableGoods, setVisiableGoods]= useState(goods);
    
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
    useEffect(() =>{
        setVisiableGoods(goods);
    }, [goods])
    return (
    <>
    <div className="container">
        <Header 
        user={user}
        setUser={setUser}
        //products={products}
        goods={goods}
        searchGoods={setVisiableGoods}
        setModalActive={setModalActive}/>
        <main>
            <Routes>
                <Route path="/" element={<Home data={smiles}/>}/>

                <Route path="/catalog" element={ <Catalog data={visiableGoods}/>}/>
                
                <Route path="/profile" element={ <Profile setUser={setUser} user={user}/>}/>
                
                <Route path="/catalog/:id" element={<Product/>}/>

                <Route path="/reviews" element={<Reviews/>}/>
            </Routes>   
        </main>
        <Footer/>
    </div>
    <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
    </>
    )
}

export default App;