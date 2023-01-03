 let n = 5;
let str = '';
for(let i = 0; i <=n; i++){
    for(let j = 0; j <i;j++){
        str+='*';
    }
    str+='\n';
}
console.log(str);  

// by using function
/* function triangle(n){
    let str = '';
    for(let i = 0; i < n; i++){
        for(let j = 0; j <i;j++){
            str+='*';
        }
        str+='\n';
    }
    console.log(str);
}
let n = 5;
triangle(n) */