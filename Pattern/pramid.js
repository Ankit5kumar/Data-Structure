/*
let n =5;
let str = "";
for(let i = 0; i <=n; i++) {
    for(let j = 0; j < n-i; j++) { // For the Space
      str+=' ';
    }
    for(let k = 0; k < 2*i-1; k++) { //for the stars
        str+='*';
    }
    str+='\n';
}
console.log(str); */


function pattern(){
    let str = "";
for(let i = 0; i <=n; i++) {
    for(let j = 0; j < n-i; j++) { // For the Space
      str+=' ';
    }
    for(let k = 0; k < 2*i-1; k++) { //for the stars
        str+='*';
    }
    str+='\n';
}
console.log(str);
}
let n =5;
pattern()