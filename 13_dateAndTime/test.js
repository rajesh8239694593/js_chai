// 1.base time of date in ja
// Ans. jan 1970

// 2.How to calculate date from jan 1970
// Ans. bydefault in milisecond

// 3.why suggest temporal api
// Ans.because it is too large data in milisecond
// it is porpasol not implement

// 4. how to declare a date

// let myDate = new Date()

// console.log(typeof myDate)           //object
// console.log(myDate)                  //2024-11-28T20:21:59.607Z
// console.log(myDate.toString())       //Thu Nov 28 2024 20:22:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString())   //11/28/2024, 8:28:49 PM
// console.log(myDate.toLocaleDateString())   //11/28/2024
// console.log(myDate.toISOString())           //2024-11-28T20:31:49.573Z

// console.log(myDate.toJSON())               //2024-11-28T20:34:20.971Z
// console.log(myDate.toTimeString())            //20:35:59 GMT+0000 (Coordinated Universal Time)


// 5.How to create your own date like jan 20 2024

// let myDate = new Date(2024, 0, 23);

// console.log(myDate)                               //2024-01-23T00:00:00.000Z

// console.log(myDate.toString())                    //Tue Jan 23 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())               //Tue Jan 23 2024

// console.log(myDate.toTimeString())               //00:00:00 GMT+0000 (Coordinated Universal Time)



// 6.How to create our own date time like 2024, 0, 23, 18, 30, 55, 998, 3

// let myDate = new Date(2024, 0, 23, 18, 30, 55, 998);

// console.log(myDate)                                    //2024-01-23T18:30:55.998Z

// 6. how to insert other dateformat


// let myDate1 = new Date ("2024-01-05")

// let myDate2 = new Date ("02-14-2024")

// console.log(myDate1)                            //2024-01-05T00:00:00.000Z

// console.log(myDate2)                           //2024-02-14T00:00:00.000Z

//7.how to use of timestamp---qizzes and polls etc....

// let myDate = Date.now()
// let myDate1 = new Date("01-01-2021")
// console.log(myDate)        //1732827428643 give in milisecond

// console.log(myDate1.getTime())   //1609459200000 it give in milisecond from first jan 1970 to till now

// *************note*********** now we can compare it

// 8.how to convert a date in seconds, minuite and hour

// console.log(Date.now())      //1732827862888

// console.log(Date.now() / 1000) //1732827897.648

// console.log(Math.floor(Date.now() / 1000)) //1732827981


// 9.how to get month date day year etc from a date ..

// let myDate = new Date()

// console.log(myDate)
// console.log(myDate.getMonth())    //10

// console.log(myDate.getDay())        //4

// console.log(myDate.getFullYear())    //2024


// 10.how to show date in interpolation..


// 11.how to customize our date using tolocaleString() method



























// 1. Display Current Date and Time
// You are building a blog, and each post needs to display the current date and time when published.

// Question:

// Write a function to display the current date and time in this format:
// Wednesday, November 29, 2024, 10:45 AM.
// 2. Countdown Timer for an Event
// You are building a countdown timer for an upcoming sale on your e-commerce site.

// Question:

// Write a function that calculates the number of days, hours, minutes, and seconds remaining until a specified future date.
// 3. Calculate Age from a Birthdate
// You are building a profile page where the user's age is displayed based on their birthdate.

// Question:

// Write a function that calculates the user's age given their birthdate.
// 4. Display Relative Time (e.g., "5 minutes ago")
// You are working on a social media platform and need to show how long ago a post was made.

// Question:

// Write a function that takes a past timestamp and returns a relative time, like:
// 5 minutes ago
// 2 hours ago
// 3 days ago.
// 5. Date Validation for Form Input
// You are implementing a form where users need to input their date of birth.

// Question:

// Write a function that:
// Validates the input date.
// Ensures the user is at least 18 years old.
// 6. Time Zone Conversion
// You are building an international event scheduling tool. Users from different time zones need to see event times in their local time zone.

// Question:

// Write a function that takes a UTC timestamp and converts it to a specific time zone (e.g., America/New_York).
// 7. Days Between Two Dates
// You are building a booking system for hotels. The total cost depends on the number of days between the check-in and check-out dates.

// Question:

// Write a function that calculates the number of days between two dates.
// 8. Formatting Timestamps for Logs
// You are creating a logging system where each log entry must be timestamped.

// Question:

// Write a function that returns the current date and time in ISO 8601 format (e.g., 2024-11-29T10:45:00Z).
// 9. Highlight Today's Date in a Calendar
// You are building a calendar component for a scheduling app.

// Question:

// Write a function that:
// Highlights today’s date.
// Indicates if today falls on a weekend.
// 10. Generate Monthly Calendar
// You are building a custom calendar component and need to display all days for the current month.

// Question:

// Write a function that generates an array of all dates for the current month, starting from the 1st and ending on the last day.
// 11. Adding or Subtracting Days
// You are creating a feature that allows users to schedule tasks X days in advance.

// Question:

// Write a function that:
// Adds a given number of days to the current date.
// Returns the new date.
// 12. Start and End of the Day
// You are building a task manager and need to calculate the start and end timestamps for the current day.

// Question:

// Write a function that:
// Returns the timestamp for the start of the current day (00:00:00).
// Returns the timestamp for the end of the current day (23:59:59).
// 13. Week Number Calculation
// You are building an analytics tool that tracks weekly performance metrics.

// Question:

// Write a function that calculates the ISO week number for a given date.
// 14. Recurring Events
// You are building an app that schedules recurring events, such as meetings every Monday.

// Question:

// Write a function that generates all the dates for a recurring event between two given dates.
// 15. Check Leap Year
// You are creating a date utility library, and one of its features checks if a year is a leap year.

// Question:

// Write a function that determines whether a given year is a leap year.
// 16. Calculate Time Spent
// You are creating a time-tracking app where users log start and end times of their work.

// Question:

// Write a function that calculates the total hours and minutes between two timestamps.
// 17. Convert Date String to Timestamp
// You are working on a legacy system that stores dates as strings.

// Question:

// Write a function that converts a date string (e.g., November 29, 2024) into a timestamp.
// 18. First and Last Day of a Month
// You are creating a financial report system that needs to calculate the start and end of a month.

// Question:

// Write a function that returns:
// The first day of the current month.
// The last day of the current month.
// 19. Calculate Working Days
// You are building a leave management system that calculates the number of working days (Monday to Friday) between two dates.

// Question:

// Write a function that calculates the number of working days between two dates.
// 20. Schedule a Function to Run at a Specific Time
// You need to run a specific function at a certain time (e.g., show a reminder notification at 3 PM).

// Question:

// Write a script that schedules a function to execute at a given time in the future.
// 21. Localized Date and Time
// You are building a multilingual application and need to display the date and time in different locales.

// Question:

// Write a function that formats a given date according to a specific locale (e.g., en-US, fr-FR, ja-JP).