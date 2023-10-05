const gridContainer = document.querySelector('.grid-container');
let isDrawing = false;

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}

// Add event listeners for drawing functionality
gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
});

gridContainer.addEventListener('mouseup', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// Add a hover effect for drawing (mouseover)
gridContainer.addEventListener('mouseover', (event) => {
    if (isDrawing) {
        const square = event.target;
        if (square.classList.contains('grid-square')) {
            square.style.backgroundColor = 'black';
        }
    }
});

// Function to create a new grid based on user input
function createNewGrid() {
    // Prompt the user for the number of squares per side
    let gridSize = prompt("Enter the number of squares per side (max 100):");
    
    // Convert the input to a number and ensure it's within the range [1, 100]
    gridSize = parseInt(gridSize);
    gridSize = Math.max(1, Math.min(100, gridSize));

    // Clear the existing grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Create a new grid with the specified number of squares per side
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
    }
}

// Add a click event listener to the reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', createNewGrid);