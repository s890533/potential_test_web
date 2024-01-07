import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Multiplication = () => {
  return (
    <div>
      <InputGroup className="mb-3" style={{ justifyContent: "center" }}>
        <InputGroup.Text id="basic-addon3" style={{ fontSize: '20px', minWidth: '135px', maxWidth: '200px', justifyContent: 'center'}}>
          10 X 10
        </InputGroup.Text>
        <Button variant="primary">Check Out!</Button>{' '}
      </InputGroup>
    </div>
  )
}

export default Multiplication
