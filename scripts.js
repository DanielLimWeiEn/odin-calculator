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

function clearScreen() {
    displayValues = {first: "", second: "", op: "",};
    displayTop.textContent = "";
    displayBottom.textContent = "";
}

function evaluateCurrent() {
    let first = displayValues.first;
    let second = displayValues.second;
    let op = displayValues.op;

    if (first !== "" && second !== "" && op !== "") {
        let result = operate(parseFloat(first), op, parseFloat(second));
        if (parseInt(second) === 0 && op === "/") {
            result = "Divide by 0"
        }
        clearScreen();
        displayBottom.textContent = result;
        displayValues.first = result;
    }
}

numbers.forEach(numberBtn => {
    numberBtn.addEventListener("click", event => {
        let len = displayBottom.textContent.split("").length;
        if (len < 13) {
           displayBottom.textContent += numberBtn.textContent;
        }

        if (displayValues.op === "") {
            displayValues.first = displayBottom.textContent;
        } else {
            displayValues.second = displayBottom.textContent;
        }
    });
});

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", event => {
        if (displayValues.first !== "") {
            evaluateCurrent();
            displayValues.op = operatorBtn.textContent;

            displayTop.textContent = `${displayValues.first} ${displayValues.op}`;
            displayBottom.textContent = "";  
        }
        
    });
});

clear.addEventListener("click", event => {
    clearScreen();
});

equal.addEventListener("click", event => {
    evaluateCurrent();
});

// 4. Get all the buttons.
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        button.classList.add("numberpadElementClick");
    });

    button.addEventListener("transitionend", event => {
        button.classList.remove("numberpadElementClick");
    });
});