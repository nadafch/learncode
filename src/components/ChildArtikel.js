import React from "react";
import { Container } from "react-bootstrap";
import "../styles/ArtikelUser.css";


function ChildArtikel({ title, text, image }) {



    return (
        <Container>
            <div className="">
                <h4>{title}</h4>
                <iframe
                    width="450"
                    height="250"
                    src={image}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="content">
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </Container>
    );
}

export default ChildArtikel;
