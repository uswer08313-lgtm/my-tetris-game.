const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

// The Piece Definition
const player = {
    pos: {x: 4, y: 0},
    matrix: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
};

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the player piece at their current position
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + player.pos.x, y + player.pos.y, 1, 1);
            }
        });
    });
}

// The automatic drop logic
let dropCounter = 0;
let dropInterval = 1000; // 1 second
let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        player.pos.y++;
        dropCounter = 0;
    }

    draw();
    requestAnimationFrame(update);
}

update();
