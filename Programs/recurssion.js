function srt(arr,i){
    if([i]==arr.length-1){
      return true;
    }
    let val = srt(arr,i+1);
    if(val && arr[i]<arr[i+1]){
      return true;
    }
    else{
      return false;
    }
    
  }
  console.log(srt([2,3,4,5,6],0))