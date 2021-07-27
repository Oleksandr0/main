// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHeader=document.getElementById('main_header');
mainHeader.style.color ='red';
mainHeader.innerText= 'June-2021'

// b) робить шириниу елементу ul 400px

let ulEls=document.getElementsByTagName('ul');
console.log(ulEls);
for (const ulEl of ulEls) {
    ulEl.style.width='400px'
};


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList=document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';

}


// d) отримує текст який зберігається в елементі з класом listElement2



let listElement2 =  document.getElementsByClassName('listElement2');
for (const listElement2Element of listElement2) {
   console.log( listElement2Element.textContent)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.background = 'silver';
    liElement.style.margin = '10px'
}



// f) отримує всі елементи 'a' та додає їм клас anchor

// let aElements = document.getElementsByTagName('a');
// for (const aElement of aElements) {
//     aElement.classList.add('anchor');
// };

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElements = document.getElementsByTagName('a');

for (const aElement of aElements) {
    console.log(aElements.textContent)
};

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a


// let aElements = document.getElementsByTagName('a');
// for (const aElement of aElements) {
//     aElement.classList.add('element_xxx')
//
//     console.log(aElement)
// };

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let color=prompt('colors')
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.background = `${color}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)