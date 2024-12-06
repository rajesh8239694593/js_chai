// 1.what is this keyword
// ans. this keyword refer current context

// 2. what is arrow function

// "Arrow functions, introduced in ES6, are a concise syntax for writing functions in JavaScript. 
// They differ from regular functions by lexically binding this, meaning they inherit this from 
// their surrounding context, which simplifies handling in callbacks and event listeners. They’re 
// ideal for functional programming, with a clean syntax for operations like map, filter, and reduce.

// const user = {
//     username : "rajesh",
//     price : 999,

//     welcomemessage : function () {
//         console.log(`${this.username} ,  welcome to this website`)
//     }

// }
// // console.log(user.welcomemessage)                     //[Function: welcomemessage]
// // console.log(user.welcomemessage())                     // rajesh ,  welcome to this website
// user.username = "sam"
// console.log(user.welcomemessage())                       //sam ,  welcome to this website
// console.log(user.welcomemessage(this))                   //sam ,  welcome to this website
// console.log(this)                                          //{}

// ***********note***************
// console.log(this)  run this code on node enviroment and after that run on console what will happen


// 3. 

// function compThis () {
//     console.log(this)
// }

// console.log(compThis())                               //return node.js global object

// 4. 

// function compThis () {
//     let username = "rajesh"
//     console.log(this.username)
// }

// console.log(compThis())                        //undefined because ye object m he kamm kriga


// 5.how to declare arrow function and what is benefits

// const chai = () => {
//     let name =  "rajesh"
//     console.log( this.name)
// }

// console.log(chai())                             //undefined


// // 6. basic syntex of arrow function

// const addtwo = (num1, num2) => {

//     return num1 + num2
// }
// console.log(addtwo(5, 6))                         //11

// 7. implicit return of arrow function
    // ********** remove curly braces and return return keyword for shorten
// const addtwo = (num1, num2) => num1 + num2

// console.log(addtwo(5, 6))                      //11

//or

// const addtwo = (num1, num2) => (num1 + num2)

// console.log(addtwo(5, 6))                          //11

// ************note*****************
// if you use curly braces so you have to use return keyword


// 8. when you written an object using fat arrow function

// const addtwo = (num1, num2) => ({username: "rajesh"})

// console.log(addtwo(3, 4))                                        //{ username: 'rajesh' }


//9.arrow function loop 

// const myArrr = [2, 3, 4, 5, 6]

// myArrr.forEach((curElm) => {
//     console.log(curElm*4)
// })

//8
// 12
// 16
// 20
// 24



// *****//1