 //Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
 function dup(arr){
    let n = arr.length;
    let i = 0;
    while(i<n){
      if(arr[i]==0){
        arr.splice(i,0,0);
        i++;
      }
      i++;
    }
    arr.splice(n,arr.length-n+1);
    console.log(arr);
  }
  let arr = [1,2,0,3,4,0,5,0];
  dup(arr)
  