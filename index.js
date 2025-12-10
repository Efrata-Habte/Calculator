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

three.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=three.textContent;
        display.value+=three.textContent;
    }
    else{
        secondNum+=three.textContent;
        display.value+=three.textContent;
    }
})

four.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=four.textContent;
        display.value+=four.textContent;
    }
    else{
        secondNum+=four.textContent;
        display.value+=four.textContent;
    }
})

five.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=five.textContent;
        display.value+=five.textContent;
    }
    else{
        secondNum+=five.textContent;
        display.value+=five.textContent;
    }
})

six.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=six.textContent;
        display.value+=six.textContent;
    }
    else{
        secondNum+=six.textContent;
        display.value+=six.textContent;
    }
})

seven.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=seven.textContent;
        display.value+=seven.textContent;
    }
    else{
        secondNum+=seven.textContent;
        display.value+=seven.textContent;
    }
})

eight.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=eight.textContent;
        display.value+=eight.textContent;
    }
    else{
        secondNum+=eight.textContent;
        display.value+=eight.textContent;
    }
})

nine.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=nine.textContent;
        display.value+=nine.textContent;
    }
    else{
        secondNum+=nine.textContent;
        display.value+=nine.textContent;
    }
})

zero.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=zero.textContent;
        display.value+=zero.textContent;
    }
    else{
        secondNum+=zero.textContent;
        display.value+=zero.textContent;
    }
})

dot.addEventListener('click',()=>{
    if (operator===""){
        firstNum+=dot.textContent;
        display.value+=dot.textContent;
    }
    else{
        secondNum+=dot.textContent;
        display.value+=dot.textContent;
    }
})

plus.addEventListener('click',()=>{
    operator=plus.textContent;
    display.value+=operator;
    
})

minus.addEventListener('click',()=>{
    operator=minus.textContent;
    display.value+=operator;
    
})

multiply.addEventListener('click',()=>{
    operator=multiply.textContent;
    display.value+=operator;
    
})

divide.addEventListener('click',()=>{
    operator=divide.textContent;
    display.value+=operator;
    
})

modulo.addEventListener('click',()=>{
    operator=modulo.textContent;
    display.value+=operator;
    
})

equal.addEventListener('click',()=>{
    if (operator==="+"){
        result= Number(firstNum) + Number(secondNum)
    }
    else if(operator==="-"){
        result= Number(firstNum) - Number(secondNum)
    }
    else if(operator==="*"){
        result= Number(firstNum) * Number(secondNum)
    }
    else if(operator==="/"){
        result= Number(firstNum)/Number(secondNum)
    } 
    else if(operator==="%"){
        result= Number(firstNum) % Number(secondNum)
    }

    display.value=result;
    firstNum=result;
    operator="";
})

clear.addEventListener('click',()=>{
    display.value="";
    firstNum="";
    secondNum="";
    operator="";
    result="";
})



