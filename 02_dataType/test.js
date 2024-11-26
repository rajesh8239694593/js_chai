"use strict";

// 1. what is use strict and how to use it.
// Ans."use strict" treat all js code as a newer version.
//  place this code on the page like "use strict";

// alert("hello");
// alert( 3 + 3 )

// 2.how to use alert statement in js freamwork or browser console.
// Ans. alert("hello"); this statement works only browser or in html page 
//      but when we are using js freamwork like node there is other way to do
//  so it will give error 

// console.log( 3 + 3 ) console.log("hello")
//   console.log( 3
//      + 3 );

// 3.*********note****************
// Ans. code should be readable always aware


// 4.which is java script best documentations 
// Ans.1. tc39
//     2. mdn by mozilla firfox


// 5.how many dataType in js and their type
// Ans. 8
    // 1.string  // ""
    // 2.Number  //2**53-1
    // 3.bigint
    // 4.boolean  //true/false
    // 5.null     // represtation of empty value or a standalon value // example temp from server
    // 6.undefine  //let id; brabr likhti he wo isse value maanig// value assign krni hogi nhi to error dega
    // 7.symbol    // unique
    // 8.object


// 6. tell me about typeof and anser these type of
    // 1.
    // console.log(typeof '')  //string
    
    // 2.
    // console.log(typeof 3 )  //number

    // 3.
    // console.log(typeof hello )  //undefined // the compiler understood it is variables

    // 4.
    // let a;
    // console.log(typeof a )  //undefined

    // 5.
    // 
    // console.log(typeof  null)  //object

    // 6.
    // let a = null;
    // console.log(typeof  a)  //object

    // 7.
    // console.log(typeof  true)  //boolean

    // 8.
    // let true = true;
    // console.log(typeof  true)  //error because we cannot declare a variabe with reserve keyword

    // 8.
    // console.log(typeof  object) // undefine

    // 9.
    // console.log(typeof  NaN) // number