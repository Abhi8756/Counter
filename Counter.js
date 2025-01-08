const dec=document.querySelector('#decrease');
const res=document.querySelector('#reset');
const inc=document.querySelector('#increase');
dec.addEventListener('click',()=>{
    document.querySelector('#value').textContent=parseInt(document.querySelector('#value').textContent)-1;
})
res.addEventListener('click',()=>{
    document.querySelector('#value').textContent=0;
})
inc.addEventListener('click',()=>{
    document.querySelector('#value').textContent=parseInt(document.querySelector('#value').textContent)+1;
})

