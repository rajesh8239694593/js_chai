// 1. how to concate two array

//  const marvalHeros = ["ironMan", "spiderMan", "thor"]

//  const dcHeros = ["superMan", "flash", "batMan"]

//  let mixHeros = marvalHeros.push(dcHeros);

//  console.log(mixHeros)                           //4

//  console.log(marvalHeros)                       //[ 'ironMan', 'spiderMan', 'thor', [ 'superMan', 'flash', 'batMan' ] ]

//  console.log(marvalHeros[3][1])                 //flash

//  or

// const marvalHeros = ["ironMan", "spiderMan", "thor"]

// const dcHeros = ["superMan", "flash", "batMan"]

// const mixHeros = marvalHeros.concat(dcHeros)

// console.log(mixHeros)                       //[ 'ironMan', 'spiderMan', 'thor', 'superMan', 'flash', 'batMan' ]

// console.log(mixHeros[4])                   //flash

// or

// const marvalHeros = ["ironMan", "spiderMan", "thor"]

// const dcHeros = ["superMan", "flash", "batMan"]

// const mixHeros = [...marvalHeros, ...dcHeros]

// console.log(mixHeros)                       //[ 'ironMan', 'spiderMan', 'thor', 'superMan', 'flash', 'batMan' ]

// console.log(mixHeros[4])                   //flash


// *************note****************

// best way to add two or more array spred operator (...) because there is no limit



// 2.how to give convert nested array in a single array

// const numbers = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], ], 11]

// console.log (numbers.flat(1))             //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ], 11 ]
// console.log (numbers.flat(2))             //[ 1, 2, 3, 4, 5, 6, 7, 8,  9, 10, 11 ]
// console.log (numbers.flat(Infinity))      //[ 1, 2, 3, 4, 5, 6, 7, 8,  9, 10, 11 ]

// const sinleArr3 = numbers.flat(Infinity)



// 3.how to know this is array or not 

// const numbers = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], ], 11]
// console.log(Array.isArray("hello"))                  //false


// 4.console.log(Array.isArray("hello")) convert this in a array

// console.log(Array.from("hello"))                         //[ 'h', 'e', 'l', 'l', 'o' ]


// 5.{name : "rajesh"}  convert this in array

// console.log(Array.from({name : "rajesh"}))              //[]

// console.log(Array.from(Object.values({ name: "rajesh" })));   //[ 'rajesh' ]

// console.log(Array.from(Object.keys({ name: "rajesh" })));     //[ 'name' ]

// console.log(Array.from(Object.entries({ name: "rajesh" })));    //[ [ 'name', 'rajesh' ] ]

// 6. how to convert multiple variable in array


// let score1 = 100

// let score2 = 200

// let score3 = 300


// console.log(Array.of(score1, score2, score3))                      //[ 100, 200, 300 ]