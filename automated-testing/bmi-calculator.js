const myFunction = {
    calculateBMI: function(kg, meter){
        result = kg / (meter * meter);
        return Number(result.toFixed(0));
    }
};


module.exports = myFunction;
