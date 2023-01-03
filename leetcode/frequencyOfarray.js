// Counting frequencies of array element
function frequency(arr,num){
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==num){
            count++;
        }
    }
    return count;
}   
let arr = [ 10, 20, 20, 10, 10, 20, 5, 20 ];
let num = 20;
console.log(frequency(arr,num));
