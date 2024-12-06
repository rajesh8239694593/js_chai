// 1.What is function and how to define it and call it


// function sayMyName (){
//     console.log("r")
//     console.log("a")
//     console.log("j")
//     console.log("e")
//     console.log("s")
//     console.log("h")
// }

// console.log(sayMyName)              //wrong [Function: sayMyName]
// console.log(sayMyName())            // write


// 2.difference between return and print a value in a functions 
//  diff between parameter and arguments

// case:1

// function addTwoNumber(num1, num2){
//     console.log( num1 + num2 )
// }


// addTwoNumber()                            //NaN
// addTwoNumber(3,5)                         //8

// addTwoNumber(3,"a")                        //3a
// addTwoNumber(3, null)                     //3


// case:2

// function addTwoNumber(num1, num2){
//     console.log( num1 + num2 )
// }



// const result = addTwoNumber(3,5)  

// console.log("Result : " + result)                   // 8
                                                    //Result : undefined
//or

// case:3


// function addTwoNumber(num1, num2){
//     result =  num1 + num2 
//     return result
// }



// const result1 = addTwoNumber(3,5)  

// console.log("Result : " + result1)             //Result : 8


// case:4  --- rajesh never execuate because it is after return no line execute in function
// because in function after return nothing execute

// function addTwoNumber(num1, num2){
//     result =  num1 + num2 
//     console.log("hello")
//     return result
//     console.log("hello")
// }



// const result1 = addTwoNumber(3,5)  

//                                                 //hello
// console.log("Result : " + result1)              //Result : 8


//case : 5 ---best way to write a function

// function addTwoNumber(num1, num2){

//         return  num1 + num2  
// }



// const result1 = addTwoNumber(3,5)  
                                            
// console.log("Result : " + result1)     //Result : 8


// 3.write a function to greet user login

// function userLongin(username) {
//     return `${username} just logged in`
// }

// console.log (userLongin("rjesh"))             //rjesh just logged in

// console.log (userLongin(""))                  // just logged in

// console.log (userLongin())                      //undefined just logged in


//4. console.log (userLongin()) ===undefined just logged in
// how to overcome this situation


// function userLongin(username) {
//     if (username === undefined ){
//       console.log("plz enter username")
//     }
//     return `${username} just logged in`
// }


// console.log (userLongin())                   //plz enter username
//                                             undefined just logged in


// case:2

// function userLongin(username = "sam") {
//     if (!username){
//       console.log("plz enter username")
//     }
//     return `${username} just logged in`
// }

// // console.log (userLongin("rjesh"))             //rjesh just logged in

// // console.log (userLongin(""))                  // just logged in

// console.log (userLongin()) 


//write a function when user logged in print that hello user