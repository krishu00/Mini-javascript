const ball = document.getElementById('ball');
const ballRadius = 20;
const speed = 5;

let ballX = Math.random() * (window.innerWidth - ballRadius * 2) + ballRadius;
let ballY = Math.random() * (window.innerHeight - ballRadius * 2) + ballRadius;

ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (key === 'w' && ballY > ballRadius) {
        ballY -= speed;
    } else if (key === 's' && ballY < window.innerHeight - ballRadius) {
        ballY += speed;
    } else if (key === 'a' && ballX > ballRadius) {
        ballX -= speed;
    } else if (key === 'd' && ballX < window.innerWidth - ballRadius) {
        ballX += speed;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
});
