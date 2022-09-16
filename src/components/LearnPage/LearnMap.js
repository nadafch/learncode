import React, { useState } from "react";
import LearnPage from './LearnPage';
import learn from './DataLearn';
import ReactPaginate from 'react-paginate';
import "./Learn.css"

function LearnMap() {
    const [contents, setContents] = useState(learn);
    const [pageNumber, setPageNumber] = useState(0)

    const contentsPerPage = 6
    const pagesVisited = pageNumber * contentsPerPage

    const displayContents = contents
        .slice(pagesVisited, pagesVisited + contentsPerPage)
        .map((user) => {
            return (
                <LearnPage
                    image={user.image}
                    judul={user.judul}
                    penulis={user.penulis}
                    text={user.text}
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