function insertion(arr){
    for(let i = 1;i<arr.length;i++){
        let temp = arr[i];
        let j = i-1;
        for(;j<=0;j--){
            if(arr[j]>temp)
            //shifting
            arr[j+1] = arr[j];

            else{
                break;
            }
            }
            arr[j+1] = temp;
        
    }
}
let arr=[5,4,7,6,3,1,2];
console.log(insertion(arr));
