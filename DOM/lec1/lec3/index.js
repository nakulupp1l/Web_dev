//writing 100 para
// const t1=performance.now();
// for(let i=1;i<=100;++i){
//     let x=document.createElement('p');
//     x.textContent='Not Optimised '+i;
//     document.body.appendChild(x);
// }
// const t2=performance.now();
// console.log('diff = '+(t2-t1)+' ms');
// let z=document.createElement('p');
// z.textContent='diff = '+(t2-t1)+' ms';
// document.body.appendChild(z);
// //optimised
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;++i){
//     let y=document.createElement('p');
//     y.textContent='Optimised '+i;
//     mydiv.appendChild(y);
// }
// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log('diff = '+(t4-t3)+' ms');
// z=document.createElement('p');
// z.textContent='diff = '+(t4-t3)+' ms';
// document.body.appendChild(z);
// //using document fragment
// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i =1;i<=100;i++){
//     let x=document.createElement('p');
//     x.textContent='fragment '+i;
//     fragment.appendChild(x);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// z=document.createElement('p');
// z.textContent='diff '+(t6-t5)+' ms';
// console.log('diff ='+(t6-t5)+' ms');
// document.body.appendChild(z);

setTimeout(function(){
    console.log('hola');
    alert('hello');
},4000);