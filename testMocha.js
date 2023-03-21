var assert = require('assert');
const { describe } = require('mocha');
const {IsEmail,checkPassword, calculateStrength, checkStrength} = require('./registration.js');



describe('IsEmail()', function() {
    it('should return true for valid email', function() {
        assert.equal(IsEmail("sfadf@example.com"), true);
    });

    it('should return false for invalid email', function() {
        assert.equal(IsEmail("sfadfexample.com"),false);
    });
    it('should return false for invalid email', function() {
        assert.equal(IsEmail("sfadf@examplecom"),false);
    });
});
const passwordResult1 = checkPassword("Password245123!");
const passwordResult2 = checkPassword("password123");
const passwordResult3 = checkPassword("PASSWO12!");

describe('checkPassword()', function() {
    it('checkPassword should return the correct result for a valid password',function(){
        // 
        assert.equal(JSON.stringify(passwordResult1) === '{"length":15,"hasLowerCase":true,"hasUpperCase":true,"hasNumber":true,"hasSpecialChar":true}', true);
    });
    it('checkPassword should return the false result for a invalid password',function(){
        // const passwordResult2 = checkPassword("password123");
        assert.equal(JSON.stringify(passwordResult2) === '{"length":11,"hasLowerCase":true,"hasUpperCase":false,"hasNumber":true,"hasSpecialChar":false}', true);

    });
    it('checkPassword should return the false result for a invalid password',function(){
        // const passwordResult3 = checkPassword("PASSWO12!");
        assert.equal(JSON.stringify(passwordResult3) === '{"length":9,"hasLowerCase":false,"hasUpperCase":true,"hasNumber":true,"hasSpecialChar":true}', true);
    });
});

const strength1 = calculateStrength(checkPassword("Password245123!"));
const strength2 = calculateStrength(checkPassword("password123"));
const strength3 = calculateStrength(checkPassword("PASSWO12!"));
describe('calculateStrength()', function() {
    it('calculateStrength should return 5 for a valid password',function(){
        assert.equal(strength1, 5);
});
    it('calculateStrength should return 3 for a invalid password',function(){
        assert.equal(strength2, 3);
    });
    it('calculateStrength should return 4 for a invalid password',function(){
        assert.equal(strength3, 4);
    });

});

describe('checkStrength()', function() {
    it('checkStrength should return true for a valid password',function(){
        assert.equal(checkStrength(strength1), true);
    });
    it('checkStrength should return false for a invalid password',function(){
        assert.equal(checkStrength(strength2), false);
    });
    it('checkStrength should return false for a invalid password',function(){
        assert.equal(checkStrength(strength3), false);
    });
});












    
