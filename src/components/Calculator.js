import React from 'react'
import Timer from './Calculator/Timer'
import Counter from './Calculator/Counter'
import Multiplication from './Calculator/Multiplication'
import './Calculator.css'

const Calculator = (props) => {
  const { toggleCalculatorEnd, toggleCalculatorCheckAnswer, caculatorScore, caculatorTime, caculatorQuestion } = props;
  return (
    <div>
        <div className="unit-control">
            <Timer caculatorTime={caculatorTime}/>
            <span className="exchange-icon fa-fw fa-stack">
                <i className="far fa-circle fa-stack-2x" ></i>
                <i className="fas fa-exchange-alt fa-stack-1x" ></i>
            </span>
            <Counter caculatorScore={caculatorScore}/>
            </div>
            <div className="component-control">
            <Multiplication toggleCalculatorEnd={toggleCalculatorEnd} toggleCalculatorCheckAnswer={toggleCalculatorCheckAnswer} caculatorQuestion={caculatorQuestion}/>
        </div>
    </div>
  )
}

export default Calculator
