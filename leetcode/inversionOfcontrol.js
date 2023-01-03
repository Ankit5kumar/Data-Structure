// Inversion of Control
// An abstract programming principle based on the flow
// of control that should be managed completely by
// some specific implementation of the framework, which
// is external to your code.

function filter(arr,filter){
    let newarr = []
    for(let index = 0;index<arr.length;index++){
      const element = arr[index]
    //   console.log(`element of arr[index] ${element}`)
      if(filter(element)){
        newarr[newarr.length] = element;
      }
      }
    return newarr;
  }
  const arr = [0,1,undefined,2,null,3,'four','']
  console.log(filter(arr,e1=>e1!==null && e1!==undefined))
  console.log(filter(arr,e1=>e1!==undefined))
  console.log(filter(arr,e1=>e1!==null))
  console.log(filter(arr,e1=>e1!==undefined && e1!==null && e1!==0))
  console.log(filter(arr,e1=>e1!==undefined && e1!==null && e1!==''))