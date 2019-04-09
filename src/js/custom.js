document.querySelector('.status').innerHTML = 'js - ok'

const switcher = document.querySelector('#checkbox'),
	more = document.querySelector('.more'),
	modal = document.querySelector('.modal'),
	videos = document.querySelectorAll('.videos__item')

let player


function bindSlideToggle(trigger,dad,child,classStyle){
	let btn = {
		'element':document.querySelector(trigger),
		'active':false
	}
	const box = document.querySelector(dad),
		content = document.querySelector(child)

	btn.element.addEventListener('click', () => {
		if(btn.active){
			btn.active = false
			box.style.height = '0'
			box.classList.remove(classStyle)
		} else {
			btn.active = true
			box.style.height = 'auto'
			box.classList.add(classStyle)
		}
	})
}

bindSlideToggle('.hamburger','[data-slide="nav"]','.header__menu','slide-active')