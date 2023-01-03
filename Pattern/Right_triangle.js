/*
let n =5;
let str ='';
for(let i = 0; i < n; i++){
    for(let j = 0; j < n-i; j++){ // This will print the space
        str+=' ';
    }
    for(let k = 0; k <=i;k++){ // This will print the star
        str+='*';
    }
    str+='\n';  // This is for the next line
}
console.log(str); */
 
// By using function
function triangle(){
    let str ='';
for(let i = 0; i < n; i++){
    for(let j = 0; j < n-i; j++){ // This will print the space
        str+=' ';
    }
    for(let k = 0; k <=i;k++){ // This will print the star
        str+='*';
    }
    str+='\n';  // This is for the next line
}
console.log(str);
}
let n =5;
triangle()