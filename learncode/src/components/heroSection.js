import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import LearnPage from './LearnPage';
import { Link } from 'react-router-dom';
import Hero from '../assets/images/Hero.png'

function HeroSection() {
    return (
        <div>
        <Container>
            <Row>
                <Col className='mt-5 pt-4'>
                <h5 className='mt-5 mb-5 pt-5 text-start text-dark'><strong>Halo, Selamat Datang</strong></h5>
                <h1 className='mb-5 text-start '><strong>Temukan tempat belajar ngoding yang nyaman.</strong></h1>
                <Link to="/LearnPage">
                    <Button
                    className='d-grid btn-lg' 
                    variant="primary">Mulai Belajar</Button>{' '}
                </Link>
                </Col>

                <Col className='mt-5 pt-4'>
                <img className='mt-2' src={Hero} alt='Hero Section' />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default HeroSection;