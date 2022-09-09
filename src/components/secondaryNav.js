import React from "react";
import {Nav,Navbar } from "react-bootstrap";
import "../style/style.css"

function SecondNav () {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="d-flex justify-content-evenly">
                <Nav>
                <Nav.Link href="#HTML">HTML</Nav.Link>
                <Nav.Link href="#CSS">CSS</Nav.Link>
                <Nav.Link href="#Javascript">Javascript</Nav.Link>
                <Nav.Link href="#Git">Git</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default SecondNav