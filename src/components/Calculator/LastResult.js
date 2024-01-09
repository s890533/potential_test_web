import React from 'react'

const LastResult = (props) => {
  const { correctAmount, errorAmount, totalAmount} = props;
  return (
    <div style={{ backgroundColor: '#2b3035', padding: '5px 10px', borderRadius: '5px'}}>
      <span style={{ color: 'white' }}>
        Last Result:&nbsp;
        <span style={{ color: 'green', fontWeight: 'bold' }}>{correctAmount}</span>&nbsp;/&nbsp;
        <span style={{ color: 'red', fontWeight: 'bold' }}>{errorAmount}</span>&nbsp;/&nbsp;
        <span style={{ fontWeight: 'bold' }}>{totalAmount}</span>
      </span>
    </div>
  )
}

export default LastResult
