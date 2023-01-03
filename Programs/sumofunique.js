let arr = [1,2,2,5,4,4,5,7,8];
let b = [];
for(let i=0;i<arr.length;i++){
  
  if(b.indexOf(arr[i]) === -1){
    b.push(arr[i])
  }
}
console.log(b)

sum(b)
function sum(b){
  let sum = 0;
  for(let j =0;j<b.length;j++){
  sum+=b[j]
}
  console.log(`Sum of all unique numbers: ${sum}`)
}









