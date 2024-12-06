// 1. how nested scope work in functions

// function one () {
//     const username = "rajesh"

//     function two() {
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log (website)

//     two()
// }

// console.log(one())

// 1.first error :ReferenceError: website is not defined// because block to global wrong
// 2.rajesh
    // undefined--
// *******note**** we have to call functions

// 2.how to nested scope work in if---else


// if ( true ) {
//     const username = "rajesh"
//     if (username == "rajesh" ){
//         const website = "youtube"
//         console.log(username + "" + website)
//     }
//     // console.log(website);
// }

// console.log(username)

// error first : ReferenceError: website is not defined
// error second : ReferenceError: username is not defined // cannot access username outside block

//  rajesh youtube



// 4. what happen if a normal  function call before declaration scop same thing we do with a expression 
// function

// // case : 1
// function addone (num1) {
//     return num1 + 1
// }

// console.log (addone(5))                    //6


// case: 2

// console.log (addone(5))
// function addone (num1) {
//     return num1 + 1
// }                                       //6

// // case : 3

// const myFun = function ( num1 ){

//     return num1 + 1

// }

// console.log(myFun(5))                     //6



// case : 3

// console.log(myFun(5))  
// const myFun = function ( num1 ){

//     return num1 + 1

// }
//   ReferenceError: Cannot access 'myFun' before initialization



// *****//1