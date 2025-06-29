const val=document.querySelector('#counter');
const increment=()=>{
    let ans=parseInt(val.innerText);
    ans++;
    val.innerText=ans;
};
const decrement=()=>{
    let ans=parseInt(val.innerText);
    ans--;
    val.innerText=ans;
};