const numberpad = document.querySelector(".numberpad");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < 4; j++) {
        const gridElt = document.createElement("div");
        gridElt.classList.add("numberpadElement");
        gridElt.textContent = `${i}, ${j}`;
        row.appendChild(gridElt);
    }
    numberpad.appendChild(row);
}