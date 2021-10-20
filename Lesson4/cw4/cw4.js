
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//
//     }
// }
// const dima= new Client(1,'Dima','Ivanov','dim@gmail.com','0673874747',['milk','juice','beer','aqua','cheese']);
// const rima= new Client(2,'Rima','Ivanova','rima@gmail.com','0678462233',['milk','juice']);
// const vova= new Client(3,'Vova','Petrov','vova@gmail.com','0673870564',['beer','aqua','cheese']);
// const vika= new Client(4,'Vika','Petrova','vika@gmail.com','0679889393',['milk','juice','beer','aqua','cheese','beer']);
// const ira= new Client(5,'Ira','Sidorova','ira@gmail.com','0671237878',['milk','juice','beer','aqua']);
// const vasya= new Client(6,'Vasya','Vasin','vasya@gmail.com','0677874848',['milk','juice','beer','aqua','cheese']);
// const kolya= new Client(7,'Kolya','Usenko','kolya@gmail.com','0672873478',['milk','juice','beer','aqua','cheese','beer','vodka']);
// const sima= new Client(8,'Sima','Simenko','sima@gmail.com','0675578493',['milk','juice','beer','aqua']);
// const dasha= new Client(9,'Dasha','Pupkina','dasha@gmail.com','0683645457',['milk','juice']);
// const petya= new Client(10,'Petya','Pupkin','petya@gmail.com','0673667587',['milk']);
//
// let client=[];
// client.push(dima,rima,vova,vika,ira,vasya,kolya,sima,dasha,petya);
// console.log(client);
//
// client.sort(function (a, b){
//     return b.order.length-a.order.length;
// });
// console.log(client);


//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function construct (model,manufacturer,year,maxSpeed,volumeEngine){
//     this.model = model;
// 	this.manufacturer = manufacturer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.volumeEngine = volumeEngine;
// 	this.driver = function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	};
// };
//     let car = {
// 	model: 'Touareg',
// 	manufacturer:'Volkswagen',
// 	year:2015,
// 	maxSpeed: 200,
// 	volumeEngine:3.0,
// 	drive: function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	},
// 	info: function () {
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			`);
// 	},
// 	increaseMaxSpeed: function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},
//
// };
//
// let driver = {
// 	name:'Vova',
// 	age : 33
// };
//
// console.log(car);
// console.log(driver);
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car{
//     constructor(model,manufacturer,year,maxSpeed,volumeEngine) {
//         this.model=model;
//         this.manufacturer=manufacturer;
//         this.year=year;
//         this.maxSpeed=maxSpeed;
//         this.volumEngine=volumeEngine;
//     };
//     drive(){
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//     };
//     info(){
//         console.log(this)
//     };
//     increaseMaxSpeed (newSpeed =0){
//         this.maxSpeed += newSpeed;
//     };
//     changeYear (newValue){
//         this.year=newValue;
//     };
//     addDriver (driver){
//         this.drive = driver;
//     }
// }
//
// const volkswagen= new Car('Touareg','Volkswagen',2015,200,3.0);
// volkswagen.info();
// volkswagen.increaseMaxSpeed(20);
// volkswagen.info();
// volkswagen.addDriver({name:'Vova',age:35})

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name,age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     };
// };
// class Prince{
//     constructor(name,age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     };
// };
//
// const marina= new Cinderella('Marina',18,36);
// const ira= new Cinderella('Ira',19,34);
// const vika= new Cinderella('Vika',19,37);
// const olya= new Cinderella('Olya',19,38);
// const anna= new Cinderella('Anna',18,39);
// const olga= new Cinderella('Olga',18,35);
// const masha= new Cinderella('Masha',18,36);
// const mila= new Cinderella('Mila',18,37);
// const lesya= new Cinderella('Lesya',18,38);
// const alla= new Cinderella('Alla',18,36);
//
// const vasya= new Prince('Vasya',20,34);
//
// let filterCinderella=[];
// let cinderella=[];
// cinderella.push(marina,ira,vika,olya,anna,olga,masha,mila,lesya,alla);
// for (const cinderellaElement of cinderella) {
//     if (cinderellaElement.size == 34){
//         filterCinderella.push(cinderellaElement)
//     }
// }
// console.log(filterCinderella);
//
// let find=cinderella.find(function (index){
//     return index.size = 34
// })
//
// console.log(find);



