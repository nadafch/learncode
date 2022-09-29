import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function LearnPage({ image, judul, text, id, title }) {

    return (
        <React.Fragment>

            <Col xs={5} md={5} className='mb-3'>
                <div className='d-flex justify-content-evenly'>
                    <a href={'http://localhost:3000/artikel/' + id + '?title=' + judul + '&image=' + image + '&text=' + text}>
                        <Card style={{ width: '19rem' }} className='p-2 mb-3' data-aos="fade-up" data-aos-duration="500">
                            <Card.Img variant="top" src={image} alt="HTML" className='border border-white' />
                            <Card.Body className='text-align-center'>
                                <h6 className='mb-3 card-text' style={{ color: '#4154F1' }} as={Link} to='/ArtikelUser'><strong>{judul}</strong></h6>
                                <p className='card-text'>
                                    {text.substring(0, 80)}...
                                </p>
                            </Card.Body>

                        </Card>
                    </a>
                </div>
            </Col>

        </React.Fragment>

    )
}

export default LearnPage