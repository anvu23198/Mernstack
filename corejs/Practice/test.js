function addNumber(...arr){
    var sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]; //add into array
    }

    return sum;
}

var arr = [5,6,7]

console.log(addNumber(arr))