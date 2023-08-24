
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


const burger = document.querySelector('.burger');
const burg = document.querySelector('.burg');
burg.addEventListener("click", function () {
	burger.classList.toggle('aktive');
	//burger.classList.toggle('aktive');
});

