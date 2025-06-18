//function is a block of code designed to perform a particular
//  task
//function name(){logic here}
//why?
//reusability  non bulkiness   readability
//function declaration
greet('Kyu Chal Rha hai');
//reason is  before execution of the code,
//  the function is hoisted to the top of the code
//process is called hoisting
function greet(name) {
    console.log('Hello ' + name);
}
//invoking a function or calling a function
greet('Nakul');

//function assignment
// greet2('nhi chlega');
//above code will not work because greet2 is not defined yet
//named function assignment
let greet2=function(name){
    console.log('Hello ' + name);
}
greet2('Nakul');
//anonymous function assignment
let greet3=function(){
    console.log('Hello from anonymous function');
}
greet3();

//
console.log('...............................................');
function add(a,b){
    console.log(arguments);
    return console.log(a+b);
}
add(10,20);
add(1);
add();
add(10,20,30); //extra parameters are ignored
//the extra parameter will go to a object called arguments

function sum(){
    let total=0;
    for(let key of arguments){
        total+=key;
    }
    return console.log(total);
}
sum(10,20,30);
sum(10,20,30,40,50);

//rest operator
function sumRest(...args){
    let total =0;
    for(let i of args){
    total+=i;}
    return console.log(total);
}
sumRest(1,2,3,4,5);
console.log('...............................................');
//default parameters
function interset(p,r=1,t=2){
    return console.log((p*r*t)/100);
}
interset(1000,5);
interset(1000,5,3);
interset(1000);
interset(1000,undefined,3); //undefined will take default value of r
console.log('...............................................');
//getter setters
//getter access propertites of an object
//setter change or mutatte properties of an object
let person={
    fname:'Nakul',
    lname:'Uppal',
    get fullName(){
        return `${this.fname} ${this.lname}`;
    },
    set fullName(name){
        if(typeof(name)!== "string"){
            throw new Error("Name must be string");
        }
        let parts=name.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};

// function getFullName(){
//     return `${person.fname} ${person.lname}`;
// }
// console.log(getFullName()); 
console.log(person.fullName); //using getter
person.fullName='kuch bhi'; //using setter
console.log(person.fullName); //using getter
console.log('...............................................');
//error handling
//try catch block
//try block contains code that may throw an error
//catch block contains code that handles the error
//throw keyword is used to throw an error
try{
    person.fullName='Nakul Uppal'; //using setter
    person.fullName=true; 
}
catch(e){
    // alert(e);
}
console.log('...............................................');
//scope written on copy
//sorting
let arr=[1,4,5,7,2,3,6];
arr.sort(
    (a,b)=>b-a
);
console.log(arr);
console.log('...............................................');
//reducing an array
let numbers=[1,2,3,4,5];
let total=0;
for(let i of numbers){
    total+=i;
}
console.log(total);


let total2=numbers.reduce((accumulator,currentValue)=>accumulator*currentValue);
console.log(total2);
