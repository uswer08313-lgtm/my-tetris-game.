const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Scale the canvas for better visibility
context.scale(20, 20);

// Simple test: draw a white square to verify it's working
context.fillStyle = '#FF0D72';
context.fillRect(1, 1, 1, 1);

console.log("Canvas is ready!");
