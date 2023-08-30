

const slider = document.querySelector('#slider')

const sliderItem = Array.from(slider.children);// Превращаем HTML колекцию в массив

//Перебираем массив слайдов
sliderItem.forEach(function (slide, index) {

	// Скрываем все слайды кроме первого
	if (index !== 0) slide.classList.add('hiden')

	// Добавляем атрибут индекс
	slide.dataset.index = index;
	slide.addEventListener('click', function () {
		// Скрываем текущий слайд
		slide.classList.add('hiden')

		// Вычесляем индекс следующего слайда
		let nextSlideIndex;
		if (index + 1 === sliderItem.length) nextSlideIndex = 0;
		else nextSlideIndex = index + 1;

		// Находим следующий слайд
		const nextSlide = document.querySelector(`[data-index = "${nextSlideIndex}"]`)
		// Показываем следующий слайд
		nextSlide.classList.remove('hiden')
	})
})
