import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Multiplication = (props) => {
  const { toggleCalculatorEnd, toggleCalculatorCheckAnswer, caculatorQuestion } = props;
  return (
    <div>
      <InputGroup className="mb-3" style={{ justifyContent: "center" }}>
        <InputGroup.Text id="basic-addon3" style={{ fontSize: '30px', minWidth: '50px', maxWidth: '200px', justifyContent: 'center'}}>
          {caculatorQuestion.firstVolume} X {caculatorQuestion.secondVolume}
        </InputGroup.Text>
        <Button variant="secondary" onClick={toggleCalculatorCheckAnswer}>Check</Button>{' '}
        <Button variant="dark" onClick={toggleCalculatorEnd}>STOP</Button>{' '}
      </InputGroup>
    </div>
  )
}

export default Multiplication
