//1. what is iife
// Ans. An IIFE (Immediately Invoked Function Expression) in JavaScript is a function
//  that is executed as soon as it is defined. It is commonly used to create a 
//  scope to avoid polluting the global namespace, encapsulate code, and maintain data privacy.

// function chai() {

//     console.log("immediately invoked function expression")
// }

// chai()                                  //immediately invoked function expression

//or now use iife **** wrappe the normal function in paranthis and call ({})()

// (function chai() {

//     console.log("immediately invoked function expression")
// }) ()                                                            //immediately invoked function expression

// *********note********* use semicolon at last 


//2. iife in fat arrowfunction

// (() => {
//     console.log("hello")
// }) ()                                                //hello


//3. how to give parameter and argument in iife 

// ((name) => {
//     console.log(`hello ${name}`)
// }) ("raju")                                            //hello raju


//4. what is named iife

// (function chai() {

//     console.log("immediately invoked function expression")
// }) ()                                                            //immediately invoked function expression


//5. what is named  aarow iife
// we cannot but use nested we can
// (() => {
//     const chai = () => {
//       console.log("Named arrow IIFE");
//     };
//     chai();
//   })();
  
//6. how to write two iife one by one 
// Ans. remember  semicolon



//1
