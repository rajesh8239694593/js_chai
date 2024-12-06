// 1.in shopping cart we dont know how much grocery he would buy so how to calcuate cart price

// case : 1

// function calcuateCartValue (num1) {
   
//     return num1
// }

// console.log(calcuateCartValue(100, 200, 300, 400))                    //100

// *************to solve this use rest operator**********



// function calcuateCartValue (...num1) {
   
//     return num1
// }

// console.log(calcuateCartValue(100, 200, 300, 400))    //[ 100, 200, 300, 400 ]


// case : 2


// function calcuateCartValue (val1, val2, ...num1) {
   
//     return  num1
// }

// console.log(calcuateCartValue(100, 200, 300, 400))  //[ 300, 400 ] ---phali wali value val1 m dusri val2



// 2. how to pass a object in function and get value of this object


// const user = {
//     myName : "rajul",
//     price : 400
// }

// function intro (anyobject) {
//    return `my name is ${anyobject.myName} and i have ${anyobject.price} rupees`
// }

// console.log(intro(user));    //my name is rajul and i have 400 rupees


// or yadi price ko prices kr diya to 

// const user = {
//     myName : "rajul",
//     prices : 400
// }

// function intro (anyobject) {
//    return `my name is ${anyobject.myName} and i have ${anyobject.price} rupees`
// }

// console.log(intro(user)); 


// or
// case : pass a object when call a functions

// function intro (anyobject) {
//    return `my name is ${anyobject.myName} and i have ${anyobject.price} rupees`
// }

// console.log(intro({
//     myName : "hello",
//     price : 700000
// }));                           //my name is hello and i have 700000 rupees


// 3.how to pass a array in function

// const myNum = [100, 800, 700, 600, 500, 300]

// function getSecondValue (getArray) {
//     return getArray[1]
// }

// console.log(getSecondValue(myNum))               //800


//case : 2  how to pass array when calling a functions


// function getSecondValue (getArray) {
//     return getArray[1]
// }

// console.log(getSecondValue([5, 7, 6, 3, 2, 1, 8]))             //7



// ****//1

