

const slider = document.querySelector('#slider');
const sliderItem = Array.from(slider.children);// Превращаем HTML колекцию в массив
let slideinfo = document.querySelector('.slideinfo');
const next = document.querySelector('.next');
const preev = document.querySelector('.preev');
//Перебираем массив слайдов
sliderItem.forEach(function (slide, index) {
	//alert(slide.getAttribute('src'))
	// Скрываем все слайды кроме первого
	if (index !== 0) slide.classList.add('hiden')
	else {
		slideinfo.innerHTML = slide.getAttribute('src');
		slide.setAttribute('data-activ', '');
	}
	// Добавляем атрибут индекс
	slide.dataset.index = index;

	// Событие клика
	// slide.addEventListener('click', function () {

	// 	// Скрываем текущий слайд
	// 	slide.classList.add('hiden')
	// 	slide.removeAttribute('data-activ');
	// 	// Вычесляем индекс следующего слайда
	// 	let nextSlideIndex;
	// 	if (index + 1 === sliderItem.length) nextSlideIndex = 0;
	// 	else nextSlideIndex = index + 1;

	// 	// Находим следующий слайд
	// 	const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`);
	// 	// Показываем следующий слайд
	// 	nextSlide.classList.remove('hiden');
	// 	nextSlide.setAttribute('data-activ', '');
	// 	slideinfo.innerHTML = nextSlide.getAttribute('src');
	// })
})

next.addEventListener('click', function () {
	//next.insertAdjacentHTML('beforebegin', '<img src="img/karusel/img3.jpeg" alt="3">');
	const nextbtn = document.querySelector('[data-activ]');
	let nextSlideIndex;
	const index = +nextbtn.dataset.index;
	if (index + 1 === sliderItem.length) nextSlideIndex = 0;
	else nextSlideIndex = +nextbtn.dataset.index + 1;
	// Находим следующий слайд
	const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`);

	// Скрываем текущий слайд
	nextbtn.classList.add('hiden')
	nextbtn.removeAttribute('data-activ');

	// Показываем следующий слайд
	nextSlide.classList.remove('hiden');
	nextSlide.setAttribute('data-activ', '');
	slideinfo.innerHTML = nextSlide.getAttribute('src');
})

preev.addEventListener('click', function () {
	const preevbtn = document.querySelector('[data-activ]');
	let nextSlideIndex;
	const index = +preevbtn.dataset.index;
	if (index - 1 < 0) nextSlideIndex = +sliderItem.length - 1;
	else nextSlideIndex = +preevbtn.dataset.index - 1;
	// Находим следующий слайд
	const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`);

	// Скрываем текущий слайд
	preevbtn.classList.add('hiden')
	preevbtn.removeAttribute('data-activ');

	// Показываем следующий слайд
	nextSlide.classList.remove('hiden');
	nextSlide.setAttribute('data-activ', '');
	slideinfo.innerHTML = nextSlide.getAttribute('src');
})
