let arr = [12,1,23,456,4125,55555,999998];
let even = arr.filter((x)=>x.toString().length%2==0);
console.log(`The length of even digits is: ${even.length}`); 

// using for loop 
/*let arr = [12,1,23,456,4125]
let str = [];
for(let i = 0;i<arr.length;i++){
 if(arr[i].toString().length%2==0){
   str.push(arr[i]);
 }
  
}

console.log(str.length);*/