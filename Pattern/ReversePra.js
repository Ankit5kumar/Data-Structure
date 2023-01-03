/*let row =5;
let str = "";
for (let i = row;i>=1;i--) {
    for(let space = 1; space<=row-i;space++) {
        str+=' ';
    }
    for(let stars = 1; stars<=2*i-1;stars++) {
        str+='*';
    }
    str+='\n';
}
console.log(str); */

// bu using function
function pramid() {
    let str = "";
for (let i = row;i>=1;i--) {
    for(let space = 1; space<=row-i;space++) {
        str+=' ';
    }
    for(let stars = 1; stars<=2*i-1;stars++) {
        str+='*';
    }
    str+='\n';
}
console.log(str);
}
let row =5;
pramid()