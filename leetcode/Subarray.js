function Subarray(arr){
    let Sub = [];
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            for(let k=i;k<=j;k++){
                Sub.push(arr[k]);
            }
        }
    }
    console.log(Sub);
}
let arr = [1,2,3,4,50];
Subarray(arr);
