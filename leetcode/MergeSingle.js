/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.  */
function merge(nums1,nums2){
    let m = nums1.length;
    let n  = nums2.length;
    let i = 0;
    for(let j=0;j<nums1.length;j++){
        if(i>=m){
            break;
        }
        if(nums1[j]==0){
            nums1[j] = nums2[i];
            i+=1;
        }
    }
    return nums1.sort((a,b)=>a-b);
}
let nums1 = [1,2,3,0,0,0]

let nums2 = [2,5,6];
console.log(merge(nums1,nums2))