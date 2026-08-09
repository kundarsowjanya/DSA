//Find count of negative numbers in an array

// Solution: 1 Using counter

let nums=[4,16,7,-8,-4,9,3,-5,-7]

let counter=0;

function findNegativeNumberCount(){
    for(let i=0;i<nums.length;i++){
        if(nums[i]<1)
            counter++;
    }
    return counter;
}

let result= findNegativeNumberCount()
console.log(result)


/////////////////////

//solution 2 : using new array

let arr=[]

function findCount(){
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0)
            arr.push(arr[i])
    }
    return arr.length
}

console.log(findCount())