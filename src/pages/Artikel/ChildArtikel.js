import React from "react";
import "../../styles/ArtikelUser.css";


function ChildArtikel({ judul, link, materi }) {
    return (
        <div className="m-5 d-flex flex-column align-items-center">
            <h4>{judul}</h4>
            <iframe
                width="650"
                height="400"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="content">
                <p>
                    {materi}
                </p>
            </div>
        </div>
    );
}

export default ChildArtikel;
