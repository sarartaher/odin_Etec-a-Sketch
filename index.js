let ctn = document.querySelector(".container");
let btn = document.querySelector(".reset");

let defaultSize = 16;

// Create the grid
function createGrid(size) {
    ctn.innerHTML = "";

    let squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";

        // Random color and darkening effect
        let opacity = 0;
        div.addEventListener("mouseover", function() {
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            opacity += 0.1;
            if (opacity > 1) {
                opacity = 1;
            }
            div.style.backgroundColor = "rgba(" + randomR + ", " + randomG + ", " + randomB + ", " + opacity + ")";
        });

        ctn.appendChild(div);
    }
}

// Ask for new grid size
function newGrid() {
    let userInput = prompt("Enter number of squares per side (1 - 100):");
    let newSize = parseInt(userInput);

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
    }
}

// Load default grid on page start
createGrid(defaultSize);

// Add event to reset button
btn.addEventListener("click", function() {
    newGrid();
});
