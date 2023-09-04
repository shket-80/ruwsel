
//! Подсказки
//minimg.insertAdjacentHTML('afterend', '<img src="img/karusel/img2.jpeg" alt="1">');
//alert(slide.getAttribute('src'))

const slider = document.querySelector('#slider');//див со слайдами
const sliderItem = Array.from(slider.children);// Превращаем HTML колекцию в массив
let slideinfo = document.querySelector('.slideinfo');//Текс слайда
const next = document.querySelector('.next');// Кнопка вперёд
const preev = document.querySelector('.preev');// Кнопка назад
const minimg = document.querySelector('#minimg');//<span id="minimg"></span> для создания минислайдов

//Перебираем массив слайдов
sliderItem.forEach(function (slide, index) {
	const srcslide = slide.getAttribute('src');//Инфо слайда
	// Скрываем все слайды кроме первого
	if (index !== 0) {
		slide.classList.add('hiden');
		// Создание HTML минислайда
		minimg.insertAdjacentHTML('beforebegin',
			`<img src="${srcslide}" data-index="${index}" class="minimage"  alt="1">`);
	}
	else {
		// Создание HTML минислайда
		minimg.insertAdjacentHTML('beforebegin',
			`<img src="${srcslide}" data-index="${index}"  class="minimage activimg"  alt="1">`);

		slideinfo.innerHTML = slide.getAttribute('src');
		slide.setAttribute('data-activ', '');// Добавляем атрибут
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

const minslide = document.querySelectorAll('.minimage');// Минислайд

minimg.remove();// Удаляем временно созданный  HTML <span id="minimg"></span>
next.addEventListener('click', function () {
	const nextbtn = document.querySelector('[data-activ]');
	const miniimg = document.querySelector('.activimg');
	let nextSlideIndex;
	const index = +nextbtn.dataset.index;
	if (index + 1 === sliderItem.length) nextSlideIndex = 0;
	else nextSlideIndex = +nextbtn.dataset.index + 1;
	// Находим следующий слайд
	const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`);

	// Скрываем текущий слайд
	nextbtn.classList.add('hiden')
	nextbtn.removeAttribute('data-activ');
	miniimg.classList.remove('activimg');

	// Показываем следующий слайд
	let nextminimg = document.querySelector(`.minimage[data-index = "${nextSlideIndex}"]`);
	nextminimg.classList.add('activimg');
	nextSlide.classList.remove('hiden');
	nextSlide.setAttribute('data-activ', '');
	slideinfo.innerHTML = nextSlide.getAttribute('src');
})

preev.addEventListener('click', function () {
	const preevbtn = document.querySelector('[data-activ]');
	const miniimg = document.querySelector('.activimg');
	let nextSlideIndex;
	const index = +preevbtn.dataset.index;
	if (index - 1 < 0) nextSlideIndex = +sliderItem.length - 1;
	else nextSlideIndex = +preevbtn.dataset.index - 1;
	// Находим следующий слайд
	const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`);

	// Скрываем текущий слайд
	preevbtn.classList.add('hiden')
	preevbtn.removeAttribute('data-activ');
	miniimg.classList.remove('activimg');
	// Показываем следующий слайд
	let nextminimg = document.querySelector(`.minimage[data-index = "${nextSlideIndex}"]`);
	nextminimg.classList.add('activimg');
	nextSlide.classList.remove('hiden');
	nextSlide.setAttribute('data-activ', '');
	slideinfo.innerHTML = nextSlide.getAttribute('src');
})

minslide.forEach(f => f.addEventListener('click', function () {
	const miniimg = document.querySelector('.activimg');
	const activSlide = document.querySelector('[data-activ]');
	// Скрываем текущий слайд
	activSlide.classList.add('hiden')
	activSlide.removeAttribute('data-activ');
	miniimg.classList.remove('activimg');

	const minindex = +f.getAttribute('data-index');

	let SlideIndex;
	const index = +minindex;
	// Находим следующий слайд
	const slide = document.querySelector(`[data-index = "${index}"]`);

	// Показываем следующий слайд

	f.classList.add('activimg');
	slide.classList.remove('hiden');
	slide.setAttribute('data-activ', '');
	slideinfo.innerHTML = slide.getAttribute('src');
}));
