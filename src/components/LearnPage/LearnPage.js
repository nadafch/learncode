import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function LearnPage({ image, judul, penulis, text, id }) {
    return (
        <React.Fragment>

            <Col xs={5} md={3} className='mb-3'>
                <Card style={{ width: '19rem' }} className='p-2 mb-3' data-aos="fade-up" data-aos-duration="500">
                    <a href="/">
                        <Card.Img variant="top" src={image} alt="HTML" className='border border-white' />
                    </a>
                    <Card.Body>
                        <Link to='/ArtikelUser'>{penulis}</Link>
                        <h6 className='mb-3 card-text' style={{ color: '#4154F1' }} as={Link} to='/ArtikelUser'><strong>{judul}</strong></h6>
                        <p className='card-text'>
                            {text}
                        </p>
                    </Card.Body>

                </Card>
            </Col>

        </React.Fragment>

    )
}

export default LearnPage