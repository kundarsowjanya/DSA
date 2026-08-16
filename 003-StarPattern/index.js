let n = 4


//   *  *  *  * 
//   *  *  *  * 
//   *  *  *  * 
//   *  *  *  * 
//   *  *  *  *

for (let i = 0; i < n + 1; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + " * "
    }
    console.log(row)

}

console.log("========================================")


//   *  
//   *  *  
//   *  *  *  
//   *  *  *  * 


for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row += " * "

    }
    console.log(row)
}
console.log(" ............")

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < i + 1; j++) {
        row += " * "

    }
    console.log(row)
}


console.log("========================================")

//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + " " + (j + 1)

    }
    console.log(row)
}


console.log("========================================")


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + " " + (i + 1)

    }
    console.log(row)
}

console.log("========================================")

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let k = 5
for (let i = 0; i < k; i++) {
    let row = ""
    for (let j = 0; j < k - i; j++) {
        row = row + " " + (j + 1)
    }
    console.log(row)
}

console.log("========================================")

//   * * * * *
//   * * * *
//   * * *
//   * *
//   *

let l = 5
for (let i = 0; i < l; i++) {
    let row = ""
    for (let j = 0; j < l - i; j++) {
        row = row + " " + "*"
    }
    console.log(row)
}

console.log("========================================")

//           *
//         * *
//       * * *
//     * * * *
//   * * * * *

let z = 5
for (let i = 0; i < z; i++) {
    let row = ""
    // this loop to handle empty space
    for (let j = 0; j < z - (i + 1); j++) {
        row = row + " " + " ";
    }
    // this loop to handle *
    for (let k = 0; k < i + 1; k++) {
        row = row + " "+"*"

    }
    console.log(row)
}


console.log("========================================")
let x = 6

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

for (let i = 0; i < x; i++) {
    let row = ""; let toggle = 1
    for (let j = 0; j < i + 1; j++) {
        row = row + " " + toggle;
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1
        }
    }
    console.log(row)
}

console.log("========================================")
//   1
//   0 1
//   0 1 0
//   1 0 1 0
//   1 0 1 0 1
//   0 1 0 1 0 1

let y = 6
let toggle = 1
for (let i = 0; i < y; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + " " + toggle;
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1
        }
    }
    console.log(row)
}