import React from 'react'
import { Container, Card, Row, Col, Pagination} from 'react-bootstrap'
import htmlPage from '../assets/images/htmlPage.png'

function LearnPage() {
  return (
    <React.Fragment>
        <Container>
        <h4 className='mt-5 text-start text-primary'><strong>INI DIA YANG KAMU CARI</strong></h4>
        <p className='mt-5 mb-5 text-start text-dark'><strong>Ada ${} Artikel dalam Kategori HTML</strong></p>
        </Container>
        <Container>
            <Row className='mb-5'>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
                    Some quick example text to build
                    </p>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={htmlPage} alt="HTML"/>
                <Card.Body>
                    <Card.Title>Cara Membuat tabel di HTML</Card.Title>
                    <p>
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
        
    </React.Fragment>
    
  )
}

export default LearnPage