const txts = document.querySelectorAll('.txt')

function animation() {
	let delay = 0.1
	txts.forEach(txt => {
		txt.style.transitionDelay = `${delay}s`
		delay += 0.1
		txt.classList.add('active')
	})
}

window.addEventListener('load', animation)
