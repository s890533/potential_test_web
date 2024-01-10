import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import {calculateTimeDifference, timeDifferenceToString} from '../../utils/time';

const Timer = (props) => {
  const { caculatorTime, singleTimeSuspend = false } = props;
  const [totalTime, setTotalTime] = useState('');
  const [singleTime, setSingleTime] = useState('');
  const fixedSingleDiff = calculateTimeDifference(caculatorTime.singleStartTime, caculatorTime.singleEndTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
    const totalDiff = calculateTimeDifference(caculatorTime.startTime, new Date());
    const singleDiff = calculateTimeDifference(caculatorTime.singleStartTime, new Date());

    setTotalTime(timeDifferenceToString(totalDiff));
    if (singleTimeSuspend === true){
      setSingleTime(timeDifferenceToString(fixedSingleDiff));
    }else{
      setSingleTime(timeDifferenceToString(singleDiff));
    }
      
    }, 500);

    return () => clearInterval(intervalId); // 清除定時器
  }, [caculatorTime.startTime, caculatorTime.singleStartTime]);

  return (
    <div>
      <Badge bg="dark" style={{ fontSize: '15px' }}>
        {singleTime} / {totalTime}
      </Badge>
    </div>
  )
}

export default Timer
