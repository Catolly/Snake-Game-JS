function Rainbow(size=200) {
	let rainbow = new Array(size)

	for (let i=0; i<size; i++) {
	  let red   = sin_to_hex(i, 0 * Math.PI * 2/3, size) // 0   deg
	  let blue  = sin_to_hex(i, 1 * Math.PI * 2/3, size) // 120 deg
	  let green = sin_to_hex(i, 2 * Math.PI * 2/3, size) // 240 deg

	  rainbow[i] = "#"+ red + green + blue
	}

	function sin_to_hex(i, phase, size) {
		let sin = Math.sin(Math.PI / size * 2 * i + phase)
		let int = Math.floor(sin * 127) + 128
		let hex = int.toString(16)

		return hex.length === 1 ? "0"+hex : hex
	}

	return rainbow
}

function setRainbow(node, prop, size=200, duration=6.0) {
	let rainbow = Rainbow(size)
	let colorIndex = 0

	setInterval(() => {
		let color = rainbow[colorIndex]
		node.style[prop] = color
		colorIndex == rainbow.length ? colorIndex = 0 : colorIndex++
	}, duration/size * 1000)
}

export default setRainbow