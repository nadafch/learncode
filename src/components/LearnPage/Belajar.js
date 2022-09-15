import React from 'react'
import { Container, Pagination } from 'react-bootstrap'
import LearnMap from './LearnMap';

function Belajar() {
  return (
    <React.Fragment>
      <Container>
        <h4 className='mt-5 text-start text-primary'><strong>Ini dia yang kamu cari</strong></h4>
        <p className='mt-5 mb-5 text-start text-dark'><strong>Ada ${ } Artikel dalam Kategori HTML</strong></p>
      </Container>

      <LearnMap />

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

export default Belajar;