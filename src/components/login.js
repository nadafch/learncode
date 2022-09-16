import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/images/login_illus.png"
import React, { useState } from "react";


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();

  function handlerForm(type, value) {
    switch (type) {
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value);
        break;
    }
  }

  function submitLogin(event) {
    event.preventDefault()
    if (username && password) {
      if (username == 'admin' && password == 'admin123') {
        localStorage.setItem('token', 'adaTokenNih')
        navigate('/Dashboard')
      } else {
        setErrorMessage('username dan password anda salah')
      }
    } else {
      setErrorMessage('username dan password tidak boleh kosong')
    }
  }

  return (
    <React.Fragment>
      <div className="Login">
        <Container>
          <Row className="px-4">
            <Col className="mt-2" data-aos="fade-right" data-aos-duration="1000">
              <img src={illustration} alt="Logo"
                height={350} />
              <h6 >LearnCode membantu Anda belajar <br /> bahasa Pemograman.</h6>
            </Col>
            <Col className="mt-5 pt-5" data-aos="fade-down" data-aos-duration="1000">
              <div>
                <h3>LOGIN</h3>
                <Form id="form" onSubmit={(event) => submitLogin(event)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control style={{ border: "1.5px solid blue", borderRadius: "0" }} type="text" placeholder="Enter Username" value={username} onChange={(event) => handlerForm('username', event.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ border: "1.5px solid blue", borderRadius: "0" }} type="password" placeholder="Password" value={password} onChange={(event) => handlerForm('password', event.target.value)} />
                  </Form.Group>
                  {
                    errorMessage ? (
                      <p>{errorMessage}</p>
                    ) : (
                      <React.Fragment />
                    )
                  }
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login;
