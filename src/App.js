import Home from "./components/Home";
import Login from "./components/login";
import NavBar from "./components/NavBar";
import Foot from "./components/foot";
import Belajar from "./components/LearnPage/Belajar";
import About from "./components/Pages/About"
import FourZeroFour from "./components/FourZeroFour";
import { Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Dashboard from "./components/Dashboard/Dashboard";

// import ArtikelUser from "./components/ArtikelUser";
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
