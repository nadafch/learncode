import React from "react";
import NavBar from './NavBar'
import { Table, Container, Button } from "react-bootstrap";
import "../style/style.css"

function Dashboard () {
    return (
        <div className="Dash">
            <NavBar />
            <div className="d-flex justify-content-center px-auto pt-4">
                <h3><strong>Daftar Materi</strong></h3>
            </div>
            <Container className="dashboard text-center">
                <Button variant="outline-primary">Tambahkan data</Button>
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
    )
}

export default Dashboard