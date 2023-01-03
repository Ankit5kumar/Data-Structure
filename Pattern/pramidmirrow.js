let n =7;
let str = '';
for(let i = 0;i<n;i++){
  for(let j = i+1;j<=n;j++){
    str+=j;
  }
  for(let k =1;k<=i;k++){
    str+=' ';
  }
  str+='\n';
}
console.log(str);