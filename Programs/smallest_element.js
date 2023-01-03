let arr = [5,4,5,6,71,1,23,5,76];
let smallest = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
        arr[i] = smallest;
    }
}
console.log(smallest);