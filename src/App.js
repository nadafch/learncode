import Home from "./components/Home";
import Login from "./components/login";
import NavBar from "./components/NavBar";
import Foot from "./components/foot";
import Belajar from "./components/LearnPage/Belajar";
import Data from "./components/Data/Data";
import About from "./components/CardAbout/About";
import FourZeroFour from "./components/FourZeroFour";
import { Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Artikel from "./components/Artikel/DetailData";
import React from "react";

function App() {
    return (
        <React.Fragment>
            {/* <ArtikelUser /> */}
            <NavBar />
            <Routes>
                {" "}
                <Route path="/" element={<Home />} exact />
                <Route path="/Login" element={<Login />} exact />
                <Route path="/Dashboard" element={<Dashboard />} exact />
                <Route path="/Belajar" element={<Belajar />} exact />
                <Route path="/About" element={<About />} exact />
                <Route path="/artikel/:id" element={<Artikel />} exact />
                {/* <Route path="/" element>
                    {<ArtikelUser />}
                </Route>{" "} */}
                <Route path="*" element={FourZeroFour} />
            </Routes>
            <Foot />
        </React.Fragment>
    );
}

export default App;
