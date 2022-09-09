import React from 'react'
import heropict from '../assets/images/Hero-Section.png'
import { Container, Row, Col, Button, Figure } from 'react-bootstrap'

function HeroSection() {
    return (
        <Container>
            <Row>
                <Col className='mt-5 pt-4'>
                <h5 className='mt-5 mb-5 pt-5 text-start text-dark'><strong>Halo, Selamat Datang</strong></h5>
                <h1 className='mb-5 text-start '><strong>Temukan tempat belajar ngoding yang nyaman.</strong></h1>
                <Button 
                    className='d-grid btn-lg' 
                    variant="primary">Mulai Belajar</Button>{' '}
                </Col>

                <Col>
                <Figure className='mt-5 pt-5'>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="500x500"
                        src={heropict}
                    />
                </Figure>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection;