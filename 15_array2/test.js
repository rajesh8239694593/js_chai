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



































// Data Manipulation
// 1.How can you filter out inactive users from an array of user objects?

// const users = [
//     { id: 1, name: "Alice", isActive: true },
//     { id: 2, name: "Bob", isActive: false },
//     { id: 3, name: "Charlie", isActive: true },
//     { id: 4, name: "Diana", isActive: false },
//     { id: 5, name: "Eve", isActive: true },
// ];

// users.map((curElm)=>{
//    if(curElm.isActive == true){
//     console.log (typeof curElm.name)
//    }
// })                                        //



//2. How would you transform an array of product prices (e.g., in USD) into another currency using a conversion rate?

const productPricesUSD = [50, 100, 25, 200, 75, 120];

productPricesUSD.map ((curElm) => {
    let con = 84.50
    console.log(curElm * con)
})

// How do you sort an array of products by price in ascending or descending order?


// How would you find the most expensive product in an array of product objects?
// How can you group users by their roles (e.g., Admin, User, Guest) into separate arrays?
// Searching and Accessing
// How can you find the first product in a list that costs more than $50?
// How do you find all occurrences of a specific value (e.g., "Admin") in an array?
// How can you check if a specific product (e.g., "Laptop") exists in an array of product names?
// How would you retrieve the index of the last occurrence of a specific value in an array?
// How do you safely access elements in an array, avoiding undefined behavior for out-of-range indices?
// Adding and Removing Elements
// How can you add new products to the end of an array without modifying the original array?
// How would you remove the first element from an array and update the array dynamically?
// How can you insert an element into an array at a specific position?
// How do you remove duplicate entries from an array of strings or numbers?
// How would you replace a specific element in an array (e.g., update the name of a user in a list)?
// Combining and Splitting Arrays
// How do you combine two arrays of users into one list without creating duplicates?
// How would you extract the first 10 items from a long array for a "Top 10" feature?
// How can you divide an array of items into smaller chunks for paginated results (e.g., 5 items per page)?
// How do you split an array of dates into separate arrays for weekdays and weekends?
// How can you flatten a deeply nested array (e.g., [1, [2, [3, 4]]]) into a single-level array?
// Data Transformation
// How can you extract only the names from an array of user objects (e.g., [{name: "Alice"}, {name: "Bob"}])?
// How do you create a comma-separated string of product names from an array of products?
// How would you generate an array of objects from a plain array of strings, adding additional properties?
// How can you map over an array of objects to calculate a derived property (e.g., a discounted price)?
// How do you reverse the order of items in an array dynamically for a "Last Added First" feature?
// Condition Checking
// How can you check if all products in an array are in stock using a condition?
// How would you verify if at least one user in a list is an admin?
// How can you determine if an array contains only unique values?
// How do you validate if an input is an array before performing array operations?
// How would you check if an array of numbers is sorted in ascending order?
// Advanced Scenarios
// How can you calculate the total cost of items in a cart using the reduce() method?
// How do you handle an array of promises to fetch data for each item asynchronously?
// How can you debounce or throttle array operations (e.g., filtering or sorting) for better performance?
// How would you generate a sequence of numbers (e.g., [1, 2, 3, ...]) dynamically using Array.from()?
// How do you handle sparse arrays (e.g., Array(5) without values) while performing operations like map()?
// String and Array Conversion
// How can you convert a comma-separated string of tags into an array for a search feature?
// How would you join an array of user names into a single string for display purposes?
// How do you split an array of user inputs into valid and invalid entries?
// Sorting and Rearranging
// How can you sort a list of user names alphabetically, ignoring case sensitivity?
// How would you randomly shuffle the elements in an array (e.g., for a quiz app)?
// How do you sort an array of dates chronologically?
// Real-Time Updates
// How can you update the status of a specific user in an array without mutating the original array?
// How would you remove a product by its id from an array of product objects?
// How do you handle adding new elements to an array while avoiding race conditions in a multi-user environment?
// Error Handling and Validation
// What happens if you call map() on a non-array input? How do you prevent this?
// How do you handle undefined or null values in an array while iterating?
// How can you avoid errors when performing array operations on potentially empty arrays?











// Initialization and Basics
// How do you create an empty array and add elements to it dynamically?
// How can you initialize an array with default values (e.g., an array of 10 zeros)?
// How do you copy one array to another without maintaining a reference link?
// What happens when you set the length of an array to zero? How does it affect the array?
// Access and Searching
// How would you retrieve the last element of an array without using the length property?
// How do you find the second largest number in an array of numbers?
// How can you efficiently search for an object in an array by a specific key (e.g., id)?
// What’s the best way to find all indices of a specific value in an array?
// How would you find if two arrays share any common elements?
// Filtering and Conditions
// How do you filter an array to only include elements that meet a condition (e.g., even numbers)?
// How would you filter out falsy values (null, undefined, 0, "", false) from an array?
// How can you create a new array of unique values from a list of duplicate elements?
// How would you validate if all elements in an array are numbers?
// How do you filter objects from an array based on multiple conditions (e.g., price > 50 and in stock)?
// Sorting and Rearranging
// How can you sort an array of numbers in descending order?
// How would you sort an array of strings while ignoring case sensitivity?
// How do you rearrange an array randomly for a "shuffle" effect?
// How would you sort an array of dates from newest to oldest?
// How can you keep an array sorted while inserting new elements dynamically?
// Adding and Removing Elements
// How do you append a new element to an array without modifying the original array?
// How can you remove the third element from an array without leaving a hole?
// How would you add multiple elements to the start of an array?
// How do you clear an entire array while maintaining a reference to it?
// How can you replace a specific range of elements in an array with new ones?
// Merging and Splitting
// How can you merge two or more arrays into a single array without duplicates?
// How would you divide an array into subarrays of equal length (e.g., for chunking)?
// How do you extract the last 5 elements of an array?
// How can you split an array of names into two groups: one for long names and one for short names?
// How do you combine two arrays of objects, merging their properties based on a shared key?
// Transforming Arrays
// How would you transform an array of numbers into their square roots?
// How can you capitalize the first letter of each string in an array?
// How do you convert an array of objects into an array of a specific property (e.g., name)?
// How can you generate a new array of IDs from an array of objects while skipping invalid ones?
// How do you normalize an array of numbers to a range of 0 to 1?
// Utility Functions with Arrays
// How can you find the maximum and minimum numbers in an array?
// How would you calculate the average value of numbers in an array?
// How do you count the occurrences of each element in an array (e.g., word frequency)?
// How can you generate a range of numbers dynamically using an array (e.g., [1, 2, 3, 4])?
// How would you write a custom function to mimic the behavior of filter()?
// Advanced and Nested Arrays
// How can you flatten a 2D array into a 1D array (e.g., [[1, 2], [3, 4]] -> [1, 2, 3, 4])?
// How do you flatten a deeply nested array (e.g., [1, [2, [3, [4]]]]) into a single-level array?
// How can you map over a nested array and transform its values (e.g., multiplying all numbers by 2)?
// How do you access a specific element in a multi-dimensional array (e.g., matrix[2][3])?
// How would you create a new array by merging all unique elements from a set of nested arrays?
// Asynchronous Operations with Arrays
// How can you process an array of URLs to fetch data asynchronously?
// How do you wait for all promises in an array to resolve before proceeding?
// How would you handle errors when processing an array of promises?
// How can you throttle processing an array of items to avoid overloading the system?
// How do you use map() in combination with async/await to process an array sequentially?
// Real-Time Updates
// How do you update a specific object in an array by its id without mutating the original array?
// How can you remove multiple elements from an array based on their indices?
// How would you dynamically add elements to an array while ensuring no duplicates?
// How do you handle live updates to an array displayed in a UI (e.g., adding a new chat message)?
// How would you merge a new list of objects into an existing array while avoiding duplicates?
// Error Handling and Validation
// How can you validate if a variable is an array before performing operations on it?
// What happens if you call an array method (e.g., map()) on null or undefined, and how do you avoid it?
// How do you handle invalid elements (e.g., null or undefined) while performing array transformations?
// How would you gracefully handle operations on an empty array?
// How do you debug unexpected behaviors caused by sparse arrays (e.g., Array(5))?
// Working with Strings and Arrays
// How can you split a comma-separated string into an array of values?
// How do you join an array of strings into a single string with a specific separator?
// How would you convert a sentence into an array of words and filter out stop words (e.g., "the")?
// How do you reverse a string using array methods?
// How can you find the longest word in a string by first converting it into an array?
// Performance and Optimization
// What is the most efficient way to find duplicates in a large array?
// How would you process a very large array without causing performance issues?
// How can you compare the performance of for loops versus forEach() or map()?
// How do you avoid creating unnecessary copies of arrays while performing transformations?
// How would you optimize searching for elements in a sorted array?