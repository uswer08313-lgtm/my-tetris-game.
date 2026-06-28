const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

// --- Game Logic ---
function createPiece(type) {
    if (type === 'I') return [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]];
    if (type === 'L') return [[0, 2, 0], [0, 2, 0], [0, 2, 2]];
    if (type === 'J') return [[0, 3, 0], [0, 3, 0], [3, 3, 0]];
    if (type === 'O') return [[4, 4], [4, 4]];
    if (type === 'Z') return [[5, 5, 0], [0, 5, 5], [0, 0, 0]];
    if (type === 'S') return [[0, 6, 6], [6, 6, 0], [0, 0, 0]];
    if (type === 'T') return [[0, 7, 0], [7, 7, 7], [0, 0, 0]];
}

function playerReset() {
    const pieces = 'ILJOSZT';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = 5;
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0)); // Game Over: Reset
    }
}

// ... [Keep collide, merge, rotate, and drawMatrix functions from previous step] ...

let dropInterval = 1000;
let isPaused = false;

function update(time = 0) {
    if (!isPaused) {
        const deltaTime = time - lastTime;
        lastTime = time;
        dropCounter += deltaTime;
        if (dropCounter > dropInterval) {
            playerDrop();
            // Speed Increase: every time a line is cleared, dropInterval could be reduced
        }
    }
    draw();
    requestAnimationFrame(update);
}

// Controls
document.addEventListener('keydown', event => {
    if (event.keyCode === 37) playerMove(-1);
    else if (event.keyCode === 39) playerMove(1);
    else if (event.keyCode === 40) playerDrop();
    else if (event.keyCode === 81) playerRotate(-1); // Rotate Left
    else if (event.keyCode === 87) playerRotate(1);  // Rotate Right
    else if (event.keyCode === 80) isPaused = !isPaused; // 'P' to Pause
});
