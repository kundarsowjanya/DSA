// Palindrome

function isPalindrome(n) {
    let rev = 0;
    let original = n
    //Negative number is not palindrome 
    if (n < 0) {
        return false
    }
    while (n > 0) {
        //find the last digit
        let rem = n % 10
        //Keep last digit into rev varable
        rev = (rev * 10) + rem
        //remove last digit 
        n = Math.floor(n / 10)
    }
    if (original == rev) {
        return true;
    }
    else {
        return false;
    }
}


let result = isPalindrome(121)
console.log(result)