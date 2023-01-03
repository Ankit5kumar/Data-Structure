function tar(arr,n,target) {
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if(arr[i]+arr[j] == target){
                
                console.log(i,j);
            }
        }
    }
}
let arr = [0, -1, 2, -3, 1];
let n = arr.length;

tar(arr,n,-4)
// function target(arr,n,target) {
//     for(let i = 0; i < n; i++){
//         for(let j = i+1; j < n; j++){
//             if(arr[i]+arr[j] == target){
//                 console.log(arr[i],arr[j]) ;
//             }
//         }
//     }
// }
// let arr = [0, -1, 2, -3, 1];
// let n = arr.length;
// let target = -2;
// target(arr,n,target)