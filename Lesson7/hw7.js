// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function myDay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('New day');
            if (time < 7) {
                console.log('Dont disturb')
                reject('Wait')
            } else {
                console.log('Wake up')
                resolve('Good morning')
            }
        }, 500);
    })
}


function coffee(coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Coffee')
            if (coffee === false) {
                console.log('is over')
                reject('need to buy')
            } else {
                console.log('Nice')
                resolve('Good drink')
            }
        }, 1200)
    })
}



function shower(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Take a shower')
            if (water < 18) {
                console.log('Waw');
                reject('a little chilly');
            } else {
                console.log('Cool')
                resolve('Nice water')
            }
        }, 1000)
    })
}

function exitFromWork(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('exit from work')
            if (time < 18) {
                console.log('stop')
                reject('the working day is not over yet')
            } else {
                console.log('end')
                resolve('go to home')
            }
        }, 400)

    })
}


function lunch(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('lunch')
            if (time < 13) {
                console.log('work')
                reject('no time for lunch')
            } else {
                console.log('time for lunch')
                resolve('rest time')
            }
        }, 1500)
    })
}


function goToShop(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Go to shop')
            if (money < 100) {
                console.log('only beer')
                reject('not enough money')
            } else {
                console.log(['beer', 'fish',])
                resolve('and something else')
            }
        }, 1000);
    })
}

function goingToWork(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Going to work')
            if (time < 8.00) {
                console.log('there is time')
                reject('Drink coffee')
            } else {
                console.log('Time')
                resolve('I need to go')
            }
        }, 800)
    })
}

function theEndOfLunch(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('the end of lunch')
            if (time<14){
                console.log('relax')
                reject('there is time')
            }else {
                console.log('time')
                resolve('I return to work')
            }
        },800)
    })
}

function dinner(food){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (food === false){
                console.log('cooking food')
                reject('nid time')
            }else {
                console.log('sit down to eat')
                resolve('nice')
            }
        },500)
    })
}

function comingBackHome(wife){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Welcome home')
            if (wife === false){
                console.log('no one meets')
                reject('I open the door with a key')
            } else {
                console.log('meets his wife')
                resolve('Nice')
            }
        },1000)
    })
}

//
// myDay(7)
//     .then((value) => {
//         console.log(value)
//
//
//         return shower(19);
//     })
//     .then((value) => {
//         console.log(value)
//
//
//         return coffee(true)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return goingToWork(8)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return lunch(13)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return theEndOfLunch(14)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return exitFromWork(18)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return goToShop(200)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return comingBackHome(true)
//     })
//     .then((value) => {
//         console.log(value)
//
//         return dinner(false)
//     })
//     .then((value) => {
//         console.log(value)
//     })
//     .catch(reason => {
//         console.log(reason)
//     })


async function newDay() {
    try {
        const day = await myDay(6)
        console.log(day);
        console.log()
    } catch (reason) {
        console.log(reason)
        console.log()
    }

    try {
        const nowShower = await shower(16)
        console.log(nowShower);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }
    try {
        const nowCoffee = await coffee(true)
        console.log(nowCoffee);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }

    try {
        const toWork = await goingToWork(8)
        console.log(toWork);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }
    try {
        const nowLunch = await lunch(13)
        console.log(nowLunch);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }
    try {
        const nowTheEndOfLunch = await theEndOfLunch(14)
        console.log(nowTheEndOfLunch);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }

    try {
        const nowExitFromWork = await exitFromWork(17)
        console.log(nowExitFromWork);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }

    try {
        const nowGoToShop = await goToShop(200)
        console.log(nowGoToShop);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }
    try {
        const nowComingBackHome = await comingBackHome(true)
        console.log(nowComingBackHome);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }
    try {
        const nowDinner = await dinner(false)
        console.log(nowDinner);
        console.log()
    } catch (e) {
        console.log(e)
        console.log()
    }

}

newDay();


