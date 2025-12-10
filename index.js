const one= document.querySelector('#one');
const two= document.querySelector('#two');
const three= document.querySelector('#three');
const four= document.querySelector('#four');
const five= document.querySelector('#five');
const six= document.querySelector('#six');
const seven= document.querySelector('#seven');
const eight= document.querySelector('#eight');
const nine= document.querySelector('#nine');
const zero= document.querySelector('#zero');
const plus= document.querySelector('#plus');
const minus= document.querySelector('#minus');
const multiply= document.querySelector('#multiply');
const divide= document.querySelector('#divide');
const equal= document.querySelector('#equal');
const clear= document.querySelector('#clear');
const dot= document.querySelector('#dot');
const modulo= document.querySelector('#modulo');
const display=document.querySelector('#result');

let firstNum=''
let secondNum=''
let operator=''
let result=''

one.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=one.textContent;
        display.value+=one.textContent;
    }
    else{
        secondNum+=one.textContent;
        display.value+=secondNum;
    }
})

two.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=two.textContent;
        display.value+=two.textContent;
    }
    else{
        secondNum+=two.textContent;
        display.value+=two.textContent;
    }
})

plus.addEventListener('click',()=>{
    operator=plus.textContent;
    display.value+=operator;
    
})

equal.addEventListener('click',()=>{
    if (operator==="+"){
        result= Number(firstNum) + Number(secondNum)
    }
    display.value=result;
})



