
    
    

// function miggle(arr,n){
//     let up = 1;
//       let down =1;
//       for(let i = 0;i<n-1;i++){
//         if(arr[i]>arr[i+1]){
//           up = down+1;
//         }
//         if(arr[i]<arr[i+1]){
//           down = up+1;
//         }
//       }
//       return Math.max(up,down);
//     }
    
//     let arr = [1, 7, 4, 9, 2, 5]
//     let n = arr.length;
    
//     miggle(arr,n)
    

function miggle(arr,n){
    if(n<2) return n;
let prev = arr[1]-arr[0];
let count = 2;
for(let i = 2;i<n-1;i++){
    let diff = arr[i] - arr[i-1];
    if(diff<0 && prev>0 || diff>0 && prev<0){
        count++;
        prev = diff;
    }
}
console.log(count);
}
let arr = [1, 7, 4, 9, 2, 5]
    let n = arr.length;
    
  miggle(arr,n)