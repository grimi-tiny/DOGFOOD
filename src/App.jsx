import React from "react";
import "./style.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const App = () =>{
    return (
    <div className="container">
        <Header/>
        <main>
            <h1>Главная страница</h1>
        </main>
        <Footer/>
    </div>)
}

export default App;