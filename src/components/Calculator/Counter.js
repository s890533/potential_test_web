import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Counter = (props) => {
  const { caculatorScore } = props;
  return (
    <div>
      <Badge bg="dark" style={{ fontSize: '15px' }}>
      <span style={{ color: 'green'}}>{caculatorScore.correctAmount}</span>&nbsp;/&nbsp;
        <span style={{ color: 'red'}}>{caculatorScore.wrongAmount}</span>&nbsp;/&nbsp;
        <span>{caculatorScore.totalAmount}</span>
      </Badge>
    </div>
  )
}

export default Counter
