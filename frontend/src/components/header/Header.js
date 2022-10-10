import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Header.css'

const Header = ({title}) => {
  return (
    <div className='header'>
        <Container>
            <Row>
                <div className='page'>
                    {title && (
                        <>
                            <h1 className='heading'>{title}</h1>
                            <hr></hr>
                        </>
                    )}
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header