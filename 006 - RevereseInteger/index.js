// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


function reverse(n) {
    let original = n;
    let reverse = 0;
    //Handle negative number
    n = Math.abs(n)
    while (n > 0) {
        //find last digit
        let lastDigit = n % 10;
        //assign last digit to reverse variable;
        reverse = (10 * reverse) + lastDigit;
        //remove last digit;
        n = Math.floor(n / 10);
    }

    // handle 32 digit 

    let limit = Math.pow(2, 31)
    //let limit = 2**31
    if (reverse < -limit || reverse > limit) {
        return 0
    }

    //handle negative number
    return original < 0 ? -reverse : reverse
}

let result = reverse(1534)
console.log(result)