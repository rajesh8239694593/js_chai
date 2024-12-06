// 1.How to declare a singleton object and how to assign in values
// const tinderUser = new Object()
// tinderUser.name = "Rajesh";
// tinderUser.age = 32;
// tinderUser.isLoggedIn = false;

// // Assign values using bracket notation
// tinderUser["email"] = "rajesh@gmail.com";
// tinderUser["location"] = "Jaipur";

// // Output the object
// console.log(tinderUser);

// {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

// 2.how to declare nonsingleton object
  
//  const tinderUser = {}

//  tinderUser.name = "Rajesh";
// tinderUser.age = 32;
// tinderUser.isLoggedIn = false;

// // Assign values using bracket notation
// tinderUser["email"] = "rajesh@gmail.com";
// tinderUser["location"] = "Jaipur";

// // Output the object
// console.log(tinderUser);

// {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

// *************behaind the scene both are same*************


// 3.how many nested object we make and how to assess them
//  ***********infinite************

// const user = {
//     email : "rajesh@gmail.com",
//     userDetails : {
//         myName : {
//             firstName : "rajesh",
//             lastName : "swami"
//         }
//     }
// }

// console.log(user.userDetails.myName.lastName)                   //swami


// 4. what is optional chaining and how it useful

// like user? === it means that it is exist or not


// 5.how to combine or merge two or more objects

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}

// const obj3 = { obj1, obj2 }

// console.log (obj3)      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// or

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}
// const obj4 = {5 : "c", 6 : "d"}

// const obj3 = Object.assign( obj1, obj2, obj4)

// console.log (obj3)            //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

// Object.assign( target, source )
// so always use Object.assign( {}, obj1, obj2)// it will gauranted convert in a target object

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}
// const obj4 = {5 : "c", 6 : "d"}

// const obj3 = Object.assign( {}, obj1, obj2, obj4)

// console.log (obj3)                         //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

// or

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}
// const obj4 = {5 : "c", 6 : "d"}

// const obj3 = {...obj1, ...obj2, ...obj4}

// console.log (obj3)                           //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }


// *************note **********

//6. best practise to combine an objects 
// a. using Object.assign( {}, obj1, obj2, obj4)
// b. using {...obj1, ...obj2, ...obj4}


// 7. difference between spread operator and rest operator


// 8.how to get all key of a object


// const user = {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

//   console.log(Object.keys(user))             //[ 'name', 'age', 'isLoggedIn', 'email', 'location' ]


// 9.how to get all values of a objects

// const user = {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

//   console.log(Object.values(user))         //[ 'Rajesh', 32, false, 'rajesh@gmail.com', 'Jaipur' ]

// 10.how to get all key and values of object in array

// const user = {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

//   console.log(Object.entries(user)) 

//   [
//     [ 'name', 'Rajesh' ],
//     [ 'age', 32 ],
//     [ 'isLoggedIn', false ],
//     [ 'email', 'rajesh@gmail.com' ],
//     [ 'location', 'Jaipur' ]
//   ]


// 11.how to check this property in object exist or not like value and key check both

// const user = {
//     name: 'Rajesh',
//     age: 32,
//     isLoggedIn: false,
//     email: 'rajesh@gmail.com',
//     location: 'Jaipur'
//   }

//   console.log(user.hasOwnProperty("location"))                 //true

//   console.log(Object.values(user).includes('Jaipur'))          //true