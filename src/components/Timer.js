import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Timer = () => {
  return (
    <div>
      <Badge bg="primary" style={{ fontSize: '15px' }}>
        0:00 / 0:00
      </Badge>
    </div>
  )
}

export default Timer
