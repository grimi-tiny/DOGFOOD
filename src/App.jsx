import React from "react";
import "./style.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Card from "./components/Card";

const smiles =["^__^","-__-","*__*","=__=","~_~","=)","=/","=("]

const App = () =>{
    return (
    <div className="container">
        <Header/>
        <main>
            <h1>Главная страница</h1>
            <div className="cards">
                     {smiles.map((el, i) => <Card key={"card_" + i} text={el} like={(i+1) % 3 ===0 }/>)}
                    
            </div>
        </main>
        <Footer/>
    </div>)
}

export default App;