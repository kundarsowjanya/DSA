let num = 975466
let count = 0

function countDigits(n) {
    //Handling 0
    if (num === 0)
        return 1
    //Handling negative num
    n= Math.abs(n)
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

const result = countDigits(num)
console.log(result)

