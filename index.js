const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const dot = document.querySelector("#dot");
const del = document.querySelector("#del");
const display = document.querySelector("#result");

let expression = ""; // Store full expression as string

function appendNumber(num) {
    expression += num;
    display.value = expression;
}

function appendOperator(oper) {
    if ("+-*/%".includes(expression.at(-1))) {
        expression=expression.slice(0,-1);
    }

    expression += oper;
    display.value = expression;
}

numberButton.forEach(btn => {
    btn.addEventListener("click", () => {
        appendNumber(btn.textContent);
    });
});

operatorButton.forEach(op => {
    op.addEventListener("click", () => {
        appendOperator(op.textContent);
    });
});

dot.addEventListener("click", () => {
    if (expression.at(-1) === ".") return; 
    expression += ".";
    display.value = expression;
});

equal.addEventListener("click", () => {
    try {
        let result = eval(expression); 
        display.value = result;
        expression = String(result);
    } catch (err) {
        display.value = "Error";
        expression = "";
    }
});

clear.addEventListener("click", () => {
    expression = "";
    display.value = "";
});

del.addEventListener("click", () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});
