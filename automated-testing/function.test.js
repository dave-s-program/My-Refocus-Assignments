const myFunction = require("./bmi-calculator");

test("Check if the BMI is equal to 22 which is Normal Weight", () => {
    expect(myFunction.calculateBMI(65, 1.7)).toBe(22);
});
