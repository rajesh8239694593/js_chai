// 1. what is for loop

// 2.print number 1 to 10 in for loop

// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

// 3. how to print array index in for loop without declare array

// for (let i = 0; i < 10; i++){
//     const element = i
//     console.log(element)
// }                                             // 0 to 9 print ho jayega

// console.log(element)                          //ReferenceError: element is not defined
                                             // because it is global to block

// ******note****** ctrl + d *** select same word and change everywhere

// or

// for (let i = 0; i < 10; i++){
//     const element = i
//     if ( element == 5){
//         console.log(" 5 is best number")
//     }
//     console.log(element)
// }                                             // 0 to 9 print ho jayega

// console.log(element) 

// 0
// 1
// 2
// 3
// 4
//  5 is best number
// 5
// 6
// 7
// 8
// 9


//4.print  table from 1 to 100

// for(let i =1 ; i<=100; i++){
//     for(j = 1; j<=10; j++){
//      console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// 5.how to forloop in array

// const myArr = ["superman", "xman", "flash"]

// console.log(myArr.length)                           //3

// for (let index = 0; index <= myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)
    
// }

// superman
// xman
// flash


//index < myArr.length ***********note********never use <=
// because array start from 0 so length +1 so 
// if we use so the output is
//superman
// xman
// flash
// undefined

// ****note ******if we donnot use increment so it willl print infinilitly superman

// 6. how to use break and continue in for loop

// for (let i = 1; i <= 20; i++) {
//    console.log(`value of i is ${i}`)
    
// }

// or  // num 5 tk print krva kr m loop si bhar aa jaauuu

// for (let i = 1; i <= 20; i++) {
//     console.log(`value of i is ${i}`)
//      if(i == 5) {
//         console.log("deacted 5")
//         break;
//      }
//  }


//   1 ki 20 tk ki number m 5 ko chhodkr sb print ke do

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("deacted 5")
        continue;
    }
    console.log(`value of i is ${i}`)

     }
 