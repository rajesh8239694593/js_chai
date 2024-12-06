// 1. how many iterator in js--object, arr, string

// 2. working of for of loop

//on array

// const myArr = [1, 2, 5, 7, 3, 3]

// for (const num of myArr){
//     console.log(num)
// }

//on string

// greetings = "hello world"
// for(const greet of greetings){
//     console.log(`each charctor is ${greet}`)
// }

//or

// greetings = "hello world"
// for(const greet of greetings){
//     if(greet == " "){
//         continue;
//     }
//     console.log(`each charctor is ${greet}`)
// }


// 3. map in js

// The Map object holds key-value pairs and remembers the original insertion 
// order of the keys. Any value (both objects and primitive values) may be
//  used as either a key or a value.

// let map = new Map()
// map.set("IN", "india")
// map.set("GR", "germany")
// map.set("fr", "france")
// map.set("AUS", "australiya")
// console.log(map)

//output

//Map(4) {
//     'IN' => 'india',
//     'GR' => 'germany',
//     'fr' => 'france',
//     'AUS' => 'australiya'
//   }

// map m value unique rhaigi or jis order m kiya h us order m rihigi dublicate value print nhi kriga


// let map = new Map()
// map.set("IN", "india")
// map.set("GR", "germany")
// map.set("fr", "france")
// map.set("AUS", "australiya")
// map.set("fr", "france")
// console.log(map)

//Map(4) {
//     'IN' => 'india',
//     'GR' => 'germany',
//     'fr' => 'france',
//     'AUS' => 'australiya'
//   }

//5. how to implement for of loop on map

// let map = new Map()
// map.set("IN", "india")
// map.set("GR", "germany")
// map.set("fr", "france")
// map.set("AUS", "australiya")
// map.set("fr", "france")

// for (const key of map){
//     console.log(key)
// }

//output

// [ 'IN', 'india' ]
// [ 'GR', 'germany' ]
// [ 'fr', 'france' ]
// [ 'AUS', 'australiya' ]


// key or value of alge alge print krna ho // yani array destracturing

// let map = new Map()
// map.set("IN", "india")
// map.set("GR", "germany")
// map.set("fr", "france")
// map.set("AUS", "australiya")
// map.set("fr", "france")

// for (const [key, value] of map){
//     console.log(key ,"-:", value)
// }

//output

// IN -: india
// GR -: germany
// fr -: france
// AUS -: australiya


//6. how to implement for--of loop on objects 


// const games = {
//     game1 : "nfs",
//     game2 : "cruseder",
//     game3 : "spiderMan"
// }

// for( const game of games){
//     console.log(game)
// }   //TypeError: games is not iterable

//but we can by other way

// const games = {
//     game1 : "nfs",
//     game2 : "cruseder",
//     game3 : "spiderMan"
// }

// for( const game of Object.entries(games)){
//     console.log(game)
// }

//output
// [ 'game1', 'nfs' ]
// [ 'game2', 'cruseder' ]
// [ 'game3', 'spiderMan' ]


// 7. working of for in loop 

// const language = {
//     js : "javasecipt",
//       tp : "typescipt",
//         py : "python"
// }

// for (const key in language) {
//    console.log(key)
// }

//output
// js
// tp
// py


// const language = {
//     js : "javasecipt",
//       tp : "typescipt",
//         py : "python"
// }

// for (const key in language) {
//    console.log(`${key} is for ${language[key]}`)
// }

// output

// js is for javasecipt
// tp is for typescipt
// py is for python


//8. how to print array in for in loop

// const myArr = ["java", "html", "css", "python"]

// for (const element in myArr) {
//     console.log(element)
// }  

//output

// 0
// 1
// 2
// 3

//or

// const myArr = ["java", "html", "css", "python"]

// for (const element in myArr) {
//     console.log(myArr[element])
// } 

// java
// html
// css
// python

//or

// const myArr = ["java", "html", "css", "python"]

// for (const key in myArr) {
//     console.log(key)
// } 

// 9.for in loop on map


// let map = new Map()
// map.set("IN", "india")
// map.set("GR", "germany")
// map.set("fr", "france")
// map.set("AUS", "australiya")
// map.set("fr", "france")

// for( const key in map){
//     console.log(key)
// }

//*******note ****** map is not iterable/

// 10. working of for each 
// ***********note******** forEach adn map are are callbacck function inbuilt in array method like length

// syntex
// myArr.forEach(any call back function)


// const myArr = ["java", "html", "css", "python"]

// myArr.forEach(element => {
//     console.log(element)
// });

//java
// html
// css
// python

// 11. how to pass function in foreach loop


// const myArr = ["java", "html", "css", "python"]

// function printMe(items){
//     console.log("items")
// }

// myArr.forEach(printMe)


// 12. parameter for forEach

// const myArr = ["java", "html", "css", "python"]

// myArr.forEach((item, index, myArr) => {
//     console.log(item, index, myArr)
// })


// 13. how to apply object of array in forEach

const coding = [
    {lang : "java"},
    {name :"rajesh"},
    {class : 17}
]

coding.forEach((item) => {
    console.log(item.lang)
})

//java
// undefined
// undefined