// 1.ways to declare a objects in js
// a. using constructor metod or singelton or 
//    
//  object.create
//  
// b.using object literals
// 
//  const user = {}
// 

// 2.best way to access objects values

// const user = {
//     myName : "rajesh",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }


//  console.log( user.myName)

//  console.log( user["myName"])    //**** best way *****/


//  3. why ( user["myName"]) they way is better to access the object value

// ************ because "fullName" : "Rajesh kumar swami",we cannot access fullname using
// user.fullName*************( user["myName"]) so this is the bestway


// const user = {
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }


//  console.log( user.fullName)           //rajesh kumar swami

//  console.log( user["fullName"])    //**** best way *****///rajesh kumar swami


//  4.how to declare a symbol ,and use as key in object,and how to print it.

// const mySym = Symbol("1234")
// const mySym1 = Symbol("1aa1")

// const user = {
//     "mySym" : "1234",
//     [mySym1] : "1aa1",
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// console.log(user)     //  email: 'rajesh@gmail.com',
//                         isLoggedIn: false,
//                         lastLoginDays: [ 'Monday', 'Saturday' ],
//                         [Symbol(1aa1)]: '1aa1'
                    
//  console.log( user.mySym)                 //1234
//  console.log( typeof (user.mySym))         //string  ** iska type symbol anna chaeyii

//  console.log( user[mySym1])               //1aa1

//  console.log(typeof mySym1);               //symbol


//5.  Why typeof user[mySym1] is "string"
// The typeof operator checks the value, not the key. In your code:

// The key [mySym1] is a Symbol.
// The value assigned to it ("1aa1") is a string.
// Thus, typeof user[mySym1] gives "string", as you're checking the type of the value, not the type of the key.


// 6.how to change object values like change the email address

// const user = {
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// user.email = "james@gmail.com"

// console.log(user.email)                    //james@gmail.com


// 7.how to lock a object so noone can change in indivisual objects.


// const user = {
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// const lookObject = Object.freeze(user)

// user.isLoggedIn = true

// console.log(user.isLoggedIn)                 //false//because you already you freeze the object


// 8.how to assign a function in object

// const user = {
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// user.greeting = function (){
//     console.log("Hello Js user")
// }

// console.log(user)                            //{
                                            //     myName: 'rajesh',
                                            //     fullName: 'rajesh kumar swami',
                                            //     age: 32,
                                            //     location: 'jaipur',
                                            //     email: 'rajesh@gmail.com',
                                            //     isLoggedIn: false,
                                            //     lastLoginDays: [ 'Monday', 'Saturday' ],
                                            //     greeting: [Function (anonymous)]
                                            // }
// console.log(user.greeting)                 //[Function (anonymous)]

// console.log(user.greeting())                //Hello Js user
                                               // undefined
// 


// 9.print name using a function 

// const user = {
//     myName : "rajesh",
//     "fullName" : "rajesh kumar swami",
//     age : 32,
//     location : "jaipur",
//     email : "rajesh@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// user.greeting = function () {
//     console.log (`Welcome ${this.fullName}`)
// }

// console.log(user.greeting())                        //Welcome rajesh kumar swami
                                                    // undefined
// 


// 10.how to use  use of this in objects