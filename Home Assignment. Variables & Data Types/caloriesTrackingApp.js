// Number of burn calories per 30 minutes
let caloriesPer30Minutes = 225;

// Number of minutes where Sam cycling everyday
let timeCycling = 0.5;

// Number of days where Sam do the cycling
let numtimeSamCycling = 15;

// Multiply the calories per 30 minutes to number of days was Sam cycling
let totalCaloriesBurn = caloriesPer30Minutes * numtimeSamCycling;


console.log('Great work, Sam! After '+ timeCycling +' hours of cycling every day for the past '+ numtimeSamCycling +' days, you may lose a total of '+ totalCaloriesBurn +' calories.');