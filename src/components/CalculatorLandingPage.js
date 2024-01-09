import React from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Analyze from './Calculator/Analyze';
import './Calculator.css'

const CalculatorLandingPage = (props) => {
  const { toggleCalculatorStart, caculatorScore, caculatorTime } = props;
  return (
    <div>
        <div className="unit-control">
          <Badge bg="dark" style={{ fontSize: '15px' }}>Multiplication Test</Badge>
          <span className="exchange-icon fa-fw fa-stack">
              <i className="far fa-circle fa-stack-2x" ></i>
              <i className="fas fa-exchange-alt fa-stack-1x" ></i>
          </span>
        </div>
        <div className="component-control">
          <Analyze caculatorScore={caculatorScore} caculatorTime={caculatorTime}/>
        </div>
        <div className="component-control">
          <Button variant="dark" style={{ fontSize: '27px' }} onClick={toggleCalculatorStart}>START TEST</Button>{' '}
        </div>
    </div>
  )
}

export default CalculatorLandingPage
