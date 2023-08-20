
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


const result = document.querySelector('.table__info');//Поле с вычеслениями
const btn = document.querySelectorAll('.group__btn');//Кнопки 

let a = ''; let b = ''; let c = '';
let action = '';
let clickAction = false;
let finish = 0;
let procentA = ''; let procentB = '';
let procent = false;
let delite = '';

/*События кнопок  */
btn.forEach(f => f.addEventListener('click', function () {

	if (f.classList.contains("btn-color")) {//!.......................................
		if (f.innerHTML == "=")
			actions(action, f.innerHTML);
		if (f.innerHTML == 'del')
			del();
		if (f.innerHTML == "%")
			proCent();
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

// proCent
function proCent() {
	if (clickAction == false) {
		procA();
	}
	else {
		procB();
	}

}

function procA() {
	if (Number(a) > 0) {
		a = Number(a) / 100;
		result.innerHTML = a;
	}
}

function procB() {
	if (c == '')
		b = (Number(a) / 100) * b;
	else
		b = (Number(c) / 100) * b;
	switch (action) {
		case '+': sum('='); break;
		case '-': minus('='); break;
		case '*': multiply('='); break;
		case '/': share('='); break;
		default: break;
	}
}
//del
function del() {
	delite = result.innerHTML;
	if (action == '') {
		a = b = c = '';
		for (let i = 0; i < delite.length; i++) {
			a += delite.charAt(i)
		}
		if (a.length > 1)
			a = a.slice(0, -1);
		else
			a = '0';
		result.innerHTML = a;
	}
	else {
		delite = delite.split(action);
		if (delite[1].length == 0) {
			a = c = '';
			for (let k of delite[0]) {
				a += k;
			}
			a += action;
			if (a.length > 1)
				a = a.slice(0, -1);
			else
				a = '0';
			result.innerHTML = a;
			action = '';
			clickAction = false;
			finish = 0;
		}
		else {

			b = '';
			for (let k of delite[1]) {
				b += k;
			}
			if (b.length > 0) {
				b = b.slice(0, -1);
				if (c == '')
					result.innerHTML = a + action + b;
				else
					result.innerHTML = c + action + b;
			}
			else {
				result.innerHTML = a + action;
				b = '';
			}


		}
	}
}
// Сброс
function cleen() {
	a = ''; b = ''; c = '';
	action = '';
	clickAction = false;
	result.innerHTML = '0';
	finish = 0;
	procent = false;
	procentA = ''; procentB = '';
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
	if (a == '0' && value == '0')
		a = 0
	else if (result.innerHTML == '0' && value != '.')
		a = value;
	else if (result.innerHTML.at(-1) == '.' && value == '.')
		;
	else if (a == '' && value == '.')
		a = 0 + '.';
	else {
		if (a.includes('.') == true && value == '.')
			;
		else
			a += value;
	}

	result.innerHTML = a;
	c = '';
}
function actionB(value) {
	//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	if (b == '0' && value == '0')
		b = 0;
	else if (b === "0." && value != '.')
		b += value;
	else if (b == '0' && value != '.')
		b = value;
	else if (result.innerHTML.at(-1) == '.' && value == '.')
		;
	else if (b == '' && value == '.')
		b = 0 + '.';
	else
		if (b.includes('.') == true && value == '.')
			;
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
		if (String(c).includes('.') == false)
			result.innerHTML = c + value;
		else
			result.innerHTML = Number(c).toFixed(3).replace(/0*$/, "") + value;
		a = b = '';
		finish = 0;
		action = value;
	}
	else {
		if (String(c).includes('.') == false)
			result.innerHTML = c;
		else
			result.innerHTML = Number(c).toFixed(3).replace(/0*$/, "");
		a = b = '';
		finish = 0;
		action = '';
		clickAction = false;
	}
}

