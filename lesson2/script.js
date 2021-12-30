// Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
// инкремент сначала увеличивает значение на единицу, а потом его присваевает переменной
d = b++; alert(d); // 1
// инкремент сначала присваевает значение, а потом увеличивает его на 1
c = (2 + ++a); alert(c); // 5
// потому что "а" на момент выполнения равно 2 и увеличивается на 1
d = (2 + b++); alert(d); // 4
// потому что "b" на момент выполнения равно 2 и увеличивается на 1
alert(a); // 3
// изначально было 1 затем дважды увеличивалось на 1
alert(b); // 3
// изначально было 1 затем дважды увеличивалось на 1


// Задание 2

var a = 2;
var x = 1 + (a *= 2);
// x будет равен x = 1 + 4; потому что действие в скобках умножает переменную "а" на 2 и присваевает ей полученное значение.

// Задание 3

var a = 5;
var b = 3;
if (a > 0 && b > 0) {
  x = a - b;
  alert(x);
} else if (a < 0 && b < 0) {
  x = a * b;
  alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
  x = a + b;
  alert(x);
}

// Задание 4

a = +prompt('Введите число от 1 до 15');
switch (a) {
  case 1:
    alert('Ваше число 1');
    break;
  case 2:
    alert('Ваше число 2');
    break;
  case 3:
    alert('Ваше число 3');
    break;
  case 4:
    alert('Ваше число 4');
    break;
  case 5:
    alert('Ваше число 5');
    break;
  case 6:
    alert('Ваше число 6');
    break;
  case 7:
    alert('Ваше число 7');
    break;
  case 8:
    alert('Ваше число 8');
    break;
  case 9:
    alert('Ваше число 9');
    break;
  case 10:
    alert('Ваше число 10');
    break;
  case 11:
    alert('Ваше число 11');
    break;
  case 12:
    alert('Ваше число 12');
    break;
  case 13:
    alert('Ваше число 13');
    break;
  case 14:
    alert('Ваше число 14');
    break;
  case 15:
    alert('Ваше число 15');
    break;
}	

// Задание 5

var a = 2;
var b = 3;

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

// Задание 6 

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'Сложение':
      return arg1 + arg2;
      break;
    case 'Вычитание':
      return arg1 - arg2;
      break;
    case 'Деление':
      return arg1 / arg2;
      break;
    case 'Умножение':
      return arg1 * arg2;
      break;
  }
}

// Задание 7

// null используется чтобы указать на отсутсвие вообще какого-либо значения, а 0 это уже конкретное значение

// Задание 8

function power(val, pow) {
  if (pow > 0) {
    return val * power(val, pow - 1);
  } else if (pow < 0) {
    return val * power(val, pow + 1);
  } else
    return 1;
}

console.log("2^10 = " + power(2, 10));