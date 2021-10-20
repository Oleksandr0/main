// - створити функцію яка приймає масив та виводить його

// let dataLog = () => {
//     let data = [4, 5, 6,'vova','olya'];
//     console.log(data);
// };
// dataLog();

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3){
//         console.log(num1);
//         return num1;
//     }else if (num2 < num3 && num2 < num1){
//         console.log(num2);
//         return num2;
//     }else{
//         console.log(num3);
//         return num3;
//     }
// };
// num(8,5,2);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let num = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3){
//         console.log(num1);
//         return num1;
//     }else if (num2 > num3 && num2 > num1){
//         console.log(num2);
//         return num2;
//     }else{
//         console.log(num3);
//         return num3;
//     }
// };
// num(8,5,2);


// - створити функцію яка повертає найбільше число з масиву

// function number(){
//     let min=arguments[0];
//     let max  =arguments[0];
//     for (const element of arguments) {
//         if (element>max) max =element;
//         if (element<min) min = element;
//     }
//         return max;
// }
//
// let num=number(3,5,7,2,9,4,6);
// console.log(num)

// - створити функцію яка повертає найменьше число з масиву

// function numbers(){
//     let min=arguments[0];
//     let max  =arguments[0];
//     for (const element of arguments) {
//         if (element>max) max =element;
//         if (element<min) min = element;
//     }
//     return min;
// }
//
// let nums=numbers(3,5,7,2,9,4,6);
// console.log(nums)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// const dataLog = (data) => {
//     let i = 0;
//     for (const dataElement of data) {
//         i += dataElement;
//     }
//     return i;
// };
//
// const sume = dataLog([1,2,3,4])
// console.log(sume);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// const dataLog = (data) => {
//     let i = 0;
//     for (const dataElement of data) {
//         i += dataElement;
//     }
//     return i/data.length
// };
//
// const sume = dataLog([1,2,3,4])
// console.log(sume);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
//
// let funRandom = () => {
//     let array = [];
//     for (let i = 0; i < 100; i++){
//         array.push(Math.floor(Math.random()*100));
//     }
// return array
// };
//
// console.log(funRandom())



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let array=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let data=(arr)=> {
//     let res = [];
//     for (const arrayElement of arr) {
//         if (typeof arrayElement==="object") {
//             for (const key in arrayElement) {
//                 res.push(key);
//
//             }
//
//         }
//     }
// return res
// }
// console.log(data(array));

//

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let array=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let data=(arr)=> {
//     let res = [];
//     for (const arrayElement of arr) {
//         if (typeof arrayElement==="object") {
//             for (const value in arrayElement) {
//                 res.push(arrayElement[value]);
//
//             }
//
//         }
//     }
//     return res
// }
// console.log(data(array));

