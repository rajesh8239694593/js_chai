// 1.what is the base of dataType classification
// And. a.how to store data in memory and how to access data from memory
//      b.like permitive data type == call by value ** provide copy a variable
//          ** change in copy not in origional value
//      c.non permitive data type  == call by refernce ** provide reference 
//          ** change in origional value not in copy

// 2. how many premitive data type //call by value ----memory ka reference/address nhi diya jata 
//    value ko copy kr k diya jata h 
// Ans. 1.string //
//      2.number   //2**53-1
//      3.bigint
//      4.null   //standalone value
//      5.undefined //variable not assign value
//      6.boolean
//      7.symbol  //use for make a value unique  //button

//  3.how many non premitive data type // memory me refernce allocate kiya jata
//   **********note************
//    non permitive ka return object he aata h
        
        // 1.array
        // 2.object
        // 3.functions




//  4.how to master in java script-- master in two things
//  Ans.1.objects of js
//  ans.2.browse events


//  5.js is static or dynamic -- kisi lang m yadi variable ka type defined krti h to--
//  Ans. 


//  6.how to use symbol

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log( id === anotherId )                    //false   // because behaind the scene it is unique
// console.log( id )                                  //Symbol(123)
// console.log(typeof id )                            //symbol
// console.log(typeof anotherId )
//  7.how to use bigint
//  const bigNumber = 80809897978425252534535353352

//  console.log(bigNumber);                               //8.080989797842524e+28

    //   or


//  const bigNumber = 80809897978425252534535353352n

//  console.log(bigNumber);                                    //80809897978425252534535353352n


// 8.how to define array

// const persons = ["ram", "shyam", "ghanshyam"]

// const numbers = [1, 2, 3, 4]

// console.table([persons, numbers])

// ┌─────────┬───────┬─────────┬─────────────┬───┐
// │ (index) │ 0     │ 1       │ 2           │ 3 │
// ├─────────┼───────┼─────────┼─────────────┼───┤
// │ 0       │ 'ram' │ 'shyam' │ 'ghanshyam' │   │
// │ 1       │ 1     │ 2       │ 3           │ 4 │
// └─────────┴───────┴─────────┴─────────────┴───┘


    //   or

    // const persons = ["ram", "shyam", "ghanshyam"]

    // const numbers = [1, 2, 3, 4]
    
    // console.log(persons)                              //[ 'ram', 'shyam', 'ghanshyam' ]

    // console.log(numbers)                                 //[ 1, 2, 3, 4 ]

    // console.log(persons, numbers)                      //[ 'ram', 'shyam', 'ghanshyam' ] [ 1, 2, 3, 4 ]

// 9.how to declare objects in js

// let details ={ name : "rajesh", age : 30 }

// console.log(details.name)                                  //rajesh


// 10. how declare a function

// const myFunction = function  (){
//     console.log("hello World")
// }

// console.log(myFunction)                                         //[Function: myFunction]
// console.log(typeof myFunction)                                  //function

// or


// const myFunction = function hello (){
//     console.log("hello World")
// }

// console.log(myFunction)                                          //[Function: hello]
// console.log(typeof myFunction)                                   //function