/* Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in the reverse order, the inversion count is the maximum. 
Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j */


function inversion(arr){
    let n = arr.length;
    let sum = [];
    let count = 0;
    for(let i = 0;i<n;i++){
      for(let j = i+1;j<n;j++){
        if(arr[i]>arr[j] && i<j){
          count++;
          sum = count;
          console.log(arr[i],arr[j]);
        }
      }
    }
    console.log(`Total number of inversion in array: ${sum}`);
  }
//   let arr = [1, 20, 6, 4, 5];
let arr = [-1, 6, 3, 4, 7, 4];

      inversion(arr);
  