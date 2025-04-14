const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const popSound = document.getElementById('pop-sound');

let atom = {
x: 100,
y: 100,
size: 20,
dx: 2, // velocidade no eixo X
dy: 1.5 // velocidade no eixo Y
};

let score = 0;

canvas.addEventListener('click', (e) => {
const rect = canvas.getBoundingClientRect();
const mouseX = e.clientX - rect.left;
const mouseY = e.clientY - rect.top;

const dist = Math.hypot(mouseX - atom.x, mouseY - atom.y);
if (dist < atom.size) {
score++;
popSound.play();

```
// Reposiciona o átomo em local aleatório
atom.x = Math.random() * (canvas.width - 40) + 20;
atom.y = Math.random() * (canvas.height - 40) + 20;

// Muda a direção e velocidade pra parecer que ele "fugiu"
atom.dx = (Math.random() - 0.5) * 5;
atom.dy = (Math.random() - 0.5) * 5;

```

}
});

function update() {
atom.x += atom.dx;
atom.y += atom.dy;

// Rebater nas bordas
if (atom.x < atom.size || atom.x > canvas.width - atom.size) {
atom.dx *= -1;
}
if (atom.y < atom.size || atom.y > canvas.height - atom.size) {
atom.dy *= -1;
}
}

function drawGame() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Átomo
ctx.beginPath();
ctx.arc(atom.x, atom.y, atom.size, 0, Math.PI * 2);
ctx.fillStyle = '#d48cac';
ctx.fill();

// Pontuação
ctx.fillStyle = '#666';
ctx.font = '16px Arial';
ctx.fillText(`Átomos coletados: ${score}`, 10, 20);
}

function gameLoop() {
update();
drawGame();
requestAnimationFrame(gameLoop);
}

gameLoop(); // Inicia o joguinho