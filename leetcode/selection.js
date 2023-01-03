// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

function selection(arr,n){
  for(let i = 0;i<n-1;i++){
    let mindex = i;
    console.log(`value of i ${i}`);
    for(let j = i+1;j<n;j++){
      if(arr[j]<arr[mindex]){
         mindex = j;
        }
         }
    [arr[mindex],arr[i]] = [arr[i],arr[mindex]];
   
  }
  return arr;
}
let arr =  [5,8,7,4,3,6,9]
let n = arr.length;
console.log(selection(arr,n))

  
  