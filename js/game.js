import { toMainMenu } from './mainMenu.js'

const mainMenuBtn = document.getElementById('main-menu')
mainMenuBtn.addEventListener('click', toMainMenu)

const restartBtn = document.getElementById('restart')
restartBtn.addEventListener('click', restart)

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = './img/ground.png'

const foodImg = new Image() //deprecated
foodImg.src = './img/food.png'

let box = 32

let score = 0

let food = {
	x: Math.floor(Math.random() * 17 + 1) * box,
	y: Math.floor(Math.random() * 15 + 3) * box
}

let snake = []
snake[0] = {
	x: 9 * box,
	y: 10 * box
}

document.addEventListener('keydown', direction)

let dir;
let tickDir;

function direction(event) {
	if(event.keyCode == 37 && dir != 'right' && tickDir != 'right')
		dir = 'left'
	else if(event.keyCode == 38  && dir != 'down' && tickDir != 'down')
		dir = 'up'
	else if(event.keyCode == 39  && dir != 'left' && tickDir != 'left')
		dir = 'right'
	else if(event.keyCode == 40  && dir != 'up' && tickDir != 'up')
		dir = 'down'
}

function eatTail(head, body) {
	for (let i in body) {
		if( 
			head.x == body[i].x &&
			head.y == body[i].y
			) finishGame()
	}
}

function finishGame() {
	clearInterval(game)
	restartBtn.classList.remove('disabled')
	mainMenuBtn.classList.remove('disabled')
}

export function restart() {
	restartBtn.classList.add('disabled')
	mainMenuBtn.classList.add('disabled')

	score = 0

	food = {
		x: Math.floor(Math.random() * 17 + 1) * box,
		y: Math.floor(Math.random() * 15 + 3) * box
	}

	snake = []
	snake[0] = {
		x: 9 * box,
		y: 10 * box
	}

	dir = null
	tickDir = null

	game = setInterval(drawGame, 100)
}

function drawGame() {
	ctx.drawImage(ground, 0, 0)

	// ctx.drawImage(foodImg, food.x, food.y, box, box)
	ctx.fillStyle = 'red'
	ctx.fillRect(food.x, food.y, box, box)

	for (let i in snake) {
		ctx.fillStyle = i == 0 ? 'yellow' : 'green'
		ctx.fillRect(snake[i].x, snake[i].y, box, box)
	}

	ctx.fillStyle = 'white'
	ctx.font = '35px "Shovel Knight (extended)"'
	ctx.fillText(score, box * 2.5, box * 1.6)

	let snakeX = snake[0].x
	let snakeY = snake[0].y

	if(snakeX == food.x && snakeY == food.y) {
		score++

		food = {
			x: Math.floor(Math.random() * 17 + 1) * box,
			y: Math.floor(Math.random() * 15 + 3) * box
		}
	} else snake.pop()

	if( 
		snakeX < box || 
		snakeX > box*17 ||
		snakeY < box*3 || 
		snakeY > box*17
		) finishGame();

		if(dir == 'left') snakeX -= box;
	if(dir == 'right') snakeX += box;
	if(dir == 'up') snakeY -= box;
	if(dir == 'down') snakeY += box;

	tickDir = dir

	let newHead = {
		x: snakeX,
		y: snakeY
	}

	eatTail(newHead, snake)

	snake.unshift(newHead)
}

let game;