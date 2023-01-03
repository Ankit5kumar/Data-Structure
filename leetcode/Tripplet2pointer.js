function trippletwith2pointer(arr){
    // sort the array
    arr.sort((a,b)=>a-b);
    for(let i = 0;i<=arr.length-1;i++){
      let l = i+1;
      let r = arr.length-1;
      
      let arrElem = arr[i];
      while(l<=r){
        if(arrElem+arr[l]+arr[r]==0){
          console.log(arrElem,arr[l],arr[r])
          l++;
          r--;
        }
        else if(arrElem+arr[l]+arr[r]<0){
          l++;
        }
        else{
          r--;
        }
        
      }
      console.log(i);
    }
    return arr;
  }
  let arr = [1,-1,2,0,3,1,-2]
  trippletwith2pointer(arr)