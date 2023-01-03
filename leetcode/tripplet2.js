// function triple(arr){
//     let n = arr.length;
//    for(let i = 0;i<n-1;i++){
//      let set = new Set();
//      for(let j = i+1;j<n;j++){
//        let checkno = -(arr[i]+arr[j]);
//        if(set.has(checkno)){
//          console.log(checkno,i,j);
//        }
//        else{
//          set.add(arr[j]);
//        }
//      }
//    }
//   }
//   let arr = [-1,0,1,2,-1,-4];
  
//   triple(arr);


  //
  function triple(arr){
    let n = arr.length;
   for(let i = 0;i<n-1;i++){
     let set = new Set();
     for(let j = i+1;j<n;j++){
       let checkno = -(arr[i]+arr[j]);
       if(set.has(checkno)){
         console.log(checkno,i,j);
       }
       else{
         set.add(arr[j]);
       }
     }
   }
  }
  let arr = [-1,0,1,2,-1,-4];
  
  triple(arr);
