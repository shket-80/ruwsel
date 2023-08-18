const result = document.querySelector('.table__info');//Поле с вычеслениями
const btn = document.querySelectorAll('.group__btn');//Кнопки 

let a = ''; let b = ''; let c = '';
let action = '';
let clickAction = false;
let finish = 0;

/*События кнопок  */
btn.forEach(f => f.addEventListener('click', function () {

	if (f.classList.contains("btn-color")) {//!.......................................
		if (f.innerHTML == "=")
			actions(action, f.innerHTML);
		//?____________________________________________________________
		if (f.innerHTML == "-" || f.innerHTML == "+" ||
			f.innerHTML == "*" || f.innerHTML == "/") {
			//!________________________________________________________
			if (clickAction == false && finish == 0) {
				result.innerHTML = result.innerHTML + f.innerHTML;
				clickAction = true;
				action = f.innerHTML;
			}
			else {
				if (finish == 0) {
					action = f.innerHTML;
					result.innerHTML = result.innerHTML.slice(0, -1) + f.innerHTML;
				}

				else
					actions(action, f.innerHTML);
			}
			//!__________________________________________________________
		}
		//?__________________________________________________________________
	}//!...................................................................................
	else {
		//!>>>>>>>>>>>>>>>>>>>>>>>
		if (f.innerHTML == 'c')
			cleen();
		else
			sortBtn(f.innerHTML);
		//!<<<<<<<<<<<<<<<<<<<<<<<
	}
}));

// Сброс
function cleen() {
	a = ''; b = ''; c = '';
	action = '';
	clickAction = false;
	result.innerHTML = '0';
	finish = 0;
}

function actions(value, value2) {
	switch (value) {
		case '+': sum(value2); break;
		case '-': minus(value2); break;
		case '*': multiply(value2); break;
		case '/': share(value2); break;
		default: break;
	}
}
// Определяем что делать со значением
function sortBtn(value) {
	//!>>>>>>>>>>>>>>>>>>>>>>
	if (clickAction == false)
		actionA(value);
	else
		actionB(value);
	//!<<<<<<<<<<<<<<<<<<<<<<
}

function actionA(value) {
	if (Number(a) == 0 && Number(value) == 0)
		a = 0
	else if (Number(a) == 0)
		a = value;
	else
		a += value;
	result.innerHTML = a;
	c = '';
}
function actionB(value) {
	//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	if (Number(b) == 0 && Number(value) == 0)
		b = 0;
	else if (Number(b) == 0)
		b = value;
	else
		b += value;
	//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	if (c == '')
		result.innerHTML = a + action + b;
	else
		result.innerHTML = c + action + b;
	finish = 1;
}

//?==========================================================
//!_________Похожие функции !!! ___________//
function sum(value) {
	if (c == '')
		c = Number(a) + Number(b);
	else
		c = Number(c) + Number(b);
	common(value);
}

function minus(value) {
	if (c == '')
		c = Number(a) - Number(b);
	else
		c = Number(c) - Number(b);
	common(value);
}

function multiply(value) {
	if (c == '')
		c = Number(a) * Number(b);
	else
		c = Number(c) * Number(b);
	common(value);
}

function share(value) {
	if (Number(b) != 0) {
		//!............................................
		if (c == '')
			c = Number(a) / Number(b);
		else
			c = Number(c) / Number(b);
		//!.............................................
		common(value);
	}
}

// В этой функции повторяющийся код для sum() и minus()
function common(value) {
	if (value != '=') {
		result.innerHTML = c + value;
		a = b = '';
		finish = 0;
		action = value;
	}
	else {
		result.innerHTML = c
		a = b = '';
		finish = 0;
		action = '';
		clickAction = false;
	}
}
