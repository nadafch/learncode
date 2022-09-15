import React from 'react'
import { Container, Row, Col, Button, } from 'react-bootstrap'
import Hero from '../assets/images/Hero.png'
import Aos from 'aos'

function HeroSection() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='mt-5 pt-4' data-aos="fade-right" data-aos-duration="2000">
                        <h5 className='mt-5 mb-5 pt-5 text-start text-dark'><strong>Halo, Selamat Datang</strong></h5>
                        <h1 className='mb-5 text-start '><strong>Temukan tempat belajar ngoding yang nyaman.</strong></h1>
                        <Button
                            className='d-grid btn-lg' data-aos="fade-up-right"
                            variant="primary">Mulai Belajar</Button>{' '}
                    </Col>

                    <Col className='mt-5 pt-4'>
                        <img className='mt-2' src={Hero} alt='Hero Section' data-aos="zoom-in-up" data-aos-duration="2000" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection;