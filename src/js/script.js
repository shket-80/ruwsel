const result = document.querySelector('.table__info');//Поле с вычеслениями
const btn = document.querySelectorAll('.group__btn');//Кнопки 

let a = ''; let b = ''; let c = '';
let action = '';
let clickAction = false;

/*События кнопок  */
btn.forEach(f => f.addEventListener('click', function () {

	if (f.classList.contains("btn-color")) {
		if (clickAction == false)
			result.innerHTML = result.innerHTML + f.innerHTML;
		action = f.innerHTML;
		clickAction = true;
	}
	else {
		if (f.innerHTML == 'c') {
			cleen();
		}
		else {
			sortBtn(f.innerHTML);
		}

	}

}));

// Сброс
function cleen() {
	a = ''; b = ''; c = '';
	action = '';
	clickAction = false;
	result.innerHTML = '0';
}

// Определяем что делать со значением
function sortBtn(value) {
	if (clickAction == false)
		actionA(value);
	else
		actionB(value);
}

function actionA(value) {
	a += value;
	result.innerHTML = a;
}
function actionB(value) {
	b += value;
	result.innerHTML = a + action + b;
}
