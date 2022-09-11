import React from 'react'
import { Container, Card, Row, Col, Pagination} from 'react-bootstrap'
import htmlPage from '../assets/images/htmlPage.png'
import NavBar from './NavBar'
import SecondNav from './secondaryNav'
import Foot from './foot'

function LearnPage() {
  return (
    <React.Fragment>
        <NavBar />
        <SecondNav />
        <Container>
        <h4 className='mt-5 text-start text-primary'><strong>Ini dia yang kamu cari</strong></h4>
        <p className='mt-5 mb-5 text-start text-dark'><strong>Ada ${} Artikel dalam Kategori HTML</strong></p>
        </Container>
        <Container>
            <Row className=''>
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
            
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                    <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col className='col-md-4 mb-4'>
                <Card style={{ width: '18rem' }} className='shadow p-2 mb-3'>
                <Card.Img variant="top" src={htmlPage} alt="HTML" className='border border-white border-5'/>
                <Card.Body>
                    <h6 className='mb-3 card-text'><strong>Cara Membuat tabel di HTML</strong></h6>
                    <p className='card-text'>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        
        <Container className='mt-4 mb-5'>
            <Pagination>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </Container>
    <Foot/>
    </React.Fragment>
    
  )
}

export default LearnPage