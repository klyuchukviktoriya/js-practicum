// //* 1
// // Выведите в диалоговое окно фразу "Hello world".
// // Используйте функцию alert для отображения значения в модальном окне
// alert("Hello world");

// //* 2
// // Добавить фразу "Hello! Amigo" в тело документа таким образом,
// // чтобы содержимое, которое уже там находится, осталось на месте.
// document.body.innerHTML += "Hello! Amigo";


// //* 3
// // Найдите и исправьте ошибку
// // document.whrit("Problems?");
// document.write("Problems?");

// //* 4
// // Найдите и исправьте ошибку
// // alert(Hello);
// alert("Hello");

// // * 5
// // Закомментируйте строку alert("Hello World!"); в редакторе кода.
// // Используйте однострочный комментарий.
// // alert("Hello World!");
// // alert("Hello World!");


// //* 6
// // Исправьте ошибки в объявлениях переменных в следующем коде
// // String s = "String";
// // int a = 10;
// // long b = 25;
// let s = "String";
// let a = 10;
// let b = 25;

// //* 7
// // Найдите и исправьте ошибки в следующем коде.
// // var name = "My     name     is     Robot";
// // var 2b = 10;
// // Var _@c = 15;
// // alert(Name);
// var name = "My name is Robot";
// var b2 = 10;
// var c = 15;
// alert(name);

// //* 8
// // Задание – с помощью метода document.write вывести в документ
// // строку: Who are you ? (обязательно с пробелами между словами!).
// //  Для этого Вам нужно проделать следующие этапы:
// // 1) Создать 4 переменные с использованием ключевого слова
// // var с именами string1, string2, string3, concatenation.
// // 2) В переменную string1 написать фразу "Who ", string2 – "are ",
// // string3 – "you?" 3) В локальной переменной concatenation
// //  записать результат конкатенации 3 - х строк(string1, string2, string3).
// //   4) Вывести в документ содержимое переменной concatenation "Who are you?"
// var string1 = "Who ";
// var string2 = "are ";
// var string3 = "you?";
// var concatenation = string1 + string2 + string3;
// document.write(concatenation);


// //* 9
// //   Какие значения выведет в окно браузера следующий код?
// // var str = "20";
// // var a = 5;
// // document.write(str + a + "<br/>");
// // document.write(str - a + "<br/>");
// // document.write(str * "2" + "<br/>");
// // document.write(str / 2 + "<br/>");
// 205 15 40 10

// //* 10
// // 1) Создать 3 переменные с использованием ключевого слова
// // var с идентификаторами a, b, c.
// // 2) Переменной с идентификатором a присвоить значение false.
// // Переменной с идентификатором b присвоить значение null.
// // Переменная с идентификатором c должна принимать значение undefined.
// //  3) Отобразить значение 3 - х переменных по очереди в модальные окна(то есть с помощью метода alert).
// var a = false;
// var b = null;
// var c = undefined;
// alert(a);
// alert(b);
// alert(c);

// //* 11
// // 1) Создать 3 локальные переменные с использованием ключевого слова var с именами
// //  firstName, lastName и age.
// //  2) В каждую переменную с помощью диалогового окна prompt присвойте значение,
// //  которое введет пользователь.В диалоговом окне в качестве сообщения
// //  для соответствующих переменных используйте фразы –
// //  "Введите имя", "Введите фамилию", "Введите возраст".
// var firstName;
// var lastName;
// var age;
// firstName = prompt("Введите имя");
// lastName = prompt("Введите фамилию");
// age = prompt("Введите возраст");


// //* 12
// // Найдите и исправьте ошибки в следующем коде.
// // var firstName = prompt("Введите имя"; "сюда");
// // var lastName = promt("Введите фамилию");
// // int age = prompt("Введите возраст");
// // alert(Age);
// var firstName = prompt("Введите имя", "сюда");
// var lastName = prompt("Введите фамилию");
// var age = prompt("Введите возраст");
// alert(age);

// //* 13
// // Допишите часть кода для корректной работы
// // Конвертация строкового значения в числовое: целочисленное и вещественное значения.
// // var x = prompt("Input x value ", "0");
// // var y = prompt("Input y value ", "0.0");
// // var integerX =
// // var floatY =
// // var result = integerX + floatY;
// // document.write(result);
// var x = prompt("Input x value ", "0");
// var y = prompt("Input y value ", "0.0");
// var integerX = parseInt(x);
// var floatY = parseFloat(y);
// var result = integerX + floatY;
// document.write(result);

// //* 14
// // Что выведет на экран следующий код?
// //  var a = 5;
// //  var b = 3;
// //  var c = "4";
// //  var result1 = a % b;
// //  var result2 = a % c;
// //  document.writeln(result1);
// //  document.write(result2);
// 2 1

// //* 15
// // Используя префиксный/постфиксный инкремент, выполните следующее задание
// // Вставьте соответствующие формы инкрементов вовнутрь ОБОИХ скобок методов document.write(),
// //  чтобы значения вывелись таковыми, как числа в комментариях.
// // var a = 5;
// // var b = 9;
// // document.write(a); // 5
// // document.write(b); // 10
// var a = 5;
// var b = 9;
// document.write(a++); // 5
// document.write(++b); // 10

// //* 16
// // Какие значения выведет следующий код программы?
// // Укажите значения в редакторе, которые выведет следующий код:
// // var a = 20;
// // var b = 10;
// // var c = a-- + --b;
// // document.write(c + "<br/>");
// // document.write(a + "<br/>");
// // document.write(b + "<br/>");
// 29 19 9

// //* 17
// // Дописать код в соответствии с инструкциями в задании
// // В последних трех строках кода,
// // которые присваивают переменной res некоторые значения,
// // дописать операторы равенства или идентичности
// // (использовать только их!) так, чтобы переменная принимала значение true.
// // Оператор NOT (!) использовать запрещено.
// // var a = 10;
// // var b = "10";
// // var c = "Hello";
// // var d = "Hello";
// // var f = 1;
// // var e = true;
// // var res;

// // res = a b;
// // res = c d;
// // res = f e;
// var a = 10;
// var b = "10";
// var c = "Hello";
// var d = "Hello";
// var f = 1;
// var e = true;
// var res;

// res = a == b;
// res = c === d;
// res = f == e;

// //* 18
// // Какие значения выведет следующий код программы?
// // var a = 1;
// // var b = "1";
// // var c = "some";
// // var d = 'same';
// // var e = true;
// // var res;
// // res = a != b;
// // document.write(res + "<br />");
// // res = c !== d;
// // document.write(res + "<br />");
// // res = a !== e;
// // document.write(res + "<br />");
// false true true

// //* 19
// // Дописать код в соответствии с инструкциями в задании
// // Поставить операторы сравнения("больше" или "меньше") в объявлениях переменных res и s так, чтобы результат был true.Оператор NOT не используем.
// // var a = 10;
// // var b = 20;
// // var res = a b;
// // var s = "A"  "a";
// var a = 10;
// var b = 20;
// var res = a < b;
// var s = "A" < "a";

// //* 20
// // Какие значения выведет следующий код программы?
// // var a = true;
// // var b = false;
// // var c = true;
// // var res;
// // res = a && b;
// // document.write(res + "");
// // res = a || b; 
// // document.write(res + "");
// // res = a && c;
// // document.write(res + "");
// // res = a || c;
// // document.write(res + "");
// false true true true