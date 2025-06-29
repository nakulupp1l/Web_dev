// console.log('hello');

// example of synchronous code
// function syn(){
//     console.log('first');
// }
// syn();
// console.log('second');

// example of asynchronous code
// setTimeout(function(){
//     console.log('third');
// });
// function syn(){
//     console.log('first');
// }
// syn();
// console.log('second');

//promises
// let p=new Promise(function(resolve,reject){
//     //phele yeh chlega
//     console.log('promises under');
//     //4.
//     setTimeout(function(){
//         console.log('1');
//     },6000);
//     //3.
//     setTimeout(function(){
//         console.log('2');
//     },3000);

//     // resolve(1122);
//     // reject(new Error('khatam'));
// });
// //2.
// console.log('xx');

// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('1234');
//     },3000);
//     resolve(1);
// });
// p1.then(function(value){
//     console.log('resolve '+value);
// });

// let p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('1234');
//     },3000);
//     reject(new Error('xxx'));
// });
// p2.caught(function(error){
//     console.log('reject '+error);
// });
// p2.then(function(value){
//     console.log('resolve '+value);
// },function(error){
//     console.log('blafbk');
// });

// let p1=new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log('p1 ka set timer executed');},2000);
//     resolve(true);
// });

// let o=p1.then((param)=>{
//     console.log(param);
//     let p2=new Promise(function(resolve,reject){
//         setTimeout(()=>{console.log('p2 ka set timer chala')},10000);
//         resolve('resolve of p2');
//     });
//     return p2;
// });
// o.then((str)=>{ 
//     console.log('abhi p2 ka then '+str);
// });

// //craeting an async function
// async function abcd(){
//     return "kuch bhi";
// }
// //calling an async function
// console.log(abcd());

//another example of async function
// async function utility() {
//     let p1=new Promise(function(resolve,reject){
//         setTimeout(()=>{resolve('p1 ka set timer executed');},2000);
//     });
//     let p2=new Promise(function(resolve,reject){
//         setTimeout(()=>{resolve('p2 ka set timer executed');},3000);
//     });

//     return [await p1,await p2];
// }
// console.log(utility());

//fetch api in get data
// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data=await content.json();
//     console.log(data);
//     console.log(content);
// }
// utility();

//.............
// async function helper(){
//     let options={
//     method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },};
//   let content =await fetch('https://jsonplaceholder.typicode.com/posts',options);
//   let response=content.json();
//   return response;
// }

// async function utility(){
//     let data=await helper();
//     console.log(data);
// }
// utility();

// CLOSURES
function a(){
    let x=10;
    function b(){
        console.log(x);
    }
    return b;
}
let ans=a();
ans();