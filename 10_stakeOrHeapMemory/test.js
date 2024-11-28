// 1.how to reserve memory and free in early language
// Ans. like c and c++ you have to reserve memory and relese memory yourslef


// 2.how many type memory in js
// Ans.a. stake memory ( for premitive data type ** call by value ** copy of variable )
//      *****************changes in copy of variable *********
//     b. heap memory  ( for non premitive data type ** call by reference ** call by reference
//      *****************changes in original object or array  *********


// 3.example of stake memory and heap memory



//     ************************             *********************************
//     *                      *             *                               *
//     *                      *             *                               *
//     ************************             *                               *
//     ************************             *                               *
//     *       userTwo        *             *                               *
    // *                      *             *                               *
//     ************************             *                               *
//     ************************             *                               *
//     *       userOne        *             *                               *
//     *                      *             *                               *
//     ************************             *                               *
//     ************************             *      let userOne =            *
//     *    myName            *             *                               *
//     *                      *             *          {                    *
//     ************************             *         user : "james",       *
//     ************************             *             age : 30          *
//     *      changeMyName    *             *                               *
//     *                      *             *            }                  *
//     ************************             *                               *
//     ************************             *                               *
//     *        myName        *             *                               *
//     *                      *             *                               *
//     ************************             *********************************


//         STAKE MEMORY                            HEAPE MEMORY




//1.  let myName = "rajesh";

// let changeMyName = myName

// console.log(changeMyName)

// changeMyName = "raju"

// console.log(changeMyName)

// console.log(myName)



//2. let userOne = 
// { 
//     user : "james",
//      age : 30
// }

// let userTwo = userOne

// userTwo.age = 50


// console.log(userOne.age)

// console.log(userTwo.age)