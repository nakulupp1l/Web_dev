let rectangle={
    length: 5,
    breadth: 3,
    draw:function(){
        console.log('draw rectangle');
    },
    area:function(){
        console.log('Area :'+rectangle.length*rectangle.breadth);
    }
}; 

rectangle.draw();
rectangle.area();


// function taat create objects
function createRectangle(x,y){
    return rectangle={
        l:x,
        b:y,
        draw:function()
        {
            console.log('Rectangle length: ' + this.l + ', breadth: ' + this.b);    
        }
    };
}

let obj1=createRectangle(10,20);
obj1.draw();

function Rectangle(){
    this.l=1,
    this.b=2,
    this.draw=function(){
        console.log('Ractangle length: ');    
    }
}

let a=new Rectangle();
console.log(a);
a.draw();


// dynamic nature of objects
a.color='yellow';
console.log(a);
delete a.color;
console.log(a);

// constructor property
console.log('............................................');
console.log(a.constructor);
console.log('............................................');
console.log(obj1.constructor);
console.log('............................................');
console.log(Rectangle.constructor);

//internal creation of objects
console.log('............................................');
let abc=new Function('l','b',`
    this.length=l,
    this.breadth=b,
    this.draw=function(){
        console.log('draw rectangle');
    }`)
console.log(abc.constructor);

//difference in primitive and reference types
console.log('............................................');
console.log('Primitive types :copy banti hai');
let x=10;
let y=x;
x++;
console.log(x);
console.log(y);
console.log('Reference types : same address pe point karte hai'); 
let cc={value:10};
let dd=cc;
cc.value++;
console.log(cc.value);
console.log(dd.value);

//pass by value and pass by reference
console.log('............................................');    
let s=10;
function increment(n){
    n++;
    console.log('Inside function : ' + n);
}
increment(s);
console.log('Outside function : ' + s);

let se={value:10};
function incrementObject(obj){
    obj.value++;
    console.log('Inside function : ' + obj.value);
}
incrementObject(se);
console.log('Outside function : ' + se.value);


//for of and for in loop
console.log('............................................');
console.log('for in loop for accessing key value pair of objects');
let person={
    name:'John',
    age:30,
    city:'New York'
};
for(let key in person){
    console.log(key + ': ' + person[key]);
}
console.log('.............................................');
console.log('for of loop for acceisng values of iterables like array and maps');
for(let key of Object.keys(person)){
    console.log(key + ': ' + person[key]);
}
for(let key of Object.entries(person)){
    console.log(key[0] + ': ' + key[1]);
}

//check existence of property in object
console.log('............................................');    
if('color' in a){
    console.log('color'+'exists in a');
}
else{
    console.log('color'+' does not exist in a');
}

//object cloning
console.log('............................................');
let src={
    a:10,b:20,c:30
};
// using iteration
let xx={};
for(let key in src){
    xx[key]=src[key];
}
//using assign
let yy=Object.assign({},src);
//using spread operator
let zz={...src};
src.a=100;
console.log(xx);
console.log(yy);
console.log(zz);