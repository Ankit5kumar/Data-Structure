
function buble(arr,n){
    let count = 0;
    for(let i = 0;i<n-1;i++){
      count++;
      for(let j = 0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
        
      }
      console.log(count);
      console.log(arr)
      
      
    }
    return arr;
  }
  let arr = [ 1, 5, 3, 2, 7 ];
  let n = 5;
  buble(arr,n) 
  