import React from "react";
import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/style.css";

function SecondNav(props) {
  const [content, setContent] = useState("");
  const handleCounterChange = (e) => {
    props.onCounterChange(e);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        handleCounterChange={handleCounterChange(content)}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              className="px-5"
              href=""
              onClick={(e) => setContent(e.target.id)}
            >
              All Course
            </Nav.Link>
            <Nav.Link
              className="px-5"
              href=""
              id="HTML"
              onClick={(e) => setContent(e.target.id)}
            >
              HTML
            </Nav.Link>
            <Nav.Link
              className="px-5"
              href=""
              id="CSS"
              onClick={(e) => setContent(e.target.id)}
            >
              CSS
            </Nav.Link>
            <Nav.Link
              className="px-5"
              href=""
              id="Javascript"
              onClick={(e) => setContent(e.target.id)}
            >
              Javascript
            </Nav.Link>
            <Nav.Link
              className="px-5"
              href=""
              id="Boostrap"
              onClick={(e) => setContent(e.target.id)}
            >
              Bootstarp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default SecondNav;
