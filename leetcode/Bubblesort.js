function bubblesort(array){
    let n = array.length
      for(let i = 1;i<n;i++){
        for(let j =0;j<n-i;j++){
          if(array[j]<array[j+1]){
            [array[j],array[j+1]] = [array[j+1],array[j]];
          }
        }
      }
      return array;
    }
    let array = [];
    for(let i = 1;i<=100;i++)array.push(i);
  console.log(bubblesort(array));

    
    
    
    
    
    
    
    
    