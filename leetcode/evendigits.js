function even(nums) {
    let count = 0;
     for(let numbers in nums){
       if(nums[numbers].toString().length%2==0){
         count++
       }
     }
     console.log(count)
   };
   even([12,345,2,6,7896])