const quicksort = (arr)=>{
    const end  = arr.length - 1;
    const start =0;
    sortArray(arr,start,end);
}

// swap fxn to swap the value

const swap = (arr,a,b)=>{
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;

}

// sorting the array
const sortArray = (arr,low,high)=>{
    if(low>=high){
        return;
    }
    let start = low;
    let end = high;
    let mid = Math.floor((start+end)/2);
    let pivot = arr[mid];
    while(start<end){
          while(arr[start]<pivot){
              start++;
          }
          while(arr[end]>pivot){
            end--;
          }
          if(start<=end){
            swap(arr,start,end);
            start++;
            end--;
          }
    }
    sortArray(arr,low,end);
    sortArray(arr,start,high);


}

let arr = [8, 4, 3, 6, 2, 8, 1, 7];
quicksort(arr);
console.log(quicksort);