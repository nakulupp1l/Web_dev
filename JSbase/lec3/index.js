console.log('Lecture 3 begins');
console.log('INBUILT OBJECTS');
console.log('.............................................');
console.log('Math Object');
console.log(Math.random());
console.log('Math.PI:', Math.PI);
console.log(Math.round(Math.random()*10));
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.abs(-99));
console.log('..............................................');
console.log('String Object');
console.log('String  is a pprimitive datad type why u include it in objects');
console.log('because JS has 2 types of strings');
console.log('1. Primitive String');
console.log('2. String Object');
let fn='       Nakul          ';
let ln =new String('Uppal');
console.log(typeof(fn));
console.log(typeof(ln));
console.log('if i use . notations on primitive string it will work JS will internally convert it as object');
fn.trim();
console.log(fn.length);
console.log(fn.includes('ku'));
console.log(fn.startsWith('Na'));
console.log(fn.endsWith('ul'));
console.log(ln.indexOf('p'));
console.log(ln.lastIndexOf('p'));
console.log(ln.replace('pp','aaa'));
console.log(ln);
let msg='this is my first message';
let words=msg.split(' ');
console.log(words);
words=msg.split('s');
console.log(words);
console.log('..............................................');
console.log('Template literals');
msg=`this 
is ' my ${fn.trim()}  / 
 " message`;
console.log(msg);
console.log('Template literals are used to create multi-line strings and allow for string interpolation.');
console.log('..............................................');
console.log('Date and time Object');
let d=new Date();
console.log(d.toString());
console.log(d.toISOString());
d=new Date('February 14 2004 03:50');
console.log(d.toString());
d=new Date(2004,1,14,3);
console.log(d.toString());
console.log(d.getFullYear());
console.log(d.getMonth()); // 0-11  
console.log(d.getDate()); // 1-31
console.log(d.getDay()); // 0-6 sunday is 0
console.log(d.getHours());  
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log('..............................................');
console.log('...............................................');
console.log('ARRAYS');
//creation
let arr=[1,4,5,7];
console.log(arr);
console.log(arr.length);
//insertion
//ending
arr.push(9);
console.log(arr);
//beginning
arr.unshift(2);
console.log(arr);
//anywhere
//splice(index,how  much delete,itemto insert)
arr.splice(2,4,'a','b','c');
console.log(arr);
//searching
console.log('...............................................');
console.log('Searching in arrays');
console.log(arr.indexOf('a'))
console.log(arr.indexOf('z'));
console.log(arr.includes('b'));
console.log(arr.includes('z'));
//if i want to find 'a' from index 3
console.log(arr.indexOf('a',3)); // -1

//now when we work with object 
let courses=[{no:1,name:'Love'},
{no:2,name:'Hate'}, {no:3,name:'Like'}
, {no:4,name:'Dislike'}
];
console.log(courses);
console.log(courses.includes({no:1,name:'Love'})); // false
//because both are pointing to different objects

//so we use call back functions
// a call back function is function passed into another 
// function as an argument which is when invoke inside the 
// outer funtion to invoke some kind of action.
let ff=courses.find(function(course){
    return course.name==='Lovee';
});
console.log(ff);
ff=courses.find(course=>course.name=='Love');
console.log(ff);
//if no parameeter ff=coourses.find(()=>{return true;});
console.log('...............................................');
console.log('removing elements from arrays');
let numbers=[1,2,3,4,5,6,7,8,9];
console.log(numbers);
//removing from end 
numbers.pop();
console.log(numbers);   
//removing from beginning
numbers.shift();    
console.log(numbers);
//removing from anywhere    
numbers.splice(2,3);
console.log(numbers);
console.log('...............................................');
//emotying an array
console.log('Empting an array');
let numbers2=numbers;
numbers=[]; //emptying an array
console.log(numbers);
console.log(numbers2); // still has the old values
numbers=[1,2,3,4,5];
numbers2=numbers;
numbers.length=0; //emptying an array
console.log(numbers);
console.log(numbers2); //emptied
//using splice to empty an array
numbers=[1,2,3,4,5];
numbers2=numbers;
numbers.splice(0,numbers.length);
console.log(numbers);
console.log(numbers2); 
console.log('...............................................');
console.log('combining and slicing arrays');
let first=[1,2,3,4,5,6,7,8,9];
let second=[4,5,6];
let third=first.concat(second);
console.log(third);
third=first.slice(1,4);
console.log(third);
third=first.slice(5);
console.log(third);
console.log('...............................................');
//combining and slicing on objects
let courses1=[{no:1,name:'Love'},
{no:2,name:'Hate'}, {no:3,name:'Like'}];
let courses2=[{no:4,name:'Dislike'},
{no:5,name:'Like'}];
let courses3=courses1.concat(courses2);
console.log(courses3);  
courses3=courses1.slice(1,3);
console.log(courses3);  
console.log('...............................................');
console.log('Spread operator');
 third=[...first,...second];
console.log(third);
console.log('iteration over arrays');
for(let i of third){
    console.log(i);
}
console.log('...............................................'); 
third.forEach(function(x){console.log(x);});
console.log('...............................................');
third.forEach(x=>console.log(x));
console.log('...............................................');
console.log('Joining arrays');
let add=[10,20,30,40,50];
const joined=add.join(','); // joins the array elements into a string with ' - ' as separator
console.log(joined);
console.log('Split the string back into an array');
const splitarr=joined.split(',');
console.log(splitarr);
console.log('...............................................');
console.log('Sorting arrays');
let numbers3=[1,4,2,5,3];
console.log(numbers3);
numbers3.sort();
console.log(numbers3);
//numbers3.reverse();
//console.log(numbers3);
numbers3.sort((a,b)=>b-a);
console.log(numbers3);
console.log('...............................................');
//sorting converts into stri ng and then sorts
//so if we have 11 21 31 38 5 
//answer would be 11 21 31 38 5
//so u can use a callback function to sort
//or u can convert it into integer usinf parseInt
let numbers4=[11,21,31,38,5];   
console.log(numbers4);
numbers4.sort((a,b)=>a-b);  
console.log(numbers4);
console.log('...............................................');
console.log('Filtering arrays');
let numbers5=[1,2,3,4,5,6,7,8,9];
let numbers6=numbers5.filter(
    function(x){
        return x>5;
    }
);
console.log(numbers6);
numbers6=numbers5.filter(x=>x>5);
console.log(numbers6);
console.log('...............................................');
console.log('Mapping arrays');
//mapping each element of an array to a new value
let numbers7=[1,2,3,4,5,6,7,8,9];
let item=numbers7.map(
    function(x){
        return 'student no. '+x;
    }
);
console.log(item);
item=numbers7.map(x=>'student no. '+x);
console.log(item);
//mapping with objects
item=numbers7.map(
    function(x){
        let obj={core:x};
        return obj;
    }
);
console.log(item);
item=numbers7.map(x=>({core:x}));
console.log(item);
console.log('...............................................');
console.log('chaining methods on arrays');
item=numbers7.filter(x=>x>5).map(x=>({core:x}));
console.log(item);