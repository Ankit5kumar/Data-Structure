// finding all unique combinations of numbers in an array
function combinationSum(arr,sum){
    let ans = new Array();
    let temp = new Array();
    arr.sort();
    getNumbers(ans,arr,sum,0,temp)  
    return ans;
  }
  
  function getNumbers(ans,arr,sum,index,temp){
    //base case
    if(sum==0){
      ans.push([...temp]);
      return;
    }
    
    for(let i=index;i<arr.length;i++){
      if((sum-arr[i]) >= 0){
        //pre self work
        temp.push(arr[i]);
        //recursive call
        getNumbers(ans,arr,sum-arr[i],i,temp);
        //post self work
        temp.splice(temp.indexOf(arr[i]),1);
      }
    }
    return temp;
  }
  
  let sum =7;
  let ans = combinationSum([2,3,5,7],sum);
  console.log(ans)