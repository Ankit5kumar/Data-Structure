// Here are we are finding the sum of row
let arr=[[2,7,6],[9,5,1],[4,3,8]]
let sumRow=0;
for(let i=0; i<arr.length;i++){
     for(let j=0; j<arr[0].length;j++){
    sumRow+=arr[i][j]
}
}
console.log(sumRow)
