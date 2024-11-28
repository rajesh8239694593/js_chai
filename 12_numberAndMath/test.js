// 1.How to define number implicitly amd explicitly

//    ********implicitly*************

// const score = 783
// console.log(score)                           //783
// console.log(typeof score)                    //number*****because  it automatically implicittypecast

// ************explicitly***********

//  const anotherScore = new Number(887)
//  console.log(anotherScore)                   //[Number: 887]

//  console.log(typeof anotherScore)            //object


//2...behaind the scene working of both is same



// 3.how to use toString() method in number and benefits

// const score = 783

// console.log(score.toString())                 // it convert it in string                 

// console.log(score.toString().length)          //3 ---benefits now you can use all string method

// 4.after decimal how to define number of values

// const score = 783.423456789

// console.log(score.toFixed())                 //783 **** it will give
//                                              // 783.423456789 =783,, 783.523456789 =784

// console.log(score.toFixed(1))                //783.4

 // 5. topercision() method use in this 

//  let myNum = 23.87654

//  console.log(myNum.toPrecision())            // 23.87654 it convert it into string
//  console.log(myNum.toPrecision(3))           //23.9 


 
//  let myNum1 = 123.87654

//  console.log(myNum1.toPrecision(3))          // 124


//  let myNum1 = 1123.87654

//  console.log(myNum1.toPrecision(3))             //1.12e+3  expontional m convert kr diya


// 6.how to readable of a number like in comms

// let myNum = 1000000000;

// console.log(myNum.toLocaleString())               //1,000,000,000 by default it give USA standard

// console.log(myNum.toLocaleString( 'en-IN' ))      //1,00,00,00,000

// console.log (myNum.valueOf())                      // 1000000000

// console.log (myNum.toExponential())             // 1e+9


// 7.Number other method that tells us max value in js min value in js

// console.log(Number.MAX_VALUE);             //1.7976931348623157e+308

// console.log(Number.MIN_VALUE);             //5e-324

// console.log(Number.MAX_SAFE_INTEGER);      //9007199254740991

// console.log(Number.MIN_SAFE_INTEGER);      //-9007199254740991

// console.log(Number.NEGATIVE_INFINITY);     //-Infinity



// +++++++++++++++++++++++ 8.MATH +++++++++++++++++++++++


// console.log(Math)                              //Object [Math] {}

// console.log(Math.abs(-4))                      // 4 it work like mode

// console.log(Math.round(4.5))                   // 5

// console.log(Math.ceil(4.5))                    //5

// console.log(Math.floor(4.5))                   //4

// console.log(Math.min(1,2,3,4,5,6))              //1

// console.log(Math.max(1,2,3,4,5,6))             //6



// 9. how to take a random number like in ludo etc.... between 1 to 6

// console.log(Math.random())     // 0.24786013870364898 // it give value between 0 to 1//after point it give us 17 value

// console.log(Math.random() * 10) // so it can give a number not 0.789728973

// console.log((Math.random() * 10) + 1) // to avoid 0.04 *10 = 0.4  this case

// console.log(Math.floor(Math.random() * 10) + 1) // won't come in decimal


// const minValue = 1

// const maxValue = 6

// console.log (Math.floor(Math.random() * ( maxValue - minValue + 1 )) + minValue )


// 10. make a program comeout random number between 10 to 20.



//  let minValue = 10
//  let maxValue = 20

// console.log(Math.floor( Math.random() * (maxValue - minValue) + minValue))























// 1. Currency Formatting
// A client requires you to display product prices with two decimal places, regardless of input precision.

// Question: Write a function that:

// Takes a number as input.
// Returns it formatted as a currency string (e.g., "$123.46").
// 2. Scientific Data Visualization
// You're building a dashboard for a research lab. One of the requirements is to display very large or small numbers in scientific notation with three decimal places.

// Question: Create a function that:

// Accepts a number.
// Returns the scientific notation string (e.g., 12345678 should become "1.235e+7").
// 3. User Input Validation
// You’re creating a calculator where users input numbers in various formats (e.g., "1,000" or "1e3"). Your task is to:

// Convert these strings to numbers.
// Validate if the conversion is successful.
// Question: Write a function that:

// Takes a string as input.
// Returns true if it’s a valid number and false otherwise.
// 4. International Number Formats
// A travel agency wants to display prices in different locales. For example:

// USD for American users.
// EUR for European users.
// Question: Write a function that:

// Accepts a number and a locale string (e.g., "en-US" or "de-DE").
// Returns the localized currency string.
// 5. Binary/Hexadecimal Conversion Tool
// Your team is developing a tool for programmers that converts numbers to binary and hexadecimal formats.

// Question: Build a function that:

// Accepts a number.
// Returns an object with its binary and hexadecimal representations.
// Example:

// convertNumber(255);
// // Output: { binary: "11111111", hexadecimal: "ff" }
// 6. Rounding Errors
// A financial app you’re building requires precise calculations for interest rates. However, JavaScript sometimes introduces rounding errors in floating-point arithmetic.

// Question: Write a function that:

// Takes two floating-point numbers as input.
// Returns their sum, rounded to two decimal places.
// 7. Progress Indicator
// You’re developing a progress bar for a file upload tool. The backend sends the file size in bytes, and you need to convert it to a more readable format (e.g., KB, MB, GB).

// Question: Write a function that:

// Takes a file size in bytes.
// Returns the size as a string with the appropriate unit (e.g., "1.23 MB").
// 8. Temperature Converter
// You’re tasked with creating a tool to convert temperatures between Celsius and Fahrenheit.

// Question: Build a function that:

// Accepts a number and a scale ("C" or "F").
// Converts the temperature to the other scale, rounding to one decimal place.
// 9. Pagination System
// A website displays search results in pages. Each page shows 10 results. You’re tasked with calculating how many pages are needed for a given number of results.

// Question: Write a function that:

// Takes the total number of results.
// Returns the number of pages needed (rounded up).
// 10. Loan Calculator
// A banking app needs to display EMI (Equated Monthly Installment) for a given loan amount, interest rate, and tenure.

// Question: Write a function that:

// Accepts the loan amount, annual interest rate, and tenure in months.
// Calculates the EMI and returns it as a fixed two-decimal string.
// 11. Dynamic Discounts
// Your e-commerce platform applies dynamic discounts during sales events. For example:

// A 20% discount on an item priced at $50 results in a final price of $40.
// Question: Write a function that:

// Takes the original price and discount percentage.
// Returns the final price as a formatted string (e.g., "$40.00").
// 12. Responsive Data Thresholds
// A charting library you're using has thresholds for large numbers. Any number above 10,000 should be displayed as a short string (e.g., 10.5K).

// Question: Create a function that:

// Accepts a number.
// Returns it in a short format (e.g., "10.5K", "1.2M").























// 1. Random Color Generator for Web Page Themes
// You are building a website that allows users to change the page background color randomly for fun. You need to generate random colors.

// Question: Write a function that:

// Generates a random hexadecimal color (e.g., #ff5733).
// Applies the color to the page background.
// 2. Responsive Layout with Viewport Width
// You are designing a responsive layout that adjusts depending on the user's screen width. You need to calculate the optimal width of elements based on a percentage of the screen size.

// Question: Write a function that:

// Takes a percentage as input (e.g., 20%).
// Returns the width in pixels based on the current viewport width.
// 3. Calculating Distance Between Two Points (2D Coordinates)
// You are building a map application and need to calculate the distance between two points using their 2D coordinates (latitude and longitude).

// Question: Write a function that:

// Accepts two points, each with x and y coordinates.
// Returns the Euclidean distance between the points.
// Formula: distance = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2)

// 4. Pagination for Search Results
// You're implementing pagination for a large set of search results. The number of pages should be calculated based on the total number of results and results per page.

// Question: Write a function that:

// Takes totalResults and resultsPerPage as inputs.
// Returns the total number of pages, rounding up if necessary.
// Use Math.ceil() to round up the result.

// 5. Clamping a Value Within a Range
// You are creating a range slider where the value should never exceed a certain limit. You need to ensure that the value stays within a specified range.

// Question: Write a function that:

// Takes a value, min, and max.
// Returns the value clamped between min and max.
// Use Math.max() and Math.min().

// 6. Generating Random Numbers for Game Mechanics
// In your game, you need to generate random numbers for character stats, such as attack points, defense points, etc.

// Question: Write a function that:

// Generates a random integer between min and max (inclusive).
// Uses Math.random() and Math.floor().
// 7. Image Gallery Slideshow
// You’re implementing an image slideshow. The images need to cycle through randomly. You also need to ensure the images don’t repeat until all have been shown.

// Question: Write a function that:

// Takes an array of image URLs.
// Returns a random image URL from the array without repeating previously shown images.
// Use Math.random() for random selection.

// 8. Countdown Timer
// You are building a countdown timer for a special event on your website (e.g., Black Friday sale). The countdown should display the number of hours remaining until the event.

// Question: Write a function that:

// Takes a future Date as input.
// Returns the number of hours remaining (rounded down).
// Use Math.floor() to round down the hours.

// 9. Generating a Random Number within a Range for Form Validation
// You want to generate a random number between a user-defined range to simulate a security challenge (e.g., CAPTCHA) where users need to guess the number.

// Question: Write a function that:

// Takes min and max as input.
// Returns a random number between min and max (inclusive).
// 10. Formatting File Size for Download Page
// You are building a download page that shows file sizes. You want to convert bytes into human-readable format (KB, MB, GB).

// Question: Write a function that:

// Takes a file size in bytes.
// Returns the size in the most appropriate unit (e.g., KB, MB, or GB).
// Use Math.round() to round the output.

// 11. Angle Conversion for a Drawing App
// You are building a drawing app and need to convert angles from radians to degrees and vice versa.

// Question: Write a function that:

// Takes an angle in radians and converts it to degrees.
// Takes an angle in degrees and converts it to radians.
// Use Math.PI for π and the formulas:

// Degrees to Radians: radians = degrees * (Math.PI / 180)
// Radians to Degrees: degrees = radians * (180 / Math.PI)
// 12. Temperature Converter
// In a weather app, users can toggle between Celsius and Fahrenheit. You need to create a function that converts temperatures based on the user's input.

// Question: Write a function that:

// Takes a temperature and converts it between Celsius and Fahrenheit.
// Rounds the result to one decimal place using Math.round().