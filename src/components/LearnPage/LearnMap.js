import React, { useState } from "react";
import LearnPage from './LearnPage';
import learn from './DataLearn';
import ReactPaginate from 'react-paginate';
import "./Learn.css"
import axios from "axios";

function LearnMap() {
    const [contents, setContents] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode").then(
        res => {
            setContents(res.data)
        }).catch(error => { console.log("Error", error); })

    const contentsPerPage = 6
    const pagesVisited = pageNumber * contentsPerPage

    const displayContents = contents
        .slice(pagesVisited, pagesVisited + contentsPerPage)
        .map((user) => {
            return (
                <LearnPage
                    image={user.image}
                    judul={user.name}
                    id={user.id}
                    text={user.description2}
                />
            );
        });

    const pageCount = Math.ceil(contents.length / contentsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className='Card'>
            {displayContents}
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

export default LearnMap;