console.log("Hello, World!");
let a=10;
console.log(a);
a=20;
console.log(a);

var b = 30;
console.log(b);     
var b = 40; 
console.log(b); 

{
    let c = 50;
    console.log(c);
}
// can't access c outside the block
// console.log(c);

{
    var d = 60;
    console.log(d); 
}
console.log(d); 

//constants
const e = 70;
console.log(e);

let x=1;
let y='1';
console.log(x==y);
console.log(x===y);

let age=18;
let status=(age>=18)?'can vote':'cannot vote';
console.log(status);

console.log(false||0);
console.log(false||0||1);
console.log(false||0||1||2);
console.log(true||0||1);

console.log(0&&false);

console.log(false&&2&&1);
console.log(true&&0&&1)
console.log(true&&2&&1)