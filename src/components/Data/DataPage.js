import React from 'react'
import { Card, Col } from 'react-bootstrap'

function DataPage({ name, pictureFront, pictureBack }) {
    return (
        <React.Fragment>

            <Col xs={5} md={3} className='mb-3'>
                <Card style={{ width: '19rem' }} className='p-2 mb-3' data-aos="fade-up" data-aos-duration="500">
                    <a href="/">
                        <Card.Img variant="top" src={pictureFront} alt="HTML" className='border border-white' />
                    </a>
                    <Card.Body>
                        <h6 className='mb-3 card-text' style={{ color: '#4154F1' }}><strong>{name}</strong></h6>
                    </Card.Body>

                </Card>
            </Col>

        </React.Fragment>

    )
}

export default DataPage