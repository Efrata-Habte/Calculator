const numberButton= document.querySelectorAll(".number")
const operatorButton= document.querySelectorAll(".operator")

const equal= document.querySelector('#equal');
const clear= document.querySelector('#clear');
const dot= document.querySelector('#dot');
const display=document.querySelector('#result');

let firstNum=''
let secondNum=''
let operator=''
let result=''

function appendNumber(num){
    if (operator===""){
        firstNum+=num;
        display.value+=num;
    }
    else{
        secondNum+=num;
        display.value+=num;
    }
}

function appendOperator(oper){
    operator=oper;
    display.value+=oper;
}

numberButton.forEach(btn=>{
    btn.addEventListener('click',()=>{
        appendNumber(btn.textContent);
    })
})

operatorButton.forEach(op=>{
    op.addEventListener('click',()=>{
        appendOperator(op.textContent);
    })
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
    firstNum=""
    secondNum=""
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

del.addEventListener('click',()=>{
    display.value=display.value.slice(0,-1);
    if (operator===""){
        firstNum=firstNum.slice(0,-1);
    }
    else{
        secondNum=secondNum.slice(0,-1);
    }
})


