import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LearnCode from "../assets/images/LearnCode.png"
import React from "react";

function Login() {
    const navigate = useNavigate();
    function submitLogin(event) {
        event.preventDefault()
        localStorage.setItem('token', 'adaTokenNih')
        navigate('/Dashboard')
    }
    return (
        <React.Fragment>
            <div className="Login">
                <Container className="text-start">
                    <Row>
                        <Col className="mt-4 mr-4">
                            <img src={LearnCode} alt="Logo"
                                height={30} />
                            <h4 className="mt-4 pt-1">LearnCode membantu Anda <br /> belajar bahasa Pemograman.</h4>
                        </Col>
                        <Col>
                            <div>
                                <Form id="form" onSubmit={(event) => submitLogin(event)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" placeholder="Enter Username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
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
