import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from "sweetalert";
import ModalEdit from '../Artikel/Modal_Edit';

const token = localStorage.getItem("token");
const deletePost = async (id) => {
    try {
        const res = await axios({
            method: "DELETE",
            url: `https://kawahedukasibackend.herokuapp.com/content/delete/${id}`,
            headers: { access_token: token }
        })
        if (res.status === 200) {
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
        }
    } catch (error) {
        // swal(error, {
        //     icon: "failed"
        // }),
        console.log(error);
    }
}
const deleteClick = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                deletePost(id)
                swal("Data Sukses dihapus!", {
                    icon: "success",
                });
            } else {
                swal("Data gagal dihapus!");
            }
        });
}


function DashboardContent({ props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [{
        dataField: 'id',
        text: 'id',
        formatter: (cell, row, rowIndex, formatExtraData) => {
            return rowIndex + 1;
        },
        sort: true
    },
    {
        dataField: 'name',
        text: 'nama',
        sort: true
    }, {
        dataField: 'image',
        text: 'link image',
    }, {
        dataField: 'description1',
        text: 'Kategori',
        sort: true
    }, {
        dataField: 'description2',
        text: 'Materi'
    }, {
        dataField: 'link',
        text: 'Action',
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Button variant="outline-success" as={Link} to={'/artikel/' + row.id}> Detail</Button>{' '}
                    <Button variant="outline-primary" onClick={handleShow}>Edit</Button>
                    <ModalEdit show={show} handleClose={handleClose}></ModalEdit>
                    <Button variant="outline-danger" onClick={() => deleteClick(row.id)} >Delete</Button>
                </div >
            )
        }
    }
    ];

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: props.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };


    return (
        <BootstrapTable keyField='id' data={props} columns={columns} defaultSorted={defaultSorted} pagination={paginationFactory(options)} />
    )
}

export default DashboardContent