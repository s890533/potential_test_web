import React from 'react'
import { Fade } from 'react-bootstrap';
import calculateTimeDifference from '../../utils/time';

const Analyze = (props) => {
    const { caculatorScore, caculatorTime} = props;

    const totalTime = calculateTimeDifference(caculatorTime.startTime, caculatorTime.endTime);

    if (caculatorScore.totalAmount === 0){
        //return ''
    }

    return (
        <div>
            <div style={{ backgroundColor: '#2b3035', padding: '5px 10px',marginBottom: '5px' , borderRadius: '5px'}}>
            <span style={{ color: 'white' }}>
                Last Result:&nbsp;
                <span style={{ color: 'green', fontWeight: 'bold' }}>{caculatorScore.correctAmount}</span>&nbsp;/&nbsp;
                <span style={{ color: 'red', fontWeight: 'bold' }}>{caculatorScore.errorAmount}</span>&nbsp;/&nbsp;
                <span style={{ fontWeight: 'bold' }}>{caculatorScore.totalAmount}</span>
            </span>
            </div>
            <div style={{ backgroundColor: '#2b3035', padding: '5px 10px', borderRadius: '5px'}}>
            <span style={{ color: 'white' }}>
                Total Time:&nbsp;
                <span style={{ fontWeight: 'bold' }}>{totalTime}<br></br></span>
                Avr. Time:&nbsp;
                <span style={{ fontWeight: 'bold' }}>1:00</span>
            </span>
            </div>
        </div>
    )
}

export default Analyze
