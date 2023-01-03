// Running Sum of 1d Array
function run(arr){
    let n = arr.length;
    let sum = 0;
    let result = new Array;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
        result.push(sum);
    }

    console.log(result);
}
let arr = [1,2,3,4];
run(arr);