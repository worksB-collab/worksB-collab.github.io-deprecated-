import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./view/Home";
import Contact from "./view/Contact";
import About from "./view/About";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*<Home/>*/}

            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;