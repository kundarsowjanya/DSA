//Find Second Largest number 
//Hint : Maintain 2 variable

let arr= [7,9,5,6,0,10,10]

let firstLargest = - Infinity;
let secondLargest = - Infinity;

function findSecondLargestNum(){
     if (arr.length < 2) {
        return null
    } 
    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest ; // First updated second largest to first largest before updating first largest
            firstLargest = arr[i];
        }else if(arr[i] > secondLargest && arr[i] != firstLargest){  //second condition will solve duplicates
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

let res = findSecondLargestNum()
console.log(res)