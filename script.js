const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

// Function to draw a matrix at a specific offset (x, y)
function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

// Defining the T-piece shape
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

// Draw the board (background)
function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(matrix, {x: 4, y: 0}); // Draw our piece at position x=4, y=0
}

draw();
