// 1.how to work while loop

//syntex

// while(condition){
     //body
     //++/--
// }

// example

// while(i >= 10){
//     let i = 0;
//      console.log(i)
//      i++
// }                     //ReferenceError: i is not defined

//or

// let i = 0;
// while(i <= 10){
//      console.log(i)
//      i++
// } 
// ********note****** i should be declared outside block otherwise it will occar error

//or


// let i = 0;
// while(i <= 10){
//      console.log(i)
//      i = i+2
// } 


// 2. how to while loop in array

// const myArr = ["superman", "flash", "xman"]
// let myar = 0
// while(myar < myArr.length){
//     console.log (`value is ${myArr[myar]}`)
//     myar++
// }


//3.working of do while loop

//syntex

// do{
//     statement
//     ++/--
// }while(condition)

// example

// let score = 0;

// do{
//     console.log(`print score ${score}`)
//     score++
// }while (score <= 10 )

//or

let score = 11;

do{
    console.log(`score is ${score}`)
    score++
}while (score <= 10 )