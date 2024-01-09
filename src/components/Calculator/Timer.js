import React from 'react'
import Badge from 'react-bootstrap/Badge';
import calculateTimeDifference from '../../utils/time';

const Timer = (props) => {
  const { caculatorTime } = props;

  // const totalTime = new Date() - caculatorTime.startTime;
  const totalTime = calculateTimeDifference(caculatorTime.startTime, new Date());

  return (
    <div>
      <Badge bg="dark" style={{ fontSize: '15px' }}>
        0:00 / {totalTime}
      </Badge>
    </div>
  )
}

export default Timer
