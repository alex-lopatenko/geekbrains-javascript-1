#Практическое задание <br>
1. Для практикума из занятия 7 продумать, где можно применить замыкания. <br>
2. Не выполняя кода, ответить, что выведет браузер и почему: <br>
if (!("a" in window)) { <br>
    var a = 1; <br>
} <br>
alert(a); <br>
var b = function a(x) { <br>
    x && a(--x); <br>
}; <br>
alert(a); <br>
function a(x) { <br>
    return x * 2; <br>
} <br>
var a; <br>
alert(a); <br>
function b(x, y, a) { <br>
    arguments[2] = 10; <br>
    alert(a); <br>
} <br>
b(1, 2, 3); <br>
function a() { <br>
    alert(this); <br>
} <br>
a.call(null); <br>