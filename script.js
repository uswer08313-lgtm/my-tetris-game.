const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

// This function creates the matrix (the grid) filled with zeros
function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

// Draw the board (for now, it's just the empty canvas)
function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

const arena = createMatrix(12, 20);

console.table(arena); // You can see the grid structure in your browser's Console
draw();
