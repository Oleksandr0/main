// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function num(a1,a2) {
//     return a1*a2
// }
// console.log(num(10,30))

// - створити функцію яка обчислює та повертає площу кола

// function circle(p,a){
//     return p*Math.pow(a,2)
// }
// console.log(circle(3.14,2))
// - створити функцію яка обчислює та повертає площу циліндру

// function cylinder(p,r,h){
//     return 2*p*r*h
// }
//
// console.log(cylinder(3.14,2,3))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function number(){
//     let min=arguments[0];
//     let max  =arguments[0];
//     for (const element of arguments) {
//         if (element>max) max =element;
//         if (element<min) min = element;
//     }
//     console.log(max)
//     return min;
// }
//
// let num=number(3,5,7,2,9,4,6);
// console.log(num)

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

//   function www(text){
//       document.write(`<div>${text}</div>`)
//
//
//
//   }
// www('Lorem ipsum dolor sit.')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//   function xxx(text){
//       document.write(`<ul>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                          <li>${text}</li>
//
//                      </ul>`)
//   }
// xxx('Lorem ipsum dolor sit amet.')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function xxx(text,n) {
//     for (let i = 0; i < n; i++) {
//         document.write(`<ul>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                      </ul>`)
//
//     }
// }
//
// xxx('Lorem ipsum dolor sit amet.',9);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let data=[12, 13, 'vova', 'olya', true, false];
// let array=[];
// for (const dataElement of data) {
//     array.push(dataElement)
// }
//
// console.log(array)