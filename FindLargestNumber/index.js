//Find the largest Number in an array


let arr= [5,0,7,10,8,17,1]

let largest = -1;
//let largest = -Infinity;
//let lergest = arr[0]

function findLargestNumber(){
   for(let i=0;i<arr.length;i++){
    if(arr[i]>largest)
        largest=arr[i]
   }

   return largest;
}

console.log(findLargestNumber(largest))


// Note: Keeping -1 is not good solution when array contain negative value instead in JS
// we have Infinity and -Infinity
// we can assign -Infinity or we can keep first array element arr[0] as largest value 
