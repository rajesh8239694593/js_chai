// 1. What is call stake in js


// In JavaScript, the call stack is a stack data structure that keeps track of function calls.
//  When a function is invoked, it's added to the call stack, and when the function completes,
//   it is removed from the stack. The call stack ensures that JavaScript executes functions in 
//   the correct order (last-in, first-out).


//2. what is js execution context


// In JavaScript, execution context is the environment in which JavaScript code is evaluated and
//  executed. It contains information about the current code being executed, such as variable
//   declarations, function calls, and the value of this.

// *****note*** js execution context ka mtlab h ki js ke file or kaisi run hogi***** iske bhi 3 phase h

// 3.how many types of js execution contexts
// a.Global Execution Context:
// b.Function Execution Context:
// c.Eval Execution Context (rarely used):

// 4. what is Global Execution Context:

// sbsi phali ye to hoge he hoge or this m rakh diya jate h
// borwser m  or node js m global execution alag hota h
// browser m ---window in browsers,
// nodejs m ----global in Node.js


// 5.what is Function/functionsl Execution Context:

// Created whenever a function is invoked.
// Each function call gets its own execution context with its own scope,
//  variables, and value of this.

// 4.what isEval Execution Context (rarely used)

// Created when code is executed inside an eval() function.

// The key differences between the eval() function and a normal function
//  in JavaScript are related to execution behavior, scope, security, and performance:

// 

// 5.what is memory creation pahase and execution phase

// Ans. memory creation phase

// example--
 let val1 = 30                 //1
 let val2 = 40                 //2

 function addNum ( num1, nuim2) {  //3
    let total = num1 + nuim2        //4
    return total                   //5
 }                                  //6

let result1 = addNum(val1, val2);    //7
let result2 = addNum(25, 30)         //8

// step-1
//   globla execution hoga or isi this me allocate kr diya jayega
// step-2
// memory creation phase---sari vaariable ko ikatha kiya jayega or unhii rakha 
// javega remember value allocate nhi ki jayegi
// like--
// val1 = undefined ---lin1
// val2 = undefined  ---line2
// addNum = defination (yani function ki defination)--line 3 to 6
// result1 = undefined  --line7
// result2 = undefined  --line8
// 
// step--3
// execution phase
// val1 = 30---lin1
// val2 = 20  ---line2

// step--4
// line--7 esecute hogii---yha pr ek or executional context tyaar hoga **1
// sbsi phli baniga yha new enviromental variable and ececutional thread
// ab wapsi se yha memory creation phase and execution phase 
// memory creation
// val1 = undefined
//  val2 = undefined
//  total = undefined

//  now execution context
// num1 = 10
//  num2 = 5
//  total = 15 /// ye total iske parent executional context ya global execution context ko return kr diya jayega
// **1 si ye delete ho gayega yani ye functin wala pura box jo bna tha wo delete ho jayega


//ab line--8 execute hogi or sari kaam waps hogii

//  now  // step--3
         // execution phase
         // val1 = 30---lin1
         // val2 = 20  ---line2
         // addnum()
         // result1 = 15
         // result2 =  esecute hogii---yha pr ek or executional context tyaar hoga **1
                     // sbsi phli baniga yha new enviromental variable and ececutional thread
                     // ab wapsi se yha memory creation phase and execution phase 
                     // memory creation
                     // num1 = undefined
                     //  num2 = undefined
                     //  total = undefined

                     //  now execution context
                     // num1 = 25
                     //  num2 = 30
                  //   total = 55 //ye total iske parent executional context ya global execution context ko return kr diya jayega
                  // **1 si ye delete ho gayega yani ye functin wala pura box jo bna tha wo delete ho jayega

//6.what is memory creation pahase and execution phase



// 7. example of callstake


// **************************
// *                        *
// *                        *
// *                        *
// **************************
// **************************
// *                        *
// *                        *
// *                        *
// **************************
// **************************
// *                        *
// *                        *
// *                        *
// **************************
// **************************
// *                        *
// *    addNum(25 , 30);    *  // after execution it will remov
// *                        *
// **************************
// **************************
// *                        *
// *   addNum(val1, val2);  *  \\ after execution it will remove
// *                        *
// **************************
// **************************
// *                        *
// *   glocbal execution    *
// *                        *
// **************************


// 8. what happen in callstake when nested function call 

// like 

// function one(){
// 
//    function two(){
//       function three(){

//       }
//    }
//   two()
//   three()
// }


// **************************
// *                        *
// *                        *
// *                        *
// **************************
// **************************
// *                        *
// *                        *
// *                        *
// **************************
// **************************
// *                        *   // lifo concept use hoge ye phli out hoga
// *       three()          *
// *                        *
// **************************
// **************************
// *                        *
// *    two()               *  
// *                        *
// **************************
// **************************
// *                        *
// *   one()                * 
// *                        *
// **************************
// **************************
// *                        *
// *   glocbal execution    *
// *                        *
// **************************



// // 9.call stake in browser source and snippet save and run\\

// function one() {
//    console.log("one")
//    one()
// }
// function two() {
//    console.log("two")
//    two()
// }
// function three() {
//    console.log("tthree")
// }
// one()
// two()
// three()