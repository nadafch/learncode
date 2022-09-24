import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import DataPage from "./DataPage";
import "./Data.css"
import axios from "axios";

function DataMap() {
    const [pageNumber, setPageNumber] = useState(0)
    const [kawahs, setKawahs] = useState([

    ]);

    console.log('aku')

    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
        .then(res => {
            console.log(res)
            setKawahs(res.data)
        })
        .catch(error => {
            console.log("Error yaa ", error);
        })

    const kawahsPerPage = 6
    const pagesVisited = pageNumber * kawahsPerPage

    console.log(kawahs)

    const displayKawahs = kawahs
        .slice(pagesVisited, pagesVisited + kawahsPerPage)
        .map((user) => {
            return (
                <DataPage
                    pictureFront={user.image}
                    name={user.name}
                />
            );
        });

    const pageCount = Math.ceil(kawahs.length / kawahsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className='Card'>
            {displayKawahs}
            <ReactPaginate
                perviousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>

    )
}

export default DataMap;