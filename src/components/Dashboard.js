import React, { useState } from "react";
import NavBar from './NavBar';
import { Table, Container, Button, Modal, Form, Dropdown, DropdownButton} from "react-bootstrap";
import "../styles/style.css"

function Dashboard () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <div className="Dash">
            <NavBar />
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
                        <tr>
                        <td>1</td>
                        <td>11/11/22</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>HTML</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                        <td colSpan={2}>
                            <Button>Edit</Button>{' '}
                            <Button>Delete</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>11/11/22</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>HTML</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                        <td colSpan={2}>
                            <Button>Edit</Button>{' '}
                            <Button>Delete</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>11/11/22</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>HTML</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                        <td colSpan={2}>
                            <Button>Edit</Button>{' '}
                            <Button>Delete</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>11/11/22</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>HTML</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                        <td colSpan={2}>
                            <Button>Edit</Button>{' '}
                            <Button>Delete</Button>
                        </td>
                        </tr>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Dashboard