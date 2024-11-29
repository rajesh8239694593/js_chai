//1. what is array
// Ans. JavaScript arrays are resizable and can contain a mix of different data types.



//2.how to declare a array and how to access values

// const numbers = [1, 2, 3, 4, 5, 6, "hello", true] 

//  const name = ["ram", "ram", "ram"] 

// console.log(typeof numbers)                      //object

// console.log(numbers)                         //[ 1, 2, 3, 4, 5, 6, 'hello', true ]

// console.log(numbers[6])                      //hello




// 2. when we use copy operation in array it makes shallow copy how??

// means it provide call by reference **** change in origional array not copy of array


// 3.other way to define a array

// const myArr = new Array(1, 2, 3, 4,)

// console.log(myArr[3])                   //4


// *************note************
// both are same behind the scean and it automatically add []


// 4.Add this 5 in this array at the end?

// const myArr = new Array(1, 2, 3, 4,)

// myArr.push(5)           

// console.log(myArr)                    //[ 1, 2, 3, 4, 5 ]

//5.how to remove last value of array

// const myArr = new Array(1, 2, 3, 4, 5, 6)

// myArr.pop(5)           

// console.log(myArr)                          //[ 1, 2, 3, 4, 5 ]

// 6.how to add value at starting point of array

// const myArr = new Array(1, 2, 3, 4, 5, 6)

// myArr.unshift(11)         //sari array ki value shift krni padi      

// console.log(myArr)                                  
 //[
//     11, 1, 2, 3,
//      4, 5, 6
//   ]

//7.how to remove first array value 


// const myArr = new Array(1, 2, 3, 4, 5, 6)

// myArr.shift()         //sari array ki value shift krni padi      

// console.log(myArr)          //[ 2, 3, 4, 5, 6 ]    



//8. // const myArr = new Array(1, 2, 3, 4, 5, 6)
//  a.how to know 3 and 17 exist or not
//  b.how to know what is index of 3 and 17

// const myArr = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr.includes(3,4))             //false

// console.log(myArr.includes(3))                 //true

// console.log(myArr.indexOf(3))                //2

// console.log(myArr.indexOf(17))               //-1




// 9. how to convert an array in string

// const myArr = [1, 2, 3, 4, 5, 6]

// console.log(typeof myArr)                   //object

// console.log(myArr.join())                  //1,2,3,4,5,6

// console.log(typeof myArr.join())           //string



// 10.difference between slice and splice methods of array


// let myArr1 = [9, 8, 3, 4, 5, 6]

// console.log(myArr1.slice(1, 3))   //[ 8, 3 ]

// console.log(myArr1)               //[ 9, 8, 3, 4, 5, 6 ]

// let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // console.log(myArr2.splice(1, 3))  //[ 2, 3, 4 ]

// console.log(myArr2)               //[ 1, 5, 6, 7, 8, 9 ]

// **************note************

// slice-- it exclude the last index value of given and not affecting the origional array
// splice-- it include the last index of given and affect the origional array