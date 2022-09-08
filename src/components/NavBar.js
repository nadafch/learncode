import { Navbar, Container, Nav, Button} from "react-bootstrap";
import LearnCode from '../assets/images/LearnCode.png'

function NavBar () {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <img src={LearnCode} alt="Logo"
                             height={23}/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link className="px-4">Home</Nav.Link>
                        <Nav.Link className="mx-2 px-4">Belajar</Nav.Link>
                        <Button className="mx-4 px-4" variant="outline-primary">Masuk</Button>{''}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )}

    export default NavBar
