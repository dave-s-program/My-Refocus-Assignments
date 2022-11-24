// Goal that Sam wants to save
let samWants = 10000;

// Total of money that Sam already save
let samMoney = 7500;

// get the total percentage
let totalPercentage = (100 * 7500) / 10000;

// get the remaining percentage
let remainingPercentage = 100 - totalPercentage;

console.log('Thank you for your discipline and hardwork, Sam! You are now '+ remainingPercentage +'% away from your goal of saving ₱'+ samWants.toLocaleString('en-US') +'.');