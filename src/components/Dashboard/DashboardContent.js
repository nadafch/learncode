import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from "sweetalert";
import { Modal, Form, Dropdown, DropdownButton, Button } from 'react-bootstrap'


function DashboardContent({ props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = localStorage.getItem("token");
    // let { id } = useParams()
    let navigate = useNavigate
    const [updateData, setUpdateData] = useState({});
    let id = updateData.id;

    const updateInput = async (e) => {
        e.preventDefault()
        try {
            const res = await axios({
                method : "PUT",
                url : `https://kawahedukasibackend.herokuapp.com/content/update/${id}`,
                data : updateData,
                headers : {
                    access_token : token
                }
            })
            setUpdateData(res.data)
            if (res.status ===200) {
                handleClose();
                swal("Good Job","Data Berhasil Diubah", "success")
                navigate('/Dashboard')
            }
        } catch (error){
            console.log(error);
        }
    }

    const getData = async (id) => {
        axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
            .then(res => {
                let singleData = res.data.filter((item) => item.id === parseInt(id));
                setUpdateData(...singleData);
            })
            .catch(error => {
                console.log("Error yaa ", error);
            })
    }

    function handlerSubmit(e) {
        e.preventDefault()
        updateInput()
    }

    const deletePost = async (id) => {
        try {
            const res = await axios({
                method: "DELETE",
                url: `https://kawahedukasibackend.herokuapp.com/content/delete/${id}`,
                headers: { access_token: token }
            })
        } catch (error) {
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

    const columns = [{
        dataField: 'id',
        text: 'No',
        formatter: (cell, row, rowIndex, formatExtraData) => {
            return rowIndex + 1;
        },
        sort: true
    },
    {
        dataField: 'name',
        text: 'Judul',
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
                    <Button variant="outline-primary" onClick={() => { handleShow(); getData(row.id) }}>Edit</Button>
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
        <React.Fragment>
            <BootstrapTable keyField='id' data={props} columns={columns} defaultSorted={defaultSorted} pagination={paginationFactory(options)} />
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Edit Materi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateInput}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Judul materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Judul Materi"
                                autoFocus
                                value={updateData?.name}
                                onChange={(e) =>
                                    setUpdateData({
                                        ...updateData,
                                        name: e.target.value,
                                    })
                                }

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Gambar</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Gambar"
                                value={updateData?.image}
                                onChange={(e) =>
                                    setUpdateData({
                                        ...updateData,
                                        image: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Kategori"
                                value={updateData?.description1}
                                onChange={(e) =>
                                    setUpdateData({
                                        ...updateData,
                                        description1: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Materi</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                placeholder="Tambahkan Materi"
                                value={updateData?.description2}
                                onChange={(e) =>
                                    setUpdateData({
                                        ...updateData,
                                        description2: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Video Materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Materi"
                                value={updateData?.description3}
                                onChange={(e) =>
                                    setUpdateData({
                                        ...updateData,
                                        description3: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default DashboardContent