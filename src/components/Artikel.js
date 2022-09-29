import React from "react";
import ChildArtikel from "./ChildArtikel";

function Artikel() {

    const queryParams = new URLSearchParams(window.location.search)
    const title = queryParams.get("title")
    const image = queryParams.get("image")
    const text = queryParams.get("text")

    return (
        <div>
            <ChildArtikel
                title={title}
                image={image}
                text={text} />
        </div>
    );
}
export default Artikel;
