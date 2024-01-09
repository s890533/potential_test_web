function calculateTimeDifference(startDate, endDate = new Date()) {
    const timeDifference = endDate - startDate;
  
    return timeDifferenceToString(timeDifference);
}

function timeDifferenceToString(timeDifference){
  const millisecondsInOneSecond = 1000;
    const secondsInOneMinute = 60;
    const minutesInOneHour = 60;
    const hoursInOneDay = 24;
  
    const milliseconds = timeDifference % millisecondsInOneSecond;
    const seconds = Math.floor((timeDifference / millisecondsInOneSecond) % secondsInOneMinute);
    const minutes = Math.floor((timeDifference / (millisecondsInOneSecond * secondsInOneMinute)) % minutesInOneHour);
    const hours = Math.floor((timeDifference / (millisecondsInOneSecond * secondsInOneMinute * minutesInOneHour)) % hoursInOneDay);
    const days = Math.floor(timeDifference / (millisecondsInOneSecond * secondsInOneMinute * minutesInOneHour * hoursInOneDay));

    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    
  
    const formattedTime = [
      days > 0 ? days : null,
      hours > 0 ? formattedHours : null,
      minutes > 0 ? formattedMinutes : '00',
      seconds > 0 ? formattedSeconds : '00'
    ]
      .filter(Boolean) // 去除為 null 的項目
      .join(':'); // 以逗號分隔
  
    return formattedTime;
}

module.exports = calculateTimeDifference;