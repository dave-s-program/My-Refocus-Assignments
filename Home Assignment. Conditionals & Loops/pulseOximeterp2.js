// declare number for Pulse Rate
let tempPulserate = 132;

function getPulserate(pulserate){
    if (pulserate >= 40 && pulserate <= 100) {
        return 'Normal reading.';
    } else if(pulserate >= 101 && pulserate <= 109) {
        return 'Acceptable to continue home monitoring.';
    } else if(pulserate >= 110 && pulserate <= 130){
        return 'Seek advice from health professionals.';
    } else if(pulserate >= 131){
        return 'Seek urgent medical advice.';
    } else {
        return 'Your Pulse Rate is too low!';
    }
}

console.log(getPulserate(tempPulserate));