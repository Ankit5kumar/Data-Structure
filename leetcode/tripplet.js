// function tar(arr,n){ //   Asked in flipcart
//     for(let x = 0;x<n;x++){
//       for(let y = x+1;y<n;y++){
//         for(let z = y+1;z<n;z++){
//           if(arr[x]+arr[y]+arr[z]==0){
//             console.log(arr[x],arr[y],arr[z]);
//           }
//         }
//       }
//     }
//   }
//   //  let arr = [0,-1,2,-3,1]; 
//   let arr = [-1,0,1,2,-1,-4]
  
//   let n = 5;
  
//  console.log(arr,n);
// optimize
 function triple(arr,n){
  for(let i = 0;i<n-2;i++){
    for(let j = i+1;j<n-1;j++){
      for(let k = j+1;k<n;k++){
        if(arr[i]+arr[j]+arr[k]==0){
          console.log(arr[i],arr[j],arr[k]);
        }
      }
    }
  }
}
let arr = [1,-1,2,0,3,1,-2];
let n = arr.length;
triple(arr,n)
