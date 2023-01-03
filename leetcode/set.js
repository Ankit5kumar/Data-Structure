// var myarray = [1,2,3,4,5];
// var adArray = [6,7,5];
// var  myset = new Set([]);
// myset.add([...myarray,...adArray]);
// //  myset.add = [8,9,0];



// console.log(myset);

// var obj = {};
// Object.assign(obj,{a:1,b:2,c:3,d:4},{});
// console.log(obj);
function sum(a,b,...args) {
    let mul = a*b;
    let sum = 0;
    for(const arg of args) {
        console.log(arg)
        sum+=arg;
    }
    console.log(sum)
    return [sum,mul];
}
// var mya = [3,4,1];
// console.log(sum(2,3,4,5));
console.log(sum(2,3,4,7,8,9));