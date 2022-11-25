import React, { useState, useEffect } from "react";
import LearnPage from "./LearnPage";
import ReactPaginate from "react-paginate";
import "./Learn.css";
import axios from "axios";
import SecondNav from "../secondaryNav";

function LearnMap() {
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");
  const [contents, setContents] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = async () => {
    await axios
      .get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
      .then((res) => {
        let result = res.data;
        console.log(result);
        setContents(result.sort((a, b) => (a.id > b.id ? 1 : -1)));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const getCategory = async (data) => {
    await axios
      .get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
      .then((res) => {
        let dataCategory = res.data.filter(
          (item) => item.description1.toLowerCase() === data.toLowerCase()
        );
        console.log(dataCategory);
        setContents(dataCategory.sort((a, b) => (a.id > b.id ? 1 : -1)));
        if (dataCategory == "") {
          setMsg(`Konten dengan kategori ${data} tidak tersedia`);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    if (!data) {
      setMsg("");
      getData();
    } else {
      setMsg("");
      getCategory(data);
    }
  }, [data]);

  const CounterChange = (newValue) => {
    setData(newValue);
  };

  const contentsPerPage = 6;
  const pagesVisited = pageNumber * contentsPerPage;

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

  const pageCount = Math.ceil(contents.length / contentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <SecondNav onCounterChange={(value) => CounterChange(value)} />
      <div className="text-center">
        <p className="mt-4">{msg}</p>
      </div>
      <div className="Card">{displayContents}</div>
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
    </>
  );
}

export default LearnMap;
