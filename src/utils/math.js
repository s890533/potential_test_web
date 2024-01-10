function checkNonExcludedNumber(number){
    if (number < 11 || number % 10 === 0){
        return true;
    }
    return false;
}

module.exports = {checkNonExcludedNumber};