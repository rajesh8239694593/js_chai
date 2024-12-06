// 1.how many ways to declare a variable.?
// Ans. 4 ways
// a.Automatically
// b.Using var
// c.Using let
// d.Using const




//2. Difference Between var, let and const
//             Scope	Redeclare 	Reassign	Hoisted 	Binds this
// var	       No	     Yes	     Yes	    Yes  	       Yes
// let	       Yes	     No	         Yes	     No	            No
// const	   Yes	     No        	 No    	     No	            No
// automatically
// redeclare
// let x = "fruits";

// let x = 5;

// reassign
// let cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"]; 

const accountId = 144777;
let accountEmail = "rajesh8239694593@gmail.com";
var accountPassword = "1234";
accountCity = "jaipur"

// 3.difference between redeclare and reassign;
// Ans.. ********************************

// *********not allowed*******
// accountId = 23333;
// console.log(accountId);

// 4.how many console method??
// Ans..a. console.log()
//      b. console.table([])
//      c. console.error()

accountCity = "pune"
accountPassword ="1234"
accountEmail = "hh@tt.com"

// accountId = 11122
 
// *******note *********** handle of large data
// console.table([accountCity, accountPassword, accountEmail])               // table print kriga index adn values ko
// console.log ( accountCity, accountPassword, accountEmail)                 //pune 1234 hh@tt.com

// 5.*******note*****
// not use var ,because issue in block and function scope
// always use let and const

// let accountState;
// console.log(accountState)                                  //undefined

// 6.when will occure output undefine
// when a variable declare but not assign value


// 7.difference between console.log() and console.table() and console.error()
