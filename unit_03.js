// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. 
// Функция должна прочитать содержимое.i - 1 и сравнить его с числом 4
// (сравнение ==).Результат сравнения - true или false выведите в.out - 1.

const a1 = document.querySelector('.i-1');
const div1 = document.querySelector('.out-1');

function f1() {
	const out1 = a1.value;

	if (out1 == 4) {
		div1.innerHTML = true;
	}
	else {
		div1.innerHTML = false;

	}
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается 
// функция f2.Функция должна сравнить переменные с помощью if else и 
// вывести в.out - 2 число, которое больше.
// Вариант равенства переменных не рассматриваем.

const a21 = 45;
const a22 = 32;
const div2 = document.querySelector('.out-2');

function f2() {

	if (a21 > a22) {
		div2.innerHTML = 45;
	} else {
		div2.innerHTML = `Нифига не верно :)`;
	}
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. 
// При нажатии кнопки.b - 3 срабатывает функция f3.
// Функция должна сравнить числа из input, вывести в.out - 3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

const div31 = document.querySelector('.i-31');
const div32 = document.querySelector('.i-32');
const divOut = document.querySelector('.out-3');

function f3() {
	const a3 = +div31.value;
	const b3 = +div32.value;

	if (a3 >= b3) {
		divOut.innerHTML = a3;
	} else {
		divOut.innerHTML = `Переделывай`;
	}
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// Пользователь вводит в .i-4 год своего рождения. 
// Есть кнопка.b - 4 которая запускает функцию f4.
// Функция должна вывести в.out - 4 число 1 если пользователю больше 
// или равно 18 лет, и 0 если меньше.

const number4 = document.querySelector('.i-4');
const div4 = document.querySelector('.out-4');

function f4() {
	const age = ('2021 - number4.value');
	if (age >= 18) {
		div4.innerHTML = 1;
	} else {
		div4.innerHTML = 0;
	}
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// На странице есть input c классом i-5, куда пользователь может 
// ввести число.Есть кнопка b - 5 которая запускает функцию f5.
// Функция должна вывести в.out - 5 символ 'm' если число меньше нуля,
// 0 если число равно нулю и число 1 если больше.

const number5 = document.querySelector('.i-5');
const div5 = document.querySelector('.out-5');

function f5() {
	const num5 = number5.value;
	if (num5 < 0) {
		div5.innerHTML = 'm';
	}
	else if (num5 == 0) {
		div5.innerHTML = 0;
	}
	else {
		div5.innerHTML = 1;
	}
}

document.querySelector('.b-5').onclick = f5;

// Task 6.
// На странице есть input с классом i-6, куда пользователь может 
// ввести число.Есть кнопка.b - 6 которая запускает функцию f6.
// Функция должна вывести в.out - 6  слово even если число четное 
// и odd если нечетное.Для проверки четности используется целочисленный 
// остаток от деления на 2(оператор %).Если остаток равен нулю - четное, 
// нет - нечетное.

const number6 = document.querySelector('.i-6');
const div6 = document.querySelector('.out-6');

function f6() {
	const num6 = number6.value;
	if (num6 % 2 == 0) {
		div6.innerHTML = 'even';
	}
	else {
		div6.innerHTML = 'odd';
	}
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. 
// При нажатии кнопки.b - 7 срабатывает функция f7.
// Функция должна число из.i - 71 возвести в степень.i - 72, 
// вывести результат в.out - 7. Для возведения в степень можно 
// использовать **, или Math.pow.

const number71 = document.querySelector('.i-71');
const number72 = document.querySelector('.i-72');
const div7 = document.querySelector('.out-7');

function f7() {
	const a71 = number71.value;
	const a72 = number72.value;

	div7.innerHTML = Math.pow(a71, a72);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. 
// Дана кнопка b - 8. При ее  нажатии срабатывает функция f8.
// Функция должна получить выбранное в select число, потом с 
// помощью switch case сравнить его поочередно с 1, 2, 3. 
// И если число выбрано - 1, то вывести в.out - 8 строку one, 
// если 2 - two, если 3 - three.Напоминаю - это программирование.
// Как указано в задании - так и выводим.Т.е.Three с большой буквы - ошибка!!!

const select = document.querySelector('.s-8');
const div8 = document.querySelector('.out-8');

function f8() {
	const a8 = +select.value;
	switch (a8) {
		case 1:
			div8.innerHTML = 'one';
			break;
		case 2:
			div8.innerHTML = 'two';
			break;
		case 3:
			div8.innerHTML = 'three';
			break;
	}
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры. 
// Есть кнопка.b - 9 которая запускает функцию f9.Функция должна 
// вывести в.out - 9 номер подъезда, в котором находится квартира.
//  если от 1 включительно до 32 включительно - то вывести цифру 1
//  если от 33 (включительно) до 43(включительно) - то вывести 2
//  если от 44(включительно) до 64 (всключительно) - то 3.
//  В противном случае, вывести 0.

const number9 = document.querySelector('.i-9');
const div9 = document.querySelector('.out-9');

function f9() {
	const num9 = number9.value;

	if (num9 >= 1 && num9 <= 32) {
		div9.innerHTML = 1;
	} else if (num9 >= 33 && num9 <= 43) {
		div9.innerHTML = 2;
	} else if (num9 >= 44 && num9 <= 64) {
		div9.innerHTML = 3;
	} else {
		div9.innerHTML = 0;
	}
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.

const select10 = document.querySelector('.s-100');
const div10 = document.querySelector('.out-10');

function f10() {
	const out10 = select10.value;
	div10.innerHTML = out10;
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select .s-110. По изменению состояния select (событие onchange) 
// выведите value выбранного option в.out - 11.

const select11 = document.querySelector('.s-110');
const div11 = document.querySelector('.out-11');
function f11() {
	const out11 = select11.value;
	div11.innerHTML = out11;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input .i-120. По нажатию кнопки получите значение из input  в переменную, 
// а затем выведите в.out - 12 typeof полученной переменной.
// Typeof позволяет определить тип данных.Обратите внимание, данная задача уже решена, 
// нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
	let v = i120.value;
	document.querySelector('.out-12').innerHTML = (typeof v);
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. 
// По нажатию кнопки получите значение из input  в переменную, 
// а затем выведите в out - 13 typeof полученной переменной.Typeof позволяет 
// определить тип данных.Если вы правильно все сделали - то удивительно, 
// но тип данных будет string! Подумайте почему так ?

const i130 = document.querySelector('.i-130');
const div13 = document.querySelector('.out-13');

function f13() {
	const out13 = i130.value; //поставив + перед i130 мы получим number
	div13.innerHTML = (typeof out13);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input .i-141 и .i-142, type=number.  Дан select .s-143, 
// который содержит две операции - +, -, *, / . Дана кнопка b-14, 
// при нажатии на которую срабатывает функция f14.Функция выводит в.out - 14 
// результат операций выбранной в 3 - м select к числам введенным в первом и 
// втором input.Например выбрано 1 13 +, нужно вывести результат операции 1 + 13 т.е. 14.

const i141 = document.querySelector('.i-141');
const i142 = document.querySelector('.i-142');
const div14 = document.querySelector('.out-14');
const s143 = document.querySelector('.s-143');

function f14() {
	const a14 = +i141.value;
	const b14 = +i142.value;
	const c14 = s143.value;
	console.log(c14);

	if (c14 === '+') {
		div14.innerHTML = a14 + b14;
	} else if (c14 === '-') {
		div14.innerHTML = a14 - b14;
	} else if (c14 === '*') {
		div14.innerHTML = a14 * b14;
	} else if (c14 === '/') {
		div14.innerHTML = a14 / b14;
	};
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select .s-151 и .s-152, каждый из которых содержит 1 и 0.  
// Дан select.s - 153, который содержит две операции - && и || .Дана кнопка.b - 15, 
// при нажатии на которую срабатывает функция f15.Функция выводит в.out - 15 результат 
// логических операций выбранных в 3 select к числам выбранным в первом и втором select.
// Например выбрано 1 1 &&, нужно вывести результат операции 1 && 1 т.е. 1 или 0.

function f15() {

	const s1 = document.querySelector('.s-151').value;
	const s2 = document.querySelector('.s-152').value;
	const s3 = document.querySelector('.s-153').value;
	const div15 = document.querySelector('.out-15');

	if (s3 === '&&') {
		div15.innerHTML = s1 && s1;
	} else {
		div15.innerHTML = s1 || s1;
	}
}
document.querySelector('.b-15').onclick = f15;



