import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
//route - маршрут
//import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
//import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import AddForm from "./pages/AddForm";

import { Api } from "./Api";
import Ctx from "./Ctx";

//const PATH ="/";
// когда работаю с проектом локально на компьютере используем эту стрчку а 23 коментируем. 
const  PATH ="/DOGFOOD";
// когда хотим на GitHub Pages мы комментируем 21 строку

const smiles = ["fsdf"];

const App = () =>{
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr=JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"))
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods]= useState(goods);
    
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
        let usr = localStorage.getItem("user8");
        if (usr) {
            usr=JSON.parse(usr);
        }
        setUser(usr);
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
        setVisibleGoods(goods);
    }, [goods])

    return (
    <Ctx.Provider value={{
        user:user,
        token:token,
        api:api,
        modalActive:modalActive,
        goods:goods,
        visibleGoods:visibleGoods,
        setUser:setUser,
        setToken:setToken,
        setApi:setApi,
        setModalActive:setModalActive,
        setGoods:setGoods,
        setVisibleGoods:setVisibleGoods,
        PATH: PATH
        
        }}>
    <div className="wrapper">
        <Header/>
        <main>
            <Routes>
                <Route path={PATH} element={<Home data={smiles}/>}/>

                <Route path={PATH + "catalog"} element={ <Catalog data={smiles}/>}/>
                
                <Route path={PATH + "profile"} element={ <Profile />}/>
                
                <Route path={PATH + "catalog/:id"} element={<Product/>}/>

                <Route path={PATH + "add"} element={<AddForm/>}/>

                <Route path={PATH + "reviews"} element={<Reviews/>}/>
            </Routes>   
        </main>
        <Footer/>
    </div>
    <Modal />
    </Ctx.Provider>
    )
}


export default App;