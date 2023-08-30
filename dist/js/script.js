
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  Плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();//Отмена дефолтного события
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		})
	})
}
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


const burger = document.querySelector('.burger__container');
const burg = document.querySelector('.burg');
burg.addEventListener("click", function () {
	if (burger.classList.contains('aktive')) {
		burger.classList.remove('aktive');
		burger.classList.add('navhiden');
	}
	else {
		burger.classList.add('aktive');
		burger.classList.remove('navhiden');
	}

	//burger.classList.toggle('aktive');
});

