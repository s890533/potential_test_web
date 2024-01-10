import React from 'react'
import Timer from './Calculator/Timer'
import Counter from './Calculator/Counter'
import Result from './Calculator/Result'
import './Calculator.css'

const CalculatorResult = (props) => {
  const { toggleCalculatorCorrect, toggleCalculatorWrong, caculatorScore, caculatorTime, caculatorQuestion } = props;
  return (
    <div>
        <div>
            <div className="unit-control">
                <Timer caculatorTime={caculatorTime} singleTimeSuspend={true}/>
                <span className="exchange-icon fa-fw fa-stack">
                    <i className="far fa-circle fa-stack-2x" ></i>
                    <i className="fas fa-exchange-alt fa-stack-1x" ></i>
                </span>
                <Counter caculatorScore={caculatorScore}/>
                </div>
                <div className="component-control">
                <Result toggleCalculatorCorrect={toggleCalculatorCorrect} toggleCalculatorWrong={toggleCalculatorWrong} caculatorQuestion={caculatorQuestion}/>
            </div>
        </div>
    </div>
  )
}

export default CalculatorResult
