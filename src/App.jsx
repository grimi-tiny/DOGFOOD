import React, {useState} from "react";
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";

import Modal from "./components/Modal";

import { Api } from "./Api";


const smiles = [ ];

const App = () =>{
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(""));
    return (
    <>
    <div className="container">
        <Header 
        user={user}
        setUser={setUser}
        products={products}
        setModalActive={setModalActive}/>
        <main>
            {}   
            {user ? <Catalog data={products}/> :<Home data={smiles}/>}
        </main>
        <Footer/>
    </div>
    <Modal isActive={modalActive} setState={setModalActive} api={api}/>
    </>
    )
}

export default App;