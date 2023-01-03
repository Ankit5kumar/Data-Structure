let meetups = [
    {name: 'javascript',isactive: true,members:700},
    {name: 'Angular',isactive: true,members:900},
    {name: 'Node',isactive: false,members:600},
    {name: 'React',isactive: true,members:500},
];

// This where we can use the Hof with inbuilt function ;
let sumPchain = meetups.filter((m=>{ return m.name}));
console.log(sumPchain);
let mapped=meetups.map((n)=>{
    return n.members-(0.1*n.members); 
})
console.log(mapped);
let reduce= meetups.reduce((acc,a)=>{ return acc+a;},0)
console.log(reduce);




