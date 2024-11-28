// 1. best way to declare a string and concat a string, 
//    which qoute use to declare a string ""/'' ,But prefered "";
//    how to show space 

// old way

// let name = "james "
// let repoCount = 2
// console.log(name + repoCount + " hello")

//     or
// new way  use backtik (string interpolation **benefits to use ** we can inject variable 
//                 directly and use method directly like below)


// let name = "james "
// let repoCount = 2
// console.log(`my name ${name.toUpperCase()}  ${name.length} and my repository ${repoCount}`)


// 2.string interpolation syntex
//  Ans. use backtik and ${variables}


// 3.other way to declare string

// let myName = new String ('rajesh')

// console.log(myName)                   //[String: 'rajesh'] --it give you like that object

// console.log(myName.length)            //6 


// 4.in every type of declaration what is going on behind the scene
// like**************
//  let myName = "rajesh"
// let myName = new String("rajesh")
// in both situation behinde the scean 
// it make a object of key : value pair of string word
// like ***********
// String {'hello'}
// 0 :  "h"
// 1  : "e"
// 2 : "l"
// 3 : "l"
// 4 : "o"
// length :5
// all methods of string



// 2.how to access charactor of this string 

// let myPlace = "jaipur"

// console.log(myPlace[0]);    //j


// let myPlace = String("jaipur")

// console.log(myPlace[0]);            //j


// 3.what is _proto_ in string
// let myName = "rajesh";

// console.log(myName.__proto__)          //{} **it means it has function or methods   use double dash

// 3.how to convert all string word into all word capital, first word capital, all word in lower case;

// let myName = "rajesh";
// //  ***********note *****origional value not change it is copy
// console.log(myName.toUpperCase())         //RAJESH

// 4.how to see in a string which charactor is on 2nd position

// let myName = "rajesh";
// //  ***********note *****origional value not change it is copy
// console.log(myName.charAt(2))    //j because it start from 0


// 5. how to know in a string e charactor at which position

// let myName = "rajesh";
// //  ***********note *****origional value not change it is copy
// console.log(myName.indexOf('e'))   //3 because it start from zero

// 6.is it count space also in string object key value
// Ans. Yes ***** it will give key number in string like "ram kumar" so 4 : "";


//7. how to conver a string into substring

// let myName = "rajesh kumar";
// //  ***********note *****origional value not change it is copy
// console.log(myName.substring(8)) //umar
// **********not include last value*********
// **********we cannot give negative value*****
// console.log(myName.substring(8, 11)) //uma


// 8.slice() methods
//  let myName = "rajesh"
// // ********not include last value
// //  console.log(myName.slice(1, 3))     //aj
// //  console.log(myName.slice(-1, 3))    //give a empty space
// //  console.log(myName.slice(1, -3))    // aj
// console.log(myName.slice(-1, -3))      // give a blank space


// 9.trim()method, trimEnd(), trimStart()
// Ans. remove space befor and after

// let myPlace ="  jaipur   "

// console.log(myPlace.trim()) //jaipur


// 10.in url browser donnot understand spaces it convert spaces in +++++++ in chrom so how to avoid
//  it when come to api url


// let url = "http://www.rhaul%20.com"

// let verifyUrl =url. replace('%20', '-')

// console.log(verifyUrl);

// 11. in above url how to check is rahul exist in url

// let url = "http://www.rahul%20.com"

// let verifyUrl =url. includes('rahul')

// console.log(verifyUrl);                       //true


// 12.how to convert  this (my-name-is-rahul) string into a arrray basis on -

// let myJourny = "go-to-beyond"

// console.log(myJourny.split('-'))    //[ 'go', 'to', 'beyond' ]

// let myJourny = "go-to-beyond"

// console.log(myJourny.split('-', 2))    //[ 'go', 'to' ]






























// Basic Information

//1. Write a function to validate if a password has at least 8 characters and does not exceed 20.
    
// function pass(password) {
//   const passLength = 8;  // Minimum length
  // const passLengthl = 16; // Maximum length

  // if (typeof password !== 'string') {
  //     return "It is not the correct way to define a password";
  // } else if (password.length < passLength) {
//       return "It is too short";
//   } else if (password.length > passLengthl) {
//       return "It is too large";
//   } else {
//       return "Password is valid";
//   }
// }

// // Example usage
// console.log(pass("1234567"));        // It is too short
// console.log(pass("12345678"));       // Password is valid
// console.log(pass("12345678901234567")); // It is too large
// console.log(pass("123456799")); 




//2. Create a function to capitalize the first character of a string.


let myName = "rajesh";

console.log(myName.capitalize())

// charCodeAt:
// Write a function that takes a string and checks if it contains only printable ASCII characters (32–126).

// codePointAt:
// Develop a function to find the Unicode code point of the first character in a string, and explain its difference from charCodeAt.

// String Search
// indexOf:
// Create a function to locate the first space in a sentence and split the sentence into two parts.

// lastIndexOf:
// Write a function that identifies the last occurrence of a specific character and extracts the substring up to that point.

// includes:
// Build a function to check if a given product description mentions "free shipping."

// startsWith:
// Write a function to verify if a string starts with "http://" or "https://".

// endsWith:
// Create a function that checks if a file name ends with ".jpg", ".png", or ".gif".

// Pattern Matching
// match:
// Write a function to find all email addresses in a block of text using a regular expression.

// matchAll:
// Create a function that retrieves all hashtags from a string and returns them as an array.

// search:
// Build a function to find the position of the first occurrence of a word in a paragraph, ignoring case.

// String Transformation
// toUpperCase:
// Write a function to convert a string to uppercase for displaying as a header.

// toLowerCase:
// Create a function that converts user input to lowercase for case-insensitive comparison.

// toLocaleUpperCase:
// Write a function to transform a string to uppercase based on the user's locale.

// toLocaleLowerCase:
// Build a function to convert a Turkish word to lowercase and demonstrate the difference in behavior for the Turkish locale.

// String Modification
// concat:
// Create a function that joins a user's first and last names with a space.

// slice:
// Build a function to extract the domain name from a URL.

// substring:
// Write a function to retrieve a substring from a given start index to an end index.

// substr:
// Develop a function to get the first 10 characters of a long text, adding "..." if it's longer than 10 characters.

// replace:
// Write a function to censor bad words in a given string by replacing them with asterisks.

// replaceAll:
// Build a function to replace all instances of & with and in a list of product names.

// padStart:
// Write a function to add leading zeroes to a number to make it 5 characters long.

// padEnd:
// Create a function to format table columns by adding trailing spaces.

// repeat:
// Write a function that generates a string of a given character repeated n times, like creating a horizontal line for a CLI app.

// Trimming
// trim:
// Create a function to sanitize user input by trimming leading and trailing spaces.

// trimStart:
// Write a function that removes only leading spaces from a string.

// trimEnd:
// Develop a function to remove trailing whitespace from a multi-line text.

// Splitting and Joining
// split:
// Write a function that splits a CSV line into an array of values.

// join:
// Combine an array of words into a single sentence separated by spaces.

// Comparison
// localeCompare:
// Create a function to sort an array of words alphabetically, considering locale-specific rules.
// Conversion
// toString:
// Write a function to convert a boolean value (true or false) into a string.

// valueOf:
// Explain how valueOf can be used for string comparison in a practical example.




















// HTML-Specific String Methods
// anchor:
// Write a function that wraps a given text in an <a> HTML tag with a specified anchor name.
    
// big:
// Create a function that transforms a string into HTML <big> tags for larger font rendering.

// blink:
// Though outdated, experiment with the blink method to wrap text in <blink> tags. Also, explain why it is not recommended.

// bold:
// Write a function to make a string bold using the <b> tag.

// fixed:
// Use the fixed method to convert text into <tt> tags for monospaced font.

// fontcolor:
// Create a function that wraps text with a <font> tag and applies a given color.

// fontsize:
// Write a function that wraps text with a <font> tag and applies a specified font size.

// italics:
// Build a function that uses the italics method to wrap text in <i> tags.

// link:
// Write a function that converts a given URL into a clickable hyperlink.

// small:
// Use the small method to make text smaller by wrapping it in <small> tags.

// strike:
// Create a function to strike through text using <strike> tags.

// sub:
// Use the sub method to convert text into subscript by wrapping it in <sub> tags.

// sup:
// Write a function to convert text into superscript using <sup> tags.

// String Normalization
// normalize:
// Write a function that checks if two strings are equivalent after Unicode normalization. Use different normalization forms like NFC, NFD, NFKC, and NFKD.
// Well-Formed Methods
// isWellFormed:
// Write a function to check if a string is well-formed Unicode.

// toWellFormed:
// Use toWellFormed to convert a string into a well-formed Unicode string and handle any malformed characters.