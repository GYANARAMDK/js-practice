let form=document.querySelector('#form');
let div=document.querySelector('#div');
let p=document.querySelector('#p');
p.addEventListener('click',()=>{
    alert('para attacked');
},true)
div.addEventListener('click',()=>{
    alert('div attacked');
},false)
form.addEventListener('click',()=>{
    alert('form attacked');
},true)
