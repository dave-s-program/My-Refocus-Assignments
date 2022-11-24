// declare number for Oxygen Level
let tempOxygenLevel = 100;

function getOxygenLevel(oxygenLevel){
    if (oxygenLevel >= 96) {
        return 'Normal reading.';
    } else if(oxygenLevel == 95){
        return 'Acceptable to continue home monitoring.';
    } else if(oxygenLevel >= 93 && oxygenLevel <= 94){
        return 'Seek advice from health professionals.';
    } else if(oxygenLevel <= 92){
        return 'Seek urgent medical advice.';
    } else {
        return 'Invalid Number!.';
    }
}

console.log(getOxygenLevel(tempOxygenLevel));