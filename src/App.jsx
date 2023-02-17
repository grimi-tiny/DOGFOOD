import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
//route - маршрут
import "bootstrap/dist/css/bootstrap.min.css"
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
import Favorites from "./pages/Favorites";

import { Api } from "./Api";
import Ctx from "./Ctx";
import Basket from "./pages/Basket";
// import Fake from "./pages/Fake";



const PATH ="/";
// когда работаю с проектом локально на компьютере используем эту стрчку а 23 коментируем. 
//const  PATH ="/DOGFOOD";
// когда хотим на GitHub Pages мы комментируем 21 строку

const smiles = ["123","1234","12345","123456","1234567"];

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
    const [favorites, setFavorites] = useState([]);
    const [basket,setBasket] =useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket8")) : [])

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
    useEffect(() => {
        if (goods && goods.length) {
            setFavorites(goods.filter(el => {
                // Найти только те товары, в которых свойство likes ([]) включает в себя id моего пользователя
                return el.likes && el.likes.includes(user._id);
            }))
        }
    }, [goods])
    useEffect(() =>{
        console.log("basket");      
            localStorage.setItem("basket8", JSON.stringify(basket))
        
    }, [basket])
    return (
    <Ctx.Provider value={{
        user:user,
        token:token,
        api:api,
        modalActive:modalActive,
        goods:goods,
        visibleGoods:visibleGoods,
        favorites: favorites,
        setUser:setUser,
        setToken:setToken,
        setApi:setApi,
        setModalActive:setModalActive,
        setGoods:setGoods,
        setVisibleGoods:setVisibleGoods,
        setFavorites: setFavorites,
        PATH: PATH,
        basket,
        setBasket
        
        }}>
    <div className="wrapper">
        <Header/>
        <main className="py-4">
            <Routes>
                <Route path={PATH} element={<Home data={smiles}/>}/>

                <Route path={PATH + "catalog"} element={ <Catalog data={smiles}/>}/>
                
                <Route path={PATH + "profile"} element={ <Profile />}/>
                
                <Route path={PATH + "catalog/:id"} element={<Product/>}/>

                <Route path={PATH + "add"} element={<AddForm/>}/>

                <Route path={PATH + "catalog/:id/reviews"} element={<Reviews/>}/>

                <Route path={PATH + "favorites"} element={<Favorites/>}/>
                
                {/* <Route path={PATH + "fake/:n/:title"} element={<Fake/>}/> */}
                <Route path={PATH + "basket"} element={<Basket/>}/>

            </Routes>   
            {/* <ul>
            {smiles.map((el,i) => <li key={el}>
                <Link to={`${PATH}fake/${i+1}/${el}`}>{el}</Link></li>)}
            </ul> */}
        </main>
        <Footer/>
    </div>
    <Modal />
    </Ctx.Provider>
    )
}


export default App;