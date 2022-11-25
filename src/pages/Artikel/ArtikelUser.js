import React from "react";
import NavBar from "../NavBar";
import SecondNav from "../secondaryNav";
import ChildArtikel from "./ChildArtikel";
import Foot from "../foot";

function ArtikelUser(props) {
    return (
        <div>
            <SecondNav/>
            <ChildArtikel />
        </div>
    );
}

export default ArtikelUser;
