// let myMap = new Map([['name', 'value'],['surname','doe']]);

// console.log(myMap);
// let obj = {};
// let a ={"test":"test"};
// let b ={"test1":"test1"};
// obj[a]='a';
// console.log(obj);
// obj[b]='b';
// console.log(obj);

// let a = {};
// let b = {};
// let mymap = new Map([{},'a'],[{},'b']);
// mymap.set({},'c');
// console.log(mymap);



// let myMap = new Map([['name','John'], ['surname','Doe']]);

// console.log(myMap);

// let myObj = {};
// let a = {"test":"test"};
// let b = {"test1":"test1"};

// myObj[a]= 'a';
// console.log(myObj)
// myObj[b]= 'b';
// console.log(myObj)


function ConvertReduce(arr)
{
    let temp = [...arr];
    // sort the array
    temp.sort((a,b)=>a-b);
    // create empty array
    let convertmap = new Map();
    let counter = 0;
    //traverse through map and store it 
    for(let i = 0;i<arr.length;i++){
        convertmap.set(temp[i],counter++);
    }

    // let
    for(let i = 0;i<arr.length;i++){
        arr[i] = convertmap.get(arr[i]);
    }

}
let arr = [1,2,5,10,3,4];
ConvertReduce(arr);
console.log(arr);

