let massMark = 65;
let massJohn = 58;
let heightMark = 1.88;
let heightJohn = 1.65;

let BMIJohn = massJohn / ( heightJohn * heightJohn );
let BMIMark = massMark / ( heightMark * heightMark );

console.log(BMIJohn.toFixed(2));
console.log(BMIMark.toFixed(2));

const higherBMI = BMIJohn < BMIMark; //this give "true"
console.log(
  `Is Mark's BMI is higher than John's? Answer is “${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`
);