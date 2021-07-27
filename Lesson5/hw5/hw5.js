// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content.textContent);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.textContent);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, similique?'

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = '<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consectetur, culpa expedita magni.</h1>'

// -- змініть кожному елементу колір фону на червоний
content.style.background='red';
rules.style.background='red';

// -- змініть кожному елементу колір тексту на синій
content.style.color='blue';
rules.style.color='blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList)

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);
for (const fcRule of fcRules) {
    fcRule.addEventListener('click',(evt => {
        console.log(fcRule.textContent)
    }))
    fcRule.addEventListener('click',(evt => {
        console.log('sdfgdfgsdfg')
    }))
}


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);
// for (const fcRule of fcRules) {
//     fcRule.style.color = 'red'
// };

