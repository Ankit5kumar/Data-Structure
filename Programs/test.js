function sum(arr,tar){
    for(let i = 0;arr.length;i++){
      for(let j =i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==tar){
          console.log(i,j);
        }
      }
    }
  }
  let arr = [2,7,11,15];
  let tar = 11;
  sum(arr,tar)