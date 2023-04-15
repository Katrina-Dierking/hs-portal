import React from 'react'
import Assignments from '../assignments/Assignments'
import TitleBlock from '../../components/titleBlock/TitleBlock'

const Student = () => {
  return (
    <TitleBlock title="Student's Assignment Progress">
        <div>Assignments:</div>
        <br></br>
        <Assignments />
    </TitleBlock>
  )
}

export default Student