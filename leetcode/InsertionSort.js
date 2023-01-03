// Requirements: 1) Implement the selection and insertion sorting algorithms to arrange a sequence of numbers from 1..100 in decreasing order. Analyze the time taken by each algorithm.

function insertion(arr){
    let n = arr.length;
    for(let i = 1;i<n;i++){
      let temp = arr[i];
      let j = i-1;
      while(j>=0 && arr[j]<temp){
         arr[j+1] = arr[j];
       
        j--;
      }
      arr[j+1] = temp;
    }
    console.log(arr);
  }
  let arr = [];
  for(let i = 1;i<=100;i++){
    arr.push(i);
  }
  console.log(arr);
  insertion(arr);
  
  