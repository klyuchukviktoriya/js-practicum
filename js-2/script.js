// //* 1
// // Найдите и исправьте ошибки в следующем коде
// // var a = prompt("Введите число 11", "0");

// // if (a = 11)
// //     document.write("Введенное значение верно.");
// // }
// var a = prompt("Введите число 11", "0");

// if (a == 11) {
//     document.write("Введенное значение верно.");
// }

// //* 2
// // Дописать фрагмент кода для правильного результата
// // var a = 10;
// // var b = 5;

// // if () {
// //     document.write("Число a больше b.");
// // }
// var a = 10;
// var b = 5;

// if (a > b) {
//     document.write("Число a больше b.");
// }

// //* 3
// // Что выведет в диалоговое окно следующий код ?
// // if ("Hello") {
// // alert('Hello');
// // }
// // else {
// // alert("Ошибка");
// // }
// Hello

// //* 4
// // У нас есть переменная value с определенным значением.
// // var value = prompt("С какой Вы планеты?");
// // Нужно дописать конструкцию if..else ниже переменной с определенными условиями:
// // 1) Если пользователь вводит фразу: "Земля",
// // то с помощью диалогового окна выводит сообщение 1: "Здравствуй, человек!"
// // 2) Если что-то другое – выводит сообщение 2: "Добро пожаловать, пришелец!"
// var value = prompt("С какой Вы планеты?");
// if (value === "Земля") {
//     alert("Здравствуй, человек!");
// } else {
//     alert("Добро пожаловать, пришелец!");
// }

// //* 5
// // Что выведет на экран следующий код?
// // var a = 101;
// // if (a == "5") {
// // document.write("Условие 1" + "<br/>");
// // }
// // else {
// // document.write("Условие 2" + "<br/>");
// // }
// // document.write("Условие 3");
// Условие 2 Условие 3

// //* 6
// // Исправить ошибку в коде в соответствии с инструкциями в задании
// // Пользователь вводит строку с первой буквой в верхнем или нижнем регистре.
// // Исправьте код таким образом, чтобы вывод соответствовал введенной строке
// // (не важно, с какой буквы - с большой или маленькой,
// // то есть в document.write не нужно подставлять значение переменной а).
// // var a = prompt("Введите слово Hello, или World", "Hello");

// // if (a == "Hello" && a == "hello") {
// //     document.write("Введенное значение верно и равно Hello");
// // }
// // else if (a == "World" && a == "world") {
// //     document.write("Введенное значение верно и равно World");
// // }
// // else {
// //     document.write("Введенное значение НЕ верно");
// // }
// var a = prompt("Введите слово Hello, или World", "Hello");

// if (a == "Hello" || a == "hello") {
//     document.write("Введенное значение верно и равно Hello");
// }
// else if (a == "World" || a == "world") {
//     document.write("Введенное значение верно и равно World");
// }
// else {
//     document.write("Введенное значение НЕ верно");
// }

// //* 7
// // Что выведет на экран следующий код?
// // var trueVal = true;
// // var falseVal = false;
// // if (trueVal) {
// // document.write("Первый блок");
// // }
// // else if (!falseVal) {
// // document.write("Второй блок");
// // }
// // else {
// // document.write("Ни один блок не выполнился");
// // }
// Первый блок

// //* 8
// // В условных операторах if дописать некое выражение с
// // использованием логических операторов в соответствии с текстом,
// // заданным в методе document.write.
// // var a = confirm("Принять первое значение как истину?");
// // var b = confirm("Принять второе значение как истину?");

// // if ( ) {
// //     document.write("Оба значения истина");
// // }
// // else if ( ) {
// //     document.write("Одно из значений истина, другое ложь");
// // }
// // else {
// //     document.write("Оба значения ложь");
// // }
// var a = confirm("Принять первое значение как истину?");
// var b = confirm("Принять второе значение как истину?");

// if (a && b) {
//     document.write("Оба значения истина");
// }
// else if (a || b) {
//     document.write("Одно из значений истина, другое ложь");
// }
// else {
//     document.write("Оба значения ложь");
// }

// //* 9
// // Допишите код в соответствии с инструкциями в задании
// // Используя конструкцию if..else, написать некие условия для переменной value,
// // которые будут выводить в диалоговое окно alert:
// // 1) сообщение “1”, если значение будет больше нуля,
// // 2) сообщение “-1”, если значение меньше нуля,
// // 3) сообщение “0”, если значение равно нулю.
// // var value = prompt("Введите число", "0");
// var value = prompt("Введите число", "0");
// if (value > 0) {
//     alert("1");
// } else if (value < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

// //* 10
// // Найдите и исправьте ошибки в следующем коде.
// // var number = prompt("Введите число 1 или 2:");

// // switch (number) {

// // case "1"
// //   {
// //     document.write("Один");
// //   };
// //     break;

// // case "2"
// //   {
// //     document.write("Два");
// //   };
// //   break;

// // default
// //   {
// //     document.write("Вы ввели значение, отличное от 1 и 2");
// //   };
// // }

// var number = prompt("Введите число 1 или 2:");

// switch (number) {

// case "1":
//   {
//     document.write("Один");
//   };
//     break;

// case "2":
//   {
//     document.write("Два");
//   };
//   break;

// default:
//   {
//     document.write("Вы ввели значение, отличное от 1 и 2");
//   };
// }

// //* 11
// // Что выведет в диалоговое окно следующий код?
// // var a = 1 + 3;
// // switch (a) {
// // case 3: document.write("Маловато<br />");
// // case 4: document.write("Правильно!<br />");
// // case 5: document.write("Перебор<br />");
// //     default: document.write("Я таких значений не знаю<br />");
// // }
// Правильно! Перебор Я таких значений не знаю

// //* 12
// // Перепишите данный код, используя одну конструкцию switch вместо условного оператора if..else.
// // Исходный код нужно убрать из редактора.
// // var a = prompt("Введите число 0 или 1");

// // if (a == "0") {
// //      alert("Число 0");
// // }
// // else if (a == "1") {
// //     alert("Число 1");
// // }
// // else {
// //     alert("Вы ввели значение, отличное от 0 и 1")
// // }
// var a = prompt("Введите число 0 или 1");
// switch (a) {
//     case "0":
//         alert("Число 0");
//         break;
//     case "1":
//         alert("Число 1");
//         break;
//     default:
//         alert("Вы ввели значение, отличное от 0 и 1");
// }

// //* 13
// // Что выведет на экран следующий код?
// // var value = "2";
// // switch (value) {
// // case "1":
// // case "2":
// // case "3": document.write("Hello");
// // break;
// // case "4":
// // case "5": document.write("World");
// // default: document.write("Error");
// // }
// Hello

// //* 14
// // В данном коде объявлено 3 локальные переменные с использованием ключевого слова var.
// // Нужно в переменную max присвоить значение следующего тернарного оператора:
// // если a больше b, то возвращаем a, иначе возвращаем b.
// // var a = 1, b = 2, max = 0;

// // document.write(max);
// var a = 1, b = 2, max = 0;
// max = a > b ? a : b;
// document.write(max);

// //* 15
// // Что выведет на экран следующий код?
// // var a = 5, b = 10, c = -5, max = 0;
// // max = a > b ? c = a : c = b;
// // document.write(max);
// 10

// //* 16
// // Перепишите данный код, используя тернарный оператор вместо условного оператора if..else
// // var a = 5, b = 10, result;

// // if (a + b < 10) {
// //     result = "Sun";
// // } else {
// //     result = "Luna";
// // }

// // document.write(result);
// var a = 5, b = 10, result;
// a + b < 10 ? result = "Sun" : result = "Luna"

// document.write(result);

// //* 17
// // Написать цикл с предусловием while и счетчиком counter,
// // который с помощью метода document.write() будет
// // выводить на экран 10 цифр - от 1 до 10, используя инкремент.
// let counter = 1;
// while (counter <= 10) {
//     document.write(counter);
//     counter++;
// }

// //* 18
// // Какие значения выведет следующий код программы?
// // var counter = 5;
// // while (counter < 10) {
// // counter++;
// // document.write("Counter " + counter);
// // break;
// // document.write("Эта строка не выполнится.");
// // }
// Counter 6

// //* 19
// // Какие значения выведет следующий код программы?
// // var counter = 0;
// // while (counter < 3) {
// // counter++;
// // document.write(counter);
// // continue;
// // document.write("Эта строка не выполнится.");
// // }
// 1 2 3

// //* 20
// // Написать цикл с постусловием do..while и счетчиком counter,
// // который будет с помощью метода document.write() выводить
// // на экран 5 цифр, от 5 до 9, используя инкремент.
// // var counter = 5;
// var counter = 5;
// do {
//     document.write(counter);
//     counter++;
// } while (counter <= 9);

// //* 21
// // Найдите и исправьте ошибку в программе для нахождения факториала
// // var counter = prompt("Введите число");
// // var factorial = 1;
// // document.write("Факториал числа: " + counter + "! = ");
// // do {
// //      if (counter == 0) {
// //                 factorial = 1;
// //                 break;
// //      }
// //      factorial = factorial / counter;
// //      counter = counter + 1;
// // }
// // while (counter > 0);
// // document.write(factorial);
// var counter = prompt("Введите число");
// var factorial = 1;
// document.write("Факториал числа: " + counter + "! = ");
// do {

//      if (counter == 0) {
//                 factorial = 1;
//                 break;
//      }

//      factorial = factorial * counter;
//      counter = counter - 1;
// }
// while (counter > 0);
// document.write(factorial);

// //* 22
// // Пользователь вводит значения до тех пор, пока не нажмет на отмену.
// // Допишите в тело цикла do следующее:
// // 1) В переменную input с помощью диалогового окна prompt присвойте значение,
// // которое введет пользователь.В диалоговом окне в качестве сообщения используйте фразу
// // "Введите некоторое значение".
// // 2) Выведите на экран в строку c помощью метода document.write
// // значение этой переменной.
// // var input;
// // do {
// // } while (input != null);
// var input;
// do {
//     input = prompt("Введите некоторое значение");
//     document.write(input);
// } while (input != null);

// //* 23
// // Написать цикл со счётчиком for, где счетчик цикла переменная i,
// // который с помощью метода document.write() будет выводить на экран 10 чисел, от 1 до 10.
// for (var i = 1; i <= 10; i++) {
//     document.write(i);
// }

// //* 24
// // Программа выводит на экран 5 цифр, от 0 до 4.
// // Перепишите код, заменив цикл for на while, без изменения(!) поведения цикла и его счетчика.
// // for (var i = 0; i < 5; i++) {
// //     alert("номер: " + i);
// // }
// var i = 0;
// while (i < 5) {
//     alert("номер: " + i);
//     i++;
// }

// //* 25
// // Что выведет на экран следующий код?
// // var count = 3;
// // var exit = 2;
// // for (var i = 0; i < count; i++) {
// // if (i == exit) {
// // break;
// // }
// // else {
// // document.write(i + "<br />");
// // }
// // }
//  0 1

// //* 26
// // Что выведет на экран следующий код?
// // var count = 5;
// // var exit = 3;
// // for (var i = 1; i <= count; i++) {
// // if (i == exit) {
// // document.write("hello<br />");
// // continue;
// // }
// // else {
// // document.write(i + "<br />");
// // }
// // }

// 1 2 hello 4 5

//*-----------------------------------------------------------------
// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!
// // The function takes a name as its only argument, and returns one of the following strings:
// // name + " plays banjo"
// // name + " does not play banjo"
// // Names given are always valid strings.
// // function areYouPlayingBanjo(name) {
// //   if (toLowerCase(name[0]) === "r") {
// //     return name + " plays banjo";
// //   } else {
// //     return name + " does not play banjo";
// //   }
// // }
// let name = prompt("Name");
// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === "r") {
//     return console.log(name + " plays banjo");
     
//   } else {
//     return console.log(name + " does not play banjo");
//   }
// }
// areYouPlayingBanjo(name);

// //* ---------------------------------------------------------------------------
// // Clock shows h hours, m minutes and s seconds after midnight.
// // Your task is to write a function which returns the time since midnight in milliseconds.

// // Example:
// // h = 0
// // m = 1
// // s = 1

// // result = 61000
// // Input constraints:

// // 0 <= h <= 23
// // 0 <= m <= 59
// // 0 <= s <= 59
// // function past(h, m, s){
// //   return h * m * s * 60;
// // }

// function past(h, m, s){
//   return (h * 3600 + m * 60 + s) * 1000;
// }

// //* ---------------------------------------------------------------------------
// // Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// // "hello world".toAlternatingCase() === "HELLO WORLD"
// // "HELLO WORLD".toAlternatingCase() === "hello world"
// // "hello WORLD".toAlternatingCase() === "HELLO world"
// // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// // "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// // "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// // "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// // As usual, your function/method should be pure, i.e. it should not mutate the original string.
// String.prototype.toAlternatingCase = function () {
//   return this
//     .split('') 
//     .map(char => {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase()
//     } else {
//       return char.toUpperCase();
//     }
      
//     })
//     .join(''); 
// }
// console.log("Vika555".toAlternatingCase());

