import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Calculator from '../components/Calculator'
import CalculatorResult from '../components/CalculatorResult'
import CalculatorLandingPage from '../components/CalculatorLandingPage'
import {calculateTimeDifference, timeDifferenceToSecond} from '../utils/time';
import {checkNonExcludedNumber} from '../utils/math';
import './Main.css'

var caculatorScore = {
  correctAmount: 0,
  wrongAmount: 0,
  totalAmount: 0
};

var caculatorTime = {
  startTime: new Date(),
  endTime: new Date(),
  singleStartTime: new Date(),
  singleEndTime: new Date(),
  timeStampRecord: [] 
};

var caculatorQuestion = {
  firstVolume: 0,
  secondVolume: 0,
  answerVolume: 0
};

function Main() {
  const [calculatorState, setCalculatorState] = useState('landingPage');

  const gengerateQuestion = () => {
    caculatorQuestion.firstVolume = 0;
    caculatorQuestion.secondVolume = 0;
    while(checkNonExcludedNumber(caculatorQuestion.firstVolume)){
      caculatorQuestion.firstVolume = Math.floor(Math.random() * 100) + 1;
    }
    while(checkNonExcludedNumber(caculatorQuestion.secondVolume)){
      caculatorQuestion.secondVolume = Math.floor(Math.random() * 100) + 1;
    }
    caculatorQuestion.answerVolume = caculatorQuestion.firstVolume * caculatorQuestion.secondVolume;
  }

  const toggleCalculatorStart = () => {
    setCalculatorState('caculator');
    caculatorScore = {correctAmount: 0, wrongAmount: 0, totalAmount: 0};
    caculatorTime = {startTime: new Date(), endTime: new Date(), singleStartTime: new Date(), timeStampRecord: [] };
    gengerateQuestion();
  };

  const toggleCalculatorEnd = () => {
    setCalculatorState('landingPage');
    caculatorTime.endTime = new Date();
  };

  const toggleCalculatorCheckAnswer = () => {
    setCalculatorState('caculatorResult');
    caculatorTime.singleEndTime = new Date();
    caculatorTime.timeStampRecord.push(timeDifferenceToSecond(calculateTimeDifference(caculatorTime.singleStartTime, caculatorTime.singleEndTime)));
  };

  const toggleCalculatorCorrect = () => {
    setCalculatorState('caculator');
    caculatorTime.singleStartTime = new Date();
    caculatorScore.correctAmount += 1;
    caculatorScore.totalAmount += 1;
    gengerateQuestion();
  };

  const toggleCalculatorWrong = () => {
    setCalculatorState('caculator');
    caculatorTime.singleStartTime = new Date();
    caculatorScore.wrongAmount += 1;
    caculatorScore.totalAmount += 1;
    gengerateQuestion();
  };


  return (
    <div>
        <div className="containers">
        <NavBar />
        <div className="card-body" data-bs-theme="dark">
          {calculatorState === 'landingPage' ? <CalculatorLandingPage toggleCalculatorStart={toggleCalculatorStart} caculatorScore={caculatorScore} caculatorTime={caculatorTime}/> : null}
          {calculatorState === 'caculator' ? <Calculator toggleCalculatorEnd={toggleCalculatorEnd} toggleCalculatorCheckAnswer={toggleCalculatorCheckAnswer} caculatorScore={caculatorScore} caculatorTime={caculatorTime} caculatorQuestion={caculatorQuestion}/> : null}
          {calculatorState === 'caculatorResult' ? <CalculatorResult toggleCalculatorCorrect={toggleCalculatorCorrect} toggleCalculatorWrong={toggleCalculatorWrong} caculatorScore={caculatorScore} caculatorTime={caculatorTime} caculatorQuestion={caculatorQuestion}/> : null}
        </div>
        {/* <div className="card-footer">FAST</div> */}
        </div>
    </div>
    
  )
}

export default Main
