import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ChildArtikel from "./ChildArtikel";
import "../../styles/ArtikelUser.css";

export default function DetailData() {
    const [postData, setPostData] = useState([])
    let { id } = useParams()


    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
        .then(res => {
            let singleData = res.data.filter((item) => item.id === parseInt(id));
            setPostData(...singleData);
        })
        .catch(error => {
            console.log("Error yaa ", error);
        })

    return (
        <ChildArtikel judul={postData.name}
            link={postData.description3}
            materi={postData.description2} />
    )
}
