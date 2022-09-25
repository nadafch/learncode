import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Table, Container, Button, Modal, Form, Dropdown, DropdownButton } from "react-bootstrap";
import data from "./data.json"
import "../../styles/style.css"
import DashboardContent from "./DashboardContent";
import axios from "axios";

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [kawahs, setKawahs] = useState([

    ]);

    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/learncode")
        .then(res => {
            // console.log(res)
            setKawahs(res.data)
        })
        .catch(error => {
            console.log("Error yaa ", error);
        })



    const saveClick = () => {
        swal("Good job!", "Your data have been saved", "success");
        handleClose();
    }


    const [jsondata, setJsonData] = useState([]);
    useEffect(() => {
        setJsonData(data)
    }, [])

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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <DropdownButton title="Pilih topik Materi">
                                <Dropdown.Item href="#/action-1">HTML</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">CSS</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Javascript</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Judul materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Judul Materi"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Materi</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Link Materi</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Tambahkan Link Materi"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Dashboard