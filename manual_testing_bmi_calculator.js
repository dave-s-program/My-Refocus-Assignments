
function calculateBMI(kg, meter){
    return kg / (meter * meter);
}

let kg = 65;
let meter = 1.7

const bmi = calculateBMI(kg, meter);

if (bmi <= 18.5) {
    output = "Under Weight";
} else if(bmi > 18.5 && bmi <= 24.9){
    output = "Normal Weight";
} else if(bmi > 24.9 && bmi <= 29.9){
    output = "Over Weight";
} else if(bmi > 30.0){
    output = "OBESE";
}


console.log("Your BMI value is " +bmi.toFixed(0)+ " and you are : "+output);
