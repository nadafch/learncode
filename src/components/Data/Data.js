import React from 'react'
import { Container } from 'react-bootstrap'
import DataMap from './DataMap'

function Data() {
    return (
        <React.Fragment>
            <Container>
                <h4 className='mt-5 text-center text-primary'><strong>Daftar Kawah Edukasi</strong></h4>
            </Container>
            <div className='container'>
                <DataMap />
            </div>
        </React.Fragment>
    )
}

export default Data;