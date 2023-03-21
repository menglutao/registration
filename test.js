// Import the functions from the registration.js file
// const {IsEmail,checkPassword, calculateStrength, checkStrength} = require('./registration.js');

// Test the IsEmail function
console.assert(
  IsEmail("sfadf@example.com") === true,
  "IsEmail should return true for valid email"
);
console.assert(
  IsEmail("sfadfexample.com") === false,
  "IsEmail should return false for invalid email"
);
console.assert(
  IsEmail("sfadf@examplecom") === false,
  "IsEmail should return false for invalid email"
);

// Test the checkPassword function see if contains lowercase, uppercase, number, special character
const passwordResult1 = checkPassword("Password245123!");
console.log("passwordResult1", passwordResult1);
console.assert(
  JSON.stringify(passwordResult1) ===
    '{"length":15,"hasLowerCase":true,"hasUpperCase":true,"hasNumber":true,"hasSpecialChar":true}',
  "checkPassword should return the correct result for a valid password"
);

const passwordResult2 = checkPassword("password123");
console.log("passwordResult2", passwordResult2);
console.assert(
  JSON.stringify(passwordResult2) ===
    '{"length":11,"hasLowerCase":true,"hasUpperCase":false,"hasNumber":true,"hasSpecialChar":false}',
  "checkPassword should return the false result for a invalid password"
);

const passwordResult3 = checkPassword("PASSWO12!");
console.log("passwordResult3", passwordResult3);
console.assert(
  JSON.stringify(passwordResult3) ===
    '{"length":9,"hasLowerCase":false,"hasUpperCase":true,"hasNumber":true,"hasSpecialChar":true}',
  "checkPassword should return the false result for a invalid password"
);

// Test the calculateStrength function see if returns the correct strength
const strength1 = calculateStrength(passwordResult1);
// console.log('strength1', strength1);
console.assert(
  strength1 === 5,
  "calculateStrength should return 5 for a valid password"
);

const strength2 = calculateStrength(passwordResult2);
// console.log('strength2', strength2);
console.assert(
  strength2 === 3,
  "calculateStrength should return 3 for a invalid password"
);

const strength3 = calculateStrength(passwordResult3);
console.assert(
  strength3 === 4,
  "calculateStrength should return 4 for a invalid password"
);

// Test the checkStrength function see if the strength is greater than 4
console.assert(
  checkStrength(strength1) === true,
  "checkStrength should return true for a valid password"
);
console.assert(
  checkStrength(strength2) === false,
  "checkStrength should return false for a invalid password"
);
console.assert(
  checkStrength(strength3) === false,
  "checkStrength should return false for a invalid password"
);
