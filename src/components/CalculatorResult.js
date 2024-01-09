import React from 'react'
import Timer from './Calculator/Timer'
import Counter from './Calculator/Counter'
import Result from './Calculator/Result'
import './Calculator.css'

const CalculatorResult = (props) => {
  const { toggleCalculatorState } = props;
  return (
    <div>
        <div>
            <div className="unit-control">
                <Timer/>
                <span className="exchange-icon fa-fw fa-stack">
                    <i className="far fa-circle fa-stack-2x" ></i>
                    <i className="fas fa-exchange-alt fa-stack-1x" ></i>
                </span>
                <Counter/>
                </div>
                <div className="component-control">
                <Result/>
            </div>
        </div>
    </div>
  )
}

export default CalculatorResult
