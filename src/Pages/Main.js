import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Calculator from '../components/Calculator'
import CalculatorResult from '../components/CalculatorResult'
import CalculatorLandingPage from '../components/CalculatorLandingPage'
import './Main.css'

var caculatorScore = {
  correctAmount: 0,
  errorAmount: 0,
  totalAmount: 0
};

var caculatorTime = {
  startTime: new Date(),
  endTime: new Date(),
  timeStampRecord: [] 
};

var caculatorQuestion = {
  firstVolume: 0,
  secondVolume: 0,
  answer: 0
};

function Main() {
  const [calculatorState, setCalculatorState] = useState('landingPage');

  const gengerateQuestion = () => {
    caculatorQuestion.firstVolume = Math.floor(Math.random() * 100) + 1;
    caculatorQuestion.secondVolume = Math.floor(Math.random() * 100) + 1;
    caculatorQuestion.answer = caculatorQuestion.firstVolume * caculatorQuestion.secondVolume;
  }

  const toggleCalculatorStart = () => {
    setCalculatorState('caculator');
    caculatorScore = {correctAmount: 0, errorAmount: 0, totalAmount: 0};
    caculatorTime = {startTime: new Date(), endTime: new Date(), timeStampRecord: [] };
    gengerateQuestion();
  };

  const toggleCalculatorEnd = () => {
    setCalculatorState('landingPage');
    caculatorTime.endTime = new Date();
  };

  const toggleCalculatorCheckAnswer = () => {
    setCalculatorState('caculatorResult');
  };

  const toggleCalculatorState = () => {
    switch (calculatorState) {
      case 'landingPage':
        setCalculatorState('caculator');
        break;
      case 'caculator':
        setCalculatorState('caculatorResult');
        break;
      case 'caculatorResult':
        setCalculatorState('landingPage');
        break;
      default:
        setCalculatorState('landingPage');
    }
  };

  return (
    <div>
        <div className="containers">
        <NavBar />
        <div className="card-body" data-bs-theme="dark">
          {calculatorState === 'landingPage' ? <CalculatorLandingPage toggleCalculatorStart={toggleCalculatorStart} caculatorScore={caculatorScore} caculatorTime={caculatorTime}/> : null}
          {calculatorState === 'caculator' ? <Calculator toggleCalculatorEnd={toggleCalculatorEnd} toggleCalculatorCheckAnswer={toggleCalculatorCheckAnswer} caculatorScore={caculatorScore} caculatorTime={caculatorTime} caculatorQuestion={caculatorQuestion}/> : null}
          {calculatorState === 'caculatorResult' ? <CalculatorResult toggleCalculatorState={toggleCalculatorState} /> : null}
        </div>
        {/* <div className="card-footer">FAST</div> */}
        </div>
    </div>
    
  )
}

export default Main
