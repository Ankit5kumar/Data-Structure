function consective(arr,len){
    
    let count = 0;
    let result = 0;
    for(let i = 0; i < len; i++){
        if(arr[i] ==0){
            count = 0;

        }
        else{
            count++;
            result = Math.max(result,count);
        }
    }
    console.log(result);
}
let arr = [1,1,1,1,1];
let len = arr.length;
consective(arr,len)