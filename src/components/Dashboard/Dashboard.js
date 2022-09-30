import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Table, Container, Button, Modal, Form, Dropdown, DropdownButton } from "react-bootstrap";
import data from "./data.json"
import "../../styles/style.css"
import { useNavigate } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import axios from "axios";

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = localStorage.getItem("token");
    const [kawahs, setKawahs] = useState([]);
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        image: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        description6: "",
    });


    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
        .then(res => {
            // console.log(res)
            setKawahs(res.data)
        })
        .catch(error => {
            console.log("Error yaa ", error);
        })

    async function addContent() {
        try {
            let requestContent = await axios.post("https://kawahedukasibackend.herokuapp.com/content/create", data, {
                headers: {
                    'access_token': token
                }
            })
            let final = await requestContent
            if (final.status === 201) {
                saveClick()
                setData({
                    name: "",
                    image: "",
                    description1: "",
                    description2: "",
                    description3: "",
                    description4: "",
                    description5: "",
                    description6: "",
                })
                navigate("/Dashboard")
            }
        } catch (err) {
            console.log(err);
        }
    }

    function handlerSubmit(e) {
        e.preventDefault()
        addContent()
    }

    const saveClick = () => {
        swal("Good job!", "Your data have been saved", "success");
        handleClose();
    }


    return (
        <React.Fragment>
            <div className="d-flex flex-column p-5 px-auto pt-4 gap-4">
                <div className="d-flex justify-content-end">
                    <Button variant="outline-primary" onClick={handleShow}>Tambahkan data</Button>
                </div>
                <DashboardContent props={kawahs} />
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Tambah Materi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlerSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Judul materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Judul Materi"
                                autoFocus
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Gambar</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Gambar"
                                value={data.image}
                                onChange={(e) => setData({ ...data, image: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Kategori"
                                value={data.description1}
                                onChange={(e) => setData({ ...data, description1: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Materi</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                placeholder="Tambahkan Materi"
                                value={data.description2}
                                onChange={(e) => setData({ ...data, description2: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Video Materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Materi"
                                value={data.description3}
                                onChange={(e) => setData({ ...data, description3: e.target.value })}
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
        </React.Fragment >
    )
}

export default Dashboard