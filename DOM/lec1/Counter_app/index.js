const val=document.querySelector('#counter');
// const increment=()=>{
//     let ans=parseInt(val.innerText);
//     ans++;
//     val.innerText=ans;
// };
// const decrement=()=>{
//     let ans=parseInt(val.innerText);
//     ans--;
//     val.innerText=ans;
// };

let content1=document.querySelector('#inc');
let x=content1.addEventListener('click',()=>{
    let ans=parseInt(val.innerText);
    ans++;
    val.innerText=ans;
});
let content2=document.querySelector('#dec');
x=content2.addEventListener('click',()=>{
    let ans=parseInt(val.innerText);
    ans--;
    val.innerText=ans;
});