// 1. what happen when we sotre foreach in a variable

// const myArr = ["apple", "fruits", "bnana", "tiger"]

// const value =  myArr.forEach((items) => {
//              console.log(items)
//              })
// // 
// console.log(value)

//output

// apple
// fruits
// bnana
// tiger
// undefined

//or

// const myArr = ["apple", "fruits", "bnana", "tiger"]

// const value =  myArr.forEach((items) => {
//              return items
//              })
// console.log(value)

// output --undefined
// ******note ******* foreach return nothing so it is 


// 2. working of filter

// *****note***** return values in array  unlike foreach

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  fillNum = number.filter((num) => num > 5 )

// console.log(fillNum)

// [ 6, 7, 8, 9, 10 ]

// or

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  fillNum = number.filter((num) => {num > 5} )

// console.log(fillNum)

//undefined
// []

//or

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  fillNum = number.filter((num) => { return num > 5} )

// console.log(fillNum)                //[ 6, 7, 8, 9, 10 ]

// ********note*******yadi curly braces de diya to return keyword likhna hoga

// same thing forecah m use krati to kaisi krti

// const number = []

// number.forEach((element) => {
//     if( element > 4 ){
//         number.push(element)
//     }
// });

// console.log(number)

// 3.books example of filter

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

  // get all books that genre is history

//   const historybooks = books.filter((book) => (book.genre === "History")

//   console.log(historybooks)

  // get all books that publish after 2000

//   const publishYear = books.filter((book) => {return book.publish >= 2000 })
// console.log(publishYear)

  // get all books that publish after 1985 and genre is Hisroty


//   const publishYear = books.filter((book) => {return book.publish >= 1985 && book.genre === "History" })
//   console.log(publishYear)


//4. working of map function
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newnum = number.map((num) => num + 2)
// console.log(newnum)

// *****note******* difference between filter--true and false and map 


//5. what is chaining method

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newnum = number.map((num) => num + 2).map((num) => num * 9).filter((num) => num > 100)
// console.log(newnum)

//6. working of reduce method

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// let intionalValue = 0

// const sum = number.reduce((accumulator, curNum) => {return accumulator + curNum},55 )
// console.log(sum)   //55

// 8. use reduce in shoppingCart

const shoppingCart = [
    { name : "js course",
        price : 2999
    },
    { name : "py course",
        price : 299
    },
    { name : "ty course",
        price : 29999
    },
    { name : "cy course",
        price : 2997
    }

]

// const total = shoppingCart.reduce((acc, curElm) => {
//     let curElm1 = curElm.price
//      let total = acc + curElm1
//     return total
// }, 0 )

// console.log(total)

//or

const total = shoppingCart.reduce((acc, curElm) => acc + curElm.price , 0 )



console.log(total)