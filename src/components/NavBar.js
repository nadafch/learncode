import { Navbar, Container, Nav, Button} from "react-bootstrap";
import LearnCode from '../assets/images/LearnCode.png'

function NavBar () {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <img src={LearnCode} alt="Logo"/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Belajar</Nav.Link>
                        <Button variant="outline-primary">Masuk</Button>{''}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )}

    export default NavBar