function expo(n){
    if(n==0) return 1;
    return 2*expo(n-1);
}

/*
let num = 2; 
let power = 4;
function exponential(power){
  if(power==0) return 1;
  return num*exponential(power-1);
}
exponential(power)
for(let i = 0;i<power;i++){
  console.log(exponential(i))
}


*/