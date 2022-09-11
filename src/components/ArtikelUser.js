import React from "react";
import NavBar from "./NavBar";
import SecondNav from "./secondaryNav";
import ChildArtikel from "./ChildArtikel";
import Foot from "./foot";

function ArtikelUser() {
    return (
        <div>
            <NavBar />
            <SecondNav />
            <ChildArtikel />
            <Foot />
        </div>
    );
}

export default ArtikelUser;
