import { Container, Row, Col, Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LearnCode from "../assets/images/LearnCode.png"
import React, { useState } from "react";

function Login (){
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
    

    return(
       <React.Fragment>
        <div className="Login">
            <Container className="text-start">
                <Row>
                    <Col className="mt-4 mr-4">
                    <img src={LearnCode} alt="Logo"
                         height={30}/>
                    <h4 className="mt-4 pt-1">LearnCode membantu Anda <br /> belajar bahasa Pemograman.</h4>
                    </Col>
                    <Col>
                        <div>
                            <Form id="form" onSubmit={(event) => submitLogin(event)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(event) => handlerForm('username', event.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => handlerForm('password', event.target.value)}/>
                                </Form.Group>
                                {
                                    errorMessage ? (
                                    <p>{errorMessage}</p>
                                    ) : (
                                    <React.Fragment />
                                    )
                                }
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
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
