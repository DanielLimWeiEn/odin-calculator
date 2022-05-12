const numberpad = document.querySelector(".numberpad");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < 4; j++) {
        const gridElt = document.createElement("button");
        gridElt.classList.add("numberpadElement");
        if (i === 0) {
            if (j === 0) {
                gridElt.textContent = 7;
            } else if (j === 1) {
                gridElt.textContent = 4;
            } else if (j === 2) {
                gridElt.textContent = 1;
            } else {
                gridElt.textContent = "C";
            }
        } else if (i === 1) {
            if (j === 0) {
                gridElt.textContent = 8;
            } else if (j === 1) {
                gridElt.textContent = 5;
            } else if (j === 2) {
                gridElt.textContent = 2;
            } else {
                gridElt.textContent = 0;
            }
        } else if (i === 2) {
            if (j === 0) {
                gridElt.textContent = 9;
            } else if (j === 1) {
                gridElt.textContent = 6;
            } else if (j === 2) {
                gridElt.textContent = 3;
            } else {
                gridElt.textContent = "=";
            }
        } else {
            if (j === 0) {
                gridElt.textContent = "+";
            } else if (j === 1) {
                gridElt.textContent = "-";
            } else if (j === 2) {
                gridElt.textContent = "*";
            } else {
                gridElt.textContent = "/";
            }
        }
        row.appendChild(gridElt);
    }
    numberpad.appendChild(row);
}