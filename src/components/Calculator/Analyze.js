import React from 'react'
import {calculateTimeDifference, timeDifferenceToString, secondToString} from '../../utils/time';

const Analyze = (props) => {
    const { caculatorScore, caculatorTime} = props;

    const totalTime = timeDifferenceToString(calculateTimeDifference(caculatorTime.startTime, caculatorTime.endTime));
    const averageTime = secondToString(caculatorTime.timeStampRecord.reduce((a, b) => a + b, 0) / caculatorTime.timeStampRecord.length);

    if (caculatorScore.totalAmount === 0){
        return ''
    }

    return (
        <div>
            <div style={{ backgroundColor: '#2b3035', padding: '5px 10px',marginBottom: '5px' , borderRadius: '5px'}}>
            <span style={{ color: 'white' }}>
                Last Result:&nbsp;
                <span style={{ color: 'green', fontWeight: 'bold' }}>{caculatorScore.correctAmount}</span>&nbsp;/&nbsp;
                <span style={{ color: 'red', fontWeight: 'bold' }}>{caculatorScore.wrongAmount}</span>&nbsp;/&nbsp;
                <span style={{ fontWeight: 'bold' }}>{caculatorScore.totalAmount}</span>
            </span>
            </div>
            <div style={{ backgroundColor: '#2b3035', padding: '5px 10px', borderRadius: '5px'}}>
            <span style={{ color: 'white' }}>
                Total Time:&nbsp;
                <span style={{ fontWeight: 'bold' }}>{totalTime}<br></br></span>
                Avr. Time:&nbsp;
                <span style={{ fontWeight: 'bold' }}>{averageTime}</span>
            </span>
            </div>
        </div>
    )
}

export default Analyze
