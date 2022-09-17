import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Table, Container, Button, Modal, Form, Dropdown, DropdownButton } from "react-bootstrap";
import data from "./data.json"
import "../../styles/style.css"

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveClick = () => {
        swal("Good job!", "Your data have been saved", "success");
        handleClose();
    }
    const deleteClick = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    const [jsondata, setJsonData] = useState([]);
    useEffect(() => {
        setJsonData(data)
    }, [])

    return (
        <React.Fragment>
            <div className="Dash">
                <div className="d-flex justify-content-center px-auto pt-4">
                    <h3><strong>Daftar Materi</strong></h3>
                </div>
                <Container className="dashboard text-center">
                    <Button variant="outline-primary" onClick={handleShow}>Tambahkan data</Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Judul</th>
                                <th>Topik</th>
                                <th>Link Video</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jsondata.map((value, index) => (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.date_input}</td>
                                        <td>{value.course.judul}</td>
                                        <td>{value.categories}</td>
                                        <td>{value.course.Link}</td>
                                        <td colSpan={2}>
                                            <Button variant="outline-success">Detail</Button>{' '}
                                            <Button variant="outline-primary">Edit</Button>{' '}
                                            <Button variant="outline-danger" onClick={deleteClick}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
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
        </React.Fragment >
    )
}

export default Dashboard