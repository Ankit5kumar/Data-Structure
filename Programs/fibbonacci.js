//using recurssion

/* function fibbo(n){
    if(n==0 || n==1) return n;
     return fibbo(n-1)+fibbo(n-2);
   
}
fibbo(7) */

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
let nTerms = 5;

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}