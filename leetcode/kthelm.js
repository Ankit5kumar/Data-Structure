/* Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element. */

function kth(arr,k){
    console.log(arr[k-1])
}
let arr =  [3,2,3,1,2,4,5,5,6];
arr.sort((x,y) =>y-x);
 
let k = 1;
kth(arr,k);
