let A =document.querySelector('#start');
let countvalue =document.querySelector('#count');
let reset=document.querySelector('#end');
console.log(reset);
console.log(A);
console.log(countvalue);
let count=1;

function lovley(){
    countvalue.value=0;
    
}

A.addEventListener('click',function(){
    console.log('button clicked');
    countvalue.value=parseFloat(countvalue.value)+count;
});

reset.addEventListener('click',lovley);

let inputvalue=document.querySelector('#input');
inputvalue.addEventListener('change',function(){
    console.log(inputvalue.value);
})