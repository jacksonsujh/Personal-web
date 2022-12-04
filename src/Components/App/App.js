import './App.css';
import {Home} from "../Home/Home";
import {Footer} from "../Footer/Footer";
import React from "react";
import {Navbar} from "../Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
