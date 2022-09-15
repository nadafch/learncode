import React from 'react'
import { Card, Col } from 'react-bootstrap'

function LearnPage({ image, judul, penulis, text }) {
    return (
        <React.Fragment>

            <Col xs={5} md={3} className='mb-3'>
                <Card style={{ width: '19rem' }} className='p-2 mb-3'>
                    <Card.Img variant="top" src={image} alt="HTML" className='border border-white' />
                    <Card.Body>
                        <p>{penulis}</p>
                        <h6 className='mb-3 card-text '><strong>{judul}</strong></h6>
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