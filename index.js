// // create object with new(operator) and with literal of object
// const person = new Object ({
//     name: "Farxod",
//     age: 27,
//     greet() {
//         console.log('Hello')
//     }
// })

// // create the method of the object's prototype 
// Object.prototype.sayHi = () => {
//     console.log('Good morning!')
// }

// // create the prototype of person object of the praent class object
// const farxod = Object.create(person)


// ========================================================================

// function hello() {
//     console.log('hello', this)
// }

// const person = {
//     name: "Farxod",
//     age: 27,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, phone) {
//         console.group(`${ this.name } info:`)
//         console.log(`Name is ${ this.name }`)
//         console.log(`Job is ${job}`)
//         console.log(`Phoen is ${phone}`)
//         console.groupEnd()
//     }
// }


// const lena = {
//     name: "elena",
//     age: 22
// }

// person.logInfo.bind(lena)()

// const lenaInfoLog = person.logInfo.bind(lena, 'web-develop', '125-58-96')
// lenaInfoLog()

// person.logInfo.bind(lena, 'web-develop', '125-58-96')()

// person.logInfo.call(lena, 'web-develop', '125-58-96')

// person.logInfo.apply(lena, ['web-develop', '125-58-96'])

//======================================================================

// const arr = [1, 2, 3, 4, 5]

// // Array.prototype.multBy = function(n) {
// //     return this.map((i) => {
// //         return i * n
// //     })
// // }

// // console.log(arr.multBy(2))

// const newArr = arr.map((i) => i * 7)
// console.log(newArr)
// console.log(arr)

// =====================================================================
console.log('request data...');

const p = new Promise((resolve, reject) => {
     setTimeout(() => {
         console.log('prepairing data...........');
         const backendData = {
             server: 'aws',
             port: 3000,
             status: 'fetching'
         }
     },3000)
})