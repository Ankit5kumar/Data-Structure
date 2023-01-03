let n =7;
let str = '';
for(let i = 0;i<=n;i++){
  for(let j = 1+i;j<=n;j++){
    str+=j;
  }
  for(let k = 1;k<=n-1;k++){
    str+=' ';
  }
  str+='\n';
}
console.log(str)