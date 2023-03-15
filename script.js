'use strict'

//variables
// Придумать название для переменных, которые описывают (let, const)
// const username = "";
// const surname = "";
// let age;
// let userInfo;

// Что будет в консоле и почему:
//1
//undefined
//2
//string 2
//3
//ReferenceError

//strings

// let string = "qwerty"
// Получить первую и последнюю букву строки
// console.log(string[0], string[string.length - 1])
// Сделать первую и последнюю буквы в верхнем регистре
// console.log(string[0].toUpperCase(), string[string.length - 1].toUpperCase())
// Найти положение слова string в строке
// console.log('asdfghjklqwertyuiopzxcvbnm'.indexOf('qwerty'))
// Найти положение второго пробела
// console.log('as dfg hjklq werty uiopzxcvbnm'.indexOf(' ', 'as dfg hjklq werty uiopzxcvbnm'.indexOf(' ') + 1), 'indexxxxx')
// Получить строку со 2-ого символа длинной 6 букв
// console.log('as dfg hjklq werty uiopzxcvbnm'.substring(1, 7))
// Получить строку с 1 по 7 символ
// console.log('as dfg hjklq werty uiopzxcvbnm'.substring(0, 6))
// Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
// let x = 20, y = 21;
// console.log(x + `${y}`)

//numbers
// Получить число Pi  из Math и округлить его до двух знаков после точки
// console.log(Math.round(Math.PI * 100) / 100)
// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
// console.log(Math.min(10, 17, 5, 12, 15, 99, 1), Math.max(10, 17, 5, 12, 15, 99, 1))
// 1. получить случайное число и округлить его до двух цифр после запятой
//  2. получить случайное число от 0 до Х
// console.log(Math.round(Math.random() * 100) / 100)
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }
// Получить число из строки '100$'
// console.log(+'100$'.slice(0,3))

//objects
// Создать объект с полем 'notebook' равным 'MacBook'
// let obj = {
//     notebook: 'Macbook'
// }
// Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
// obj.price = 1500;
// obj.currency = 'dollar'
// Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)
// obj.details = {
//     model: 'xz',
//     color: 'zelenyi'
// }
// console.log(obj)

//operators
// Записать в коротком виде:
/*
let a = b = c = d = k = l = m = 1;
console.log(a, b, c, d, k, l, m)
a += 5;
b *= 15;
c -= 3;
d %= 2;
k += a;
l *= b;
m *= 3 * m * k;
console.log(a, b, c, d, k, l, m)
// Возвести переменную в куб, используя краткую запись
console.log(a**2)
// Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
if (peremennaya == 'malenkyi') peremennaya = 'bolshoi';
else peremennaya = 'malenkyi';
peremennaya == 'malenkyi' ? peremennaya = 'bolshoi' : peremennaya = 'malenkyi';
// Записать условие, используя условный оператор if:
if (x < 0) x = 'menshe nulia';
else if (x == 0) x = 1;
else x*=10
y < 0 ? y = 'menshe nulia' : y == 0 ? x = 1 : x*=10;
// Используя конструктор switch, записать следующее условие:
switch(a) {
    case 'kotik': console.log('kotik'); break;
    case 'sobaka': console.log('sobaka'); break;
    case 'homyak': console.log('homyak'); break;
    default: console.log('неизвестное науке животное'); break;
}
*/
// Чему равен x в каждом из примеров, объясните почему:
/*
'строка'
'строка'
1
null
null
1
null
*/
// Чему равен x в каждом из примеров, объясните почему:
/*
33
2
11
2
3
2
NaN
NaN
*/
// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
// let str = "Я стану крутым программистом"
// string[0].toUpperCase() + string.slice(1);

// let str1 = str.split(' ');
// for(let i = 0; i < str1.length; i++) str1[i][0].toUpperCase() + str1[i].slice(1);
// console.log(str1)
// Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 2*1 или 6! = 6*5*4*3*2*1)
// let result = 1;
// for(let i = 1; i < 9; i++) {
//     result *= i
//     console.log(i, result)
// }
// console.log(result)
// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
//for(let i = 0; i < 20; i++) console.log(++i)

//arrays
// Используя функцию, найти последний элемент массива, не изменяя его.
//let array = [1, 2, 3, 4, 5]
//console.log(array.at(-1))
// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
// function double(array) {
//     let array2 = array;
//    return(array.concat(array2))
// }
// double([1, 2, 3])
// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
// function fill1(n) {
//     let array = [];
//     for(let i =0; i < n; i++) {
//         array.push(i)
//     }
//     return array
// }
// console.log(fill1(6))

// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент,
// а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
// function removeFirst(...arrays) {
//     return arrays.map(arr => arr.slice(1));
// }

// console.log(removeFirst([1, 2, 3, 5, 6]))

// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба")
// function sortAndReverseString(str) {
//     let sorted = str.split('').sort().join('');
//     return sorted.split('').reverse().join('');
// }

// console.log(sortAndReverseString("екважбигёзд"))

// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
// function sortReverseNumbers(arr) {
//     return arr.sort((a, b) => b - a);
// }

// console.log(sortReverseNumbers([5, 2, -1, 6, 9, -9, 3]))


// Создать функцию, которая принимает 3 аргумента: 
/*
любой произвольный массив
начальный номер элемента в массиве
конечный номер
*/
// function getNewArray(array, start, element) {
//     return array.slice(start, start+element);
// }

// console.log( getNewArray([1, 2, 3, 4, 5, 6], 1, 3) )
// Удвоить элементы массива, не используя циклы.,
// function doubleArray(array) {
//   return array.map((element) => element * 2);
// }

// console.log( doubleArray([1, 2, 3, 4, 5]) );

//let array = [1, 2, 3, 4, 5];
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
//array.splice(1, 2)
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
//array.splice(2, 2, 3, 4)
// Вставить в произвольный массив любое значение после второго элемента.
//array.splice(1, 1, 'chto-ugodno')
//console.log( array )

// Отсортировать массив объектов по возрастающему количеству ног животных:
// function sortByLegs(arr) {
//     return arr.sort(function(a, b) {
//       return a.legs - b.legs;
//     });
// }


// let arrlegs = [
//     {kind: "tarantula", info: {legs: 8, eyes: 8}},
//     {kind: "french bulldog", info: {legs: 4, eyes: 2}},
//     {kind: "human", info: {legs: 2, eyes: 2}},
//     {kind: "lobster", info: {legs: 10, eyes: 2}},
  
// ];
// console.log(sortByLegs( arrlegs ))

// Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, 
//находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему.
// function filterServices(services, minTime, maxTime) {
//     // Filter services based on their execution time
//     var filteredServices = services.filter(function(service) {
//       return service.executionTime >= minTime && service.executionTime <= maxTime;
//     });
    
//     // Sort filtered services by execution time
//     filteredServices.sort(function(a, b) {
//       return a.executionTime - b.executionTime;
//     });
  
//     return filteredServices;
// }
  
// const services = [
//     {service: "service1", executionTime: 56},
//     {service: "service2", executionTime: 97},
//     {service: "service3", executionTime: 23},
//     {service: "service4", executionTime: 65},
//     {service: "service5", executionTime: 2},
//     {service: "service6", executionTime: 73},
//     {service: "service7", executionTime: 82},
//     {service: "service8", executionTime: 19},
//     {service: "service9", executionTime: 33},
//     {service: "service10", executionTime: 42},
// ]

// console.log( filterServices(services, 20, 60) )
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
// multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
// function multiply(... numbers) {
//     if(!!numbers) { let result = 1;
//         for( let arg of numbers) result *= arg;
//         return result
//     }
//     else return 0
// }

// console.log( multiply(1, 2, 3, 4, 8) )
// факториал 
// function factorial(n) {
//     return n == 0 ? 1 : n * factorial(n -1);
// }

// console.log(factorial(6), 'ia ebanutyi')
// Создать функцию, которая принимает строку и возвращает  перевернутую строку ('test') = 'tset'.
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log( reverseString('test') )
// Написать функцию, которая проверяет является ли слово палиндромом
// function isPalindrome(str) {
//     // Convert the string to lowercase and remove non-alphanumeric characters
//     var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
//     // Reverse the cleaned string and compare it to the original
//     return cleanedStr === cleanedStr.split("").reverse().join("");
// }

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль
// function stringBySymbol(str) {
//     console.log( str.substr(0,1) );
//     return str ? stringBySymbol(str) : 0;
// }

// console.log( stringBySymbol( 'test' ))

/*
 Получить и вывести в консоль:
 1. head
 2. body
 3. все дочерние элементы body
 4. первый div и все его дочерние узлы
  4.1 вывести все дочерние узлы в консоль 
  4.2 вывести все дочерние узлы в консоль кроме первого
*/ 



// доступ к DOM
//console.log(document.head)
//console.log(document.body)
//console.log(document.body.children)
//console.log(document.body.firstElementChild, document.body.firstElementChild.children)
//console.log(document.body.firstElementChild)

//DOM

