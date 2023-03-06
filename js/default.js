const button = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav-header');

function resizeUpdate() {
	if (document.body.offsetWidth >= 768) {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
	}
}

function toggleMenu() {
	if (nav.getAttribute('aria-expanded') === 'false') {
		nav.setAttribute('aria-expanded', true);
		nav.classList.add('nav-header-show');
		button.classList.add('nav-header-button-close');
		document.body.style.overflow = 'hidden';
	} else {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
		document.body.style.overflow = 'auto';
	}
}

window.addEventListener('resize', resizeUpdate);
button.addEventListener('click', toggleMenu);