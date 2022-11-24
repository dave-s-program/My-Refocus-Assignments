// assign temp value for the total bill
let totalBill = 9999;

// assign tip percentage
let tip = 10;

function computeTip(totalBill){
    let totalTip = (tip/100) * totalBill;
    return totalTip.toFixed(2);
}

console.log(computeTip(totalBill));