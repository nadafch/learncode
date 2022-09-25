import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/style.css";

function SecondNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="px-5" href="">All Course</Nav.Link>
                        <Nav.Link className="px-5" href="">HTML</Nav.Link>
                        <Nav.Link className="px-5" href="">CSS</Nav.Link>
                        <Nav.Link className="px-5" href="">Javascript</Nav.Link>
                        <Nav.Link className="px-5" href="">Bootstarp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default SecondNav;
