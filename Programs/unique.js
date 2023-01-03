// here we are finding the unique number
function unique(arr,n){
    let res = arr[0];
    for(let i = 1; i < n; i++){
         res = res^arr[i];
    }
    console.log(res);

}

let n =5
let arr = [3,2,1,2,3,2]
unique(arr,n)