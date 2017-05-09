'use strict';

function factorial(input) {
    if (typeof(input) === "number"){
        if (input < 1) {
            return "Invalid input"
        }
        else if (input === 1) {
            return 1;
        }
        else {
            return input * factorial(input - 1);
        }
    }
    else {
        return "Only numbers allowed. Input must be a number."
    }
}

module.exports = factorial
