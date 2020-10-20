const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// for( let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

// basket.forEach(item => {
//     console.log(item);
// })

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - see the object properties
//enumerating - is for objects - properties of an object are called enumerables
for (item in detailedBasket) {
    console.log(item)
}