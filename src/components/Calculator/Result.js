import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Result = (props) => {
  const { toggleCalculatorCorrect, toggleCalculatorWrong, caculatorQuestion } = props;
  return (
    <div>  
        <InputGroup className="mb-3" style={{ justifyContent: "center" }}>
            <Button variant="success" onClick={toggleCalculatorCorrect} style={{ minWidth: '90px' }}>RIGHT</Button>{' '}
            <InputGroup.Text id="basic-addon3" style={{ fontSize: '30px', minWidth: '50px', maxWidth: '200px', justifyContent: 'center'}}>
            {caculatorQuestion.answerVolume}
            </InputGroup.Text>
            <Button variant="danger" onClick={toggleCalculatorWrong} style={{ minWidth: '90px' }}>WRONG</Button>{' '}
        </InputGroup>

    </div>
  )
}

export default Result
