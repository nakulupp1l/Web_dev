// document.addEventListener('click',function(){
//     alert('Clicked on the document');
// });

// let content=document.querySelector('h1');
// content.addEventListener('click',function(){
//     content.style.cssText='color: red; background-color: yellow;';
// });

// document.removeEventListener('click',abc);
// function abc(){
//     alert('Clicked on the document');
// }
// document.addEventListener('click',abc);

// let content=document.querySelector('#x');
// content.addEventListener('click',function(event){
//     console.log(event);
// });


// let links=document.querySelectorAll('a');
// let link=links[1];
// link.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Pagal banaya');
// })

//..............................................................
//is mein 100 event listeners add ho rahe hain
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;++i){
//     let p=document.createElement('p');
//     p.textContent='This is paragraph number '+i;

//     p.addEventListener('click',function(){
//         console.log('Paragraph clicked');
//     });

//     mydiv.appendChild(p);
// }
// document.body.appendChild(mydiv);

//is mein 1 hi event listener add ho raha hai
// let mydiv=document.createElement('div');
// function abc(){
//         console.log('Paragraph clicked');
//     }
// for(let i=1;i<=100;++i){
//     let p=document.createElement('p');
//     p.textContent='This is paragraph number '+i;

//     p.addEventListener('click',abc);

//     mydiv.appendChild(p);
// }
// document.body.appendChild(mydiv);

//abh same cheez ko div ke uper krke dekho toh
// let mydiv=document.createElement('div');
// function abc(){
//         console.log('Paragraph clicked');
//     }
// for(let i=1;i<=100;++i){
//     let p=document.createElement('p');
//     p.textContent='This is paragraph number '+i;
//     mydiv.appendChild(p);
// }
// mydiv.addEventListener('click',abc);
// document.body.appendChild(mydiv);
//here we loose the individuality of the paragraphs
//so now phases of event bubbling and capturing come into play
// let mydiv=document.createElement('div');
// function abc(){
//         console.log(event.target.textContent+' clicked');
//     }
// for(let i=1;i<=100;++i){
//     let p=document.createElement('p');
//     p.textContent='This is paragraph number '+i;
//     mydiv.appendChild(p);
// }
// mydiv.addEventListener('click',abc);
// document.body.appendChild(mydiv);

let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    //console.log(event.target.textContent);
    if(event.target.nodeName==='SPAN'){
        console.log('Span clicked');
    }
});