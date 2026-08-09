// Search for an element in an array and return it's index
//if the element is not present -1

let arr = [20, 30, 7, 7, 8]

function searchElement(ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele)
            return i
    }
    return -1
}


let result = searchElement(0)
console.log(result)