const obscure = (ccNumber) => {
    if (ccNumber.length < 12 || ccNumber.length > 16) {
        return 'Invalid Credit Card'
    }
    let obscuredNumber = '';
    for (let i = 0; i < ccNumber.length - 4; i++) {
        obscuredNumber += '*';
    }
    obscuredNumber += ccNumber.slice(-4);
    return obscuredNumber;
}


module.exports = obscure;