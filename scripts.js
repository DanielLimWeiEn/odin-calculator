// 1. Basic Mathematical Functions.

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

// 2. Operate Function.

function operate(first, operator, second) {
    if (operator === "+") {
        return add(first, second);
    } else if (operator === "-") {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else if (operator === "/") {
        return divide(first, second);
    } else {
        return;
    }
}


// 3. Make the buttons display the correct things upon clicking on them.
let displayValues = {
    first: "",
    second: "",
    op: "",
};

const displayTop = document.querySelector(".displaytop");
const displayBottom = document.querySelector(".displaybottom");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

numbers.forEach(numberBtn => {
    numberBtn.addEventListener("click", event => {
        let len = displayBottom.textContent.split("").length;
        console.log(len);
        if (len < 13) {
           displayBottom.textContent += numberBtn.textContent;
        }

        if (displayValues.op === "") {
            displayValues.first = displayBottom.textContent;
        } else {
            displayValues.second = displayBottom.textContent;
            console.log(displayValues);
        }
    });
});

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", event => {
        displayValues.op = operatorBtn.textContent;

        displayTop.textContent = `${displayValues.first} ${displayValues.op}`;
        displayBottom.textContent = "";
    });
});

clear.addEventListener("click", event => {
    displayValues = {first: "", second: "", op: "",};
    displayTop.textContent = "";
    displayBottom.textContent = "";
});

equal.addEventListener("click", event => {
    
});