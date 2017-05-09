'use strict';

const factorial = require('../app/index.js');

console.log(factorial("kos"));


describe("Test for normal values", function() {
    it("should return 120 for the argument, 5", function() {
        expect(factorial(5)).toEqual(120);
    });

    it("should return 24 for the argument, 4", function() {
        expect(factorial(4)).toEqual(24);
    });

    it("should return 9.33262154439441e+157 for the argument, 100", function() {
        expect(factorial(100)).toEqual(9.33262154439441e+157);
    });

    it("should return 1 for the argument, 1", function() {
        expect(factorial(1)).toEqual(1);
    });
});

describe("Test for possible edge cases", function() {
    it("should return 'Invalid input' for the argument, -1", function() {
        expect(factorial(-1)).toEqual("Invalid input");
    });

    it("should return 'Invalid input' for the argument, 0", function() {
        expect(factorial(0)).toEqual("Invalid input");
    });

    it("should return 'Only numbers allowed. Input must be a number.' when passed an argument that isn't type number", function() {
        expect(factorial("Bolaji")).toEqual("Only numbers allowed. Input must be a number.");
    });
});