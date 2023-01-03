/*
let arr = [0,1,1,0,1,0,0,15]; // Without using any inbuilt method

for(let i = 0; i < arr.length; i++){
    for(let j =i+1; j < arr.length; j++){
        if(arr[i]<arr[j]){
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp;
        }
    }
}
console.log(arr); */

// by using function;
function sort(){
    for(let i = 0; i < arr.length; i++){
        for(let j =i+1; j < arr.length; j++){
            if(arr[i]>arr[j]){
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}
let arr = [0,1,1,0,1,0,0,15]; 
sort();
