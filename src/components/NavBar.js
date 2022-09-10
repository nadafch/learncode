import React from "react";
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import LearnCode from '../assets/images/LearnCode.png'

function NavBar ({title}) {
    const navigate = useNavigate();
    function handlerAction (type){
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
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <img src={LearnCode} alt="Logo"
                             height={23}/>
                    </Navbar.Brand>
                    <Nav>
                        {
                            localStorage.getItem('token') == 'adaTokenNih' ? (
                                <React.Fragment>
                                    <Nav.Link className="mx-5" to='/Dashboard'>All Course</Nav.Link>
                                    <Button variant="outline-primary" onClick={(e) => handlerAction('logout')}>Logout</Button>
                                </React.Fragment>
                            ) : (
                               <React.Fragment>
                                    <Nav.Link className="mx-5" to='/'>Home</Nav.Link>
                                    <Nav.Link className="mr-3 ml-4">Belajar</Nav.Link>
                                    <Nav.Link className="mx-5">About</Nav.Link>
                                    <Button variant="outline-primary" onClick={(e) => handlerAction('login')}>Login</Button>
                               </React.Fragment>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )}

    export default NavBar
