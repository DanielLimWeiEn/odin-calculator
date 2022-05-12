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
        if (len <= 25) {
           displayBottom.textContent += numberBtn.textContent;
        }
    });
});