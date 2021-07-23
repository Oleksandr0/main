// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let funRandom = () => {
//     let array = [];
//     for (let i = 0; i < 100; i++){
//         array.push(Math.floor(Math.random()*100));
//     }
// return array
// };
//
// console.log(funRandom())


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.floor(Math.random()*num));
//     }
// return array
// };
// console.log(funRandom(50,30))



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.floor(Math.random()*num));
//
//         array.sort(function (a, b){
//             return a-b;
//         })
//     }
// return array
//
// };
// console.log(funRandom(50,30))

// let numbers = [12,35,1,44,57,68,2,14,33,49,30,3,15,32,11]
// numbers.sort(function (a, b){
//     return a-b;
// })
// console.log(numbers)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.floor(Math.random()*num));
//
//     let number=array.filter(function (a){
//             return a %2==0;
//         })
//         console.log(number)
//     }
// return array
//
// };
// console.log(funRandom(4,40))


// let numbers=[1,15,14,33,56,82,32,77];
// let num=numbers.filter(function (number){
//     return number %2==0;
// })
// console.log(num)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// let numbers=[1,15,14,33,56,82,32,77];
// let num=numbers.map(function (value){
//     return String(value);
//
// });
// console.log(num);
//
// let funRandom = (a, b) => {
//     let array = [];
//     for (let i = 0; i < a; i++){
//         array.push(Math.floor(Math.random()*b));
//
//     let number=array.map(function (value){
//             return String(value);
//         })
//         console.log(number)
//     }
// return array
//
// };
// console.log(funRandom(4,40))


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

class User{
    constructor(id,name,surname,email,phone) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;

    }
}
const dima= new User(1,'Dima','Ivanov','dim@gmail.com','0673874747');
const rima= new User(2,'Rima','Ivanova','rima@gmail.com','0678462233');
const vova= new User(3,'Vova','Petrov','vova@gmail.com','0673870564');
const vika= new User(4,'Vika','Petrova','vika@gmail.com','0679889393');
const ira= new User(5,'Ira','Sidorova','ira@gmail.com','0671237878');
const vasya= new User(6,'Vasya','Vasin','vasya@gmail.com','0677874848');
const kolya= new User(7,'Kolya','Usenko','kolya@gmail.com','0672873478');
const sima= new User(8,'Sima','Simenko','sima@gmail.com','0675578493');
const dasha= new User(9,'Dasha','Pupkina','dasha@gmail.com','0683645457');
const petya= new User(10,'Petya','Pupkin','petya@gmail.com','0673667587');

//console.log(dima)

let user=[];

user.push(dima,rima,vova,vika,ira,vasya,kolya,sima,dasha,petya)

console.log(user);
let filter=user.filter(function (users){
    return users.id %2==0;

});
console.log(filter);

user.sort(function (a, b){
    return b.id-a.id;
});
console.log(user);

