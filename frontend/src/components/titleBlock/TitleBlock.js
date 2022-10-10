import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavSection from '../nav/NavSection'
import './TitleBlock.css'

const TitleBlock = ({title, children}) => {
  return (
    <>
    <div className='titleback'>
        <NavSection />
        <Container>
            <Row>
                <div className='page'>
                    {title && (
                        <>
                            <h1 className='heading'>{title}</h1>
                            <hr></hr>
                        </>
                    )}
                    {children}
                </div>
            </Row>
        </Container>
    
    </div>
    </>
  )
}

export default TitleBlock