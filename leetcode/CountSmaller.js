// Return the array with smaller number of elements of the right side of the array

function count(arr){
    let j = 0;
    let ans = [];
    while(j<arr.length){
      let count = 0;
      for(let i = j+1;i<arr.length;i++){
        if(arr[j]>arr[i]){
          count+=1;
        }
      }
      ans.push(count);
      j++;
    }
    return ans;
  }
  count([12, 1, 2, 3, 0, 11, 4])