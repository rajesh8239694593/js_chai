// 1. what is scope 

// "Scope in JavaScript determines where variables and functions can be accessed.
//  It has three types: global (accessible everywhere), function (limited to the function),
//   and block (limited to {} with let or const). JavaScript also uses lexical scope, 
//   where functions access variables from their defining context, not their execution context."


// Ans .{} this is scope excluding objects curly braces

// case.1



// if(true) {
//     var a = 10
//     let b = 20
//     const c = 30
// }

// console.log(a)                                  //10
// console.log(b)                                    // /ReferenceError: b is not defined
// console.log(c)                                       //ReferenceError: c is not defined



// ***************note*************
// ***************note************
// remember that global to block scope we can use
// but block to global we can't usse


// case : 2

// let a = 100

// if(true) {
//     let a = 10
//     const b = 20
//     console.log ("inner : " + a)             //inner  10
// }

// console.log (a)                           //100


// 3. scope in windows

// ***********note ******************
// remember that scope in windows --- is different from node enviroment scope

// In the browser, global variables attach to the window object, and this at the top level
//  refers to window. In Node.js, global variables attach to the global object, and top-level 
//  this is an empty object or undefined in ES modules. Node.js also provides module-scoped 
//  variables, unlike the browser's shared global scope.



// ****//1