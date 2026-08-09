// Find Smallest Number in an array;

let arr=[4,8,6,7,3]

let Smallest= Infinity;

function findSmallestNumber(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<Smallest)
           Smallest=arr[i];
        
    }
    return Smallest;
}

let result= findSmallestNumber()
console.log(result)