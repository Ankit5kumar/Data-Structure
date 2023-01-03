// non recursive approaches
/* function sorted(arr,len){
    if(len==0 || len ==1) console.log("true");
    for(let i=1;i<len;i++){
        if(arr[i]<arr[i-1]){
            console.log("false")
        } 
        else{
            console.log("true")
        }
    }
    
        
    }

let arr = [1,2,3,4,1];
len = arr.length;
sorted(arr,len) */

// using recursive


function isort(arr,i){
if(i>=arr.length) return true;
  if(arr[i]<arr[i-1]) return false;
  return isort(arr,i+1)
}
let arr = [1,2,3,4]
isort(arr,1);