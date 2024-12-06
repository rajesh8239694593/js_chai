// 1. what is control flow in js 

// ntrol flow in JavaScript refers to the order in which the code is executed.
//  By default, JavaScript executes code from top to bottom in a single thread. 
// However, developers can control the execution flow using various constructs
//  like conditionals, loops, and functions.


// 2. operator in js type---
// a. Arithmetic Operators---  +, -, *, /, %, **
// b. Assignment Operators--- =, -=, +=, /=, *=, %/
// c. Comparison Operators-- ==, ===, !=, !===, <, >, <=, >=
// d. Logical Operators--   &&, ||, !
// e. Bitwise Operators-- &, |, ^, ~, <<, >>
// f. String Operators -- +, +=
// g. Type Operators -- typeof, instanceof
// h. Special Operators
    //1. Ternary Operator (? :)
    //2. Spread (...)
    //3. Nullish Coalescing (??)
    //4. Optional Chaining (?.)


// 3. if statement syntex

// if (condition){
//     //ye code thabi execute hoga jb conditon true hogi
// }

// or

// const userLoggedIn = true

// if(userLoggedIn){
//     console.log("hello")
// }


// if ( 2 == "2")
// {
// console.log("wow auto typecast")
// }                                              //wow auto typecast

// if ( 2 === "2")
//     {
//     console.log("wow auto typecast")
//     }                                             //nothing output because it is false so code not execited


// if ( 2 != 3)
//     {
//     console.log("wow auto typecast")
//     }                                              //wow auto typecast



// let score = 500

// if (score > 100){
//   const power = "fly"
//   console.log(`user power ${power}`)             //user power fly
// }
// console.log(`user power ${power}`)              //power is not defined --block to global not

// **********//shortHand of if //************* */
//*********this is called implicit scope mean js ni maan liya h ki */

// let balance = 1000

// if (balance > 500 ) console.log("yes");   //yes

//4. if__else 

// if(true){

// }else{

// }

//5.nesting if-elseif-else

// let balance = 1000

// if ( balance < 200 ){
//     console.log( "balance is less than 200")
// }else if (balance < 400 ){
//     console.log( "balance is less than 400")
// }else if (balance < 800 ){
//     console.log( "balance is less than 800")
// }else {
//     console.log( "balance is less than 1200")
// }                                                    //balance is less than 1200


// let userLoggedIn = true
//  let isDebitCard = true
//  let isWatchAds = true
//  if (userLoggedIn && isDebitCard && isWatchAds){
//    console.log("you can buy")
//  }                                           //you can buy


//  let userLoggedIn = true
//  let isDebitCard = true
//  let isWatchAds = false
//  if (userLoggedIn && isDebitCard && isWatchAds){
//    console.log("you can buy")
//  }                                                   //output nothing because condition false so won't executed body

// let userLoggedInGoogle = true
// let userLoggedInEmail = false

// if ( userLoggedInEmail || userLoggedInGoogle ){
//    console.log( `wlcome  ${ (userLoggedInEmail) ? "logged by email" : "logged by google" }`)}
//wlcome  logged by google


// 6. how work switch -case

// syntex

// switch(key){
//     case value:
//         break;
        
//         case value:
//             break;

//             default:
//                 break
// }


// const month = 3;

// switch(month){
//     case 1:
//         console.log(`the month is ${month}`)
//         break;
//     case 2:
//         console.log(`the month is ${month}`)
//         break;
//     case 3:
//         console.log(`the month is ${month}`)
//         break;
//     case 4:
//         console.log(`the month is ${month}`)
//         break;
//     default :
//         console.log("no case match")
//         break;

// }

// const month = "january";

// switch(month){
//     case "january":
//         console.log(`the month is ${month}`)
//         break;
//     case "feburary":
//         console.log(`the month is ${month}`)
//         break;
//     case "march":
//         console.log(`the month is ${month}`)
//         break;
//     case "april":
//         console.log(`the month is ${month}`)
//         break;
//     default :
//         console.log("no case match")
//         break;

// }                   //the month is january


// 7. what is truthy or falsly value
// when you assume the value truth aand false

// const userEmail = "rajesh"

// if ( userEmail ){
//     console.log("logged in")
// }else{
//     console.log("donot logged in")
// }                                      //logged in

// const userEmail = ""

// if ( userEmail ){
//     console.log("logged in")
// }else{
//     console.log("donot logged in")
// }                                          //donot logged in

// const userEmail = []

// if ( userEmail ){
//     console.log("logged in")
// }else{
//     console.log("donot logged in")
// }                                             //logged in


// 8. how many falsly values
// false, 0, -0, Bigint 0n, "", null, undefine, NaN

// 9.how many truthly values 
// "0", "false", " ", {}, [], function(){}
// **********note ******* string m space de diya to truthy m aayega


// 10.how to check empty array

// const userEmail = [];

// if (userEmail.length === 0 )  {
//  console.log("array is empty")
// }                                              //array is empty

// const user = {};

// if (Object.keys(user).length === 0 )  {
//  console.log("object is empty")
// }                                               //object is empty



// 11.important thing to remember

// console.log(false == 0)                           //true

// console.log(false == '')                           //true

// console.log(0 == '')                                  //true


// 12.what is nulllish coalescing operator ??:
// **** sari ki sari khani undefined or null pr tikki h
// jb hum database si value leti h to humari pass null bhi aa skti or undfined bhi
// taki pura datastructor na bigdaii

// let value;
//   value = 5 ?? 10;

//   console.log(value)                //5


// let value;
//   value = null ?? 10;

//   console.log(value)                //10


// let value;
//   value = undefined ?? 10;

//   console.log(value)                    //10

// let value;
//   value = null ?? 7 ??15

//   console.log(value)                      //7

// ********note*******
// in reality m ye function use hota h
//  value = null ?? function(){}


// 13.terunary operator syntex

// condition ? true : fals

// example-- 
//  
// const isPrice = 100

// isPrice > 80 ? console.log("hello") : console.log("sorry")         //hello


