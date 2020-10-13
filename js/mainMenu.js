import setRainbow from './rainbow.js'
import { restart } from './game.js'

let menuTitle = document.getElementById('game-title'),
	menuBtns = Array.from(
		document.getElementsByClassName('btn')
		),
	newGameBtn = menuBtns[0],
	leaderboard = menuBtns[1],
	gameNavWrap = document.getElementById('game-nav-wrap'),
	gameWrap = document.getElementById('game-wrap')

/*Setting text and border rainbow color*/
setRainbow(menuTitle, 'color')
for (let btn of menuBtns)
	setRainbow(btn, 'borderColor')


// /*Init btns onclick funcs*/

// // New game
newGameBtn.addEventListener('click', newGame) // Create and init mapsPage
// // To leaderboard page
// leaderboard.addEventListener('click', to(leaderboardPage)) // Create and init leaderboardPage

function hide(node, transition=0.5) {
	node.style.transition = `${transition}s`
	node.classList.add('hidden')
	setTimeout(() => node.classList.add('disabled'), 500)
}


function open(node, transition=0.5) {
	node.style.transition = `${transition}s`
	setTimeout(() => node.classList.remove('disabled'), 500)
	node.classList.remove('hidden')
}

// function to(destPage) {
// 	hide(currentPage)
// 	open(destPage)
// }

function newGame() {
	hide(gameNavWrap)
	open(gameWrap)
	restart()
}

export function toMainMenu() {
	hide(gameWrap)
	open(gameNavWrap)
}

