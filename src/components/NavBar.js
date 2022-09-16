import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useNavigate, Link } from "react-router-dom"
import LearnCode from '../assets/images/LearnCode.png'

function NavBar() {
    const navigate = useNavigate();
    function handlerAction(type) {
        switch (type) {
            case 'login':
                navigate('/Login')
                break;
            case 'logout':
                localStorage.removeItem('token')
                navigate('/')
                break;
        }
    }
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand>
                        <img src={LearnCode} alt="Logo"
                            height={23} />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <NavbarCollapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        {
                            localStorage.getItem('token') === 'adaTokenNih' ? (
                                <React.Fragment>
                                    <Nav.Link className="mx-5" to='/Dashboard'>All Course</Nav.Link>
                                    <Button variant="outline-danger" onClick={(e) => handlerAction('logout')}>Logout</Button>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Nav.Link className="mx-5" as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link className="mx-5" as={Link} to='/Belajar'>Belajar</Nav.Link>
                                    <Nav.Link className="mx-5" as={Link} to='/About'>About Us</Nav.Link>
                                    <Button variant="outline-primary" onClick={(e) => handlerAction('login')}>Login</Button>
                                </React.Fragment>
                            )
                        }
                    </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </React.Fragment>

    )
}

export default NavBar
