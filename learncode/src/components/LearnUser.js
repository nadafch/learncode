import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'

function LearnUser() {
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="px-5" href="#features">HTML</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">CSS</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">Javascript</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">React JS</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">GIT</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">Bootstarp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  )
}

export default LearnUser