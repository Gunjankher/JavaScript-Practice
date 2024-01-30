/*  basics 
console.log("hello world!")

let a = "Gunjan"
console.log(a)

let b= 67
b= 4
console.log(b)
*/
/*
var c = 56
var c = 43
console.log(c);

let d =11
console.log(d+ "45");
console.log(typeof "45");

let e = 56
let f = 1
console.log(e+f+f)*/


/*let a1= 55
let b1= 5 
console.log(a1*b1)
console.log(a1/b1)*/

// variables and datatype 

//1. create a variable type of string and try to add number to it 

/*let a= "Gunjan"
console.log(a+ 56)
// finding the type 
console.log(typeof a)
 // const question
const a1 = {
  name : "Gunjan",
  age : 56,
  pass: false,
}
a1["age"]= 78
a1["pass"]= true,
console.log(a1)*/
/* making dictionary 
 const dic = {
   library  : "a place to read different books ",
   School : "place to take education ",
collage: "a place to take higher education ",
 }
console.log (dic["School"])*/

/* 1 . Declare a variable name and assign your name to it.
let name = "Gunjan"
console.log(name) */ 
// 2 Create a variable age and assign your age to it.
let age= 67 
console.log(age)

// 3.Declare a constant PI and assign the value of π (3.14159) to it.
const pi = 3.14159
console.log (pi)

/*

1. Create a variable `firstCharacter` and assign the first character of a given string `sentence` to it.

2. Declare a variable `favoriteColor` and assign the third letter letter of your favorite color to it.

3. Create a variable `dayOfWeek` and assign the first day of the week (e.g., "Monday") as a string. Then, extract and store the first letter of the day in another variable.

4. Declare a variable `bookTitle` and assign a book title of your choice to it. Extract the second letter of the title and store it in a variable `secondLetter`.

5. Create a variable `cityName` and assign the name of a city you like to it. Assign the last character of the city name to a variable `lastChar`.

6
*/
// Question 1 
let sentence = "You are good"
let firstletter= sentence[0]
console.log(firstletter)

// questions 2 .

let color = "Green" 
let favoritecolor= color[3]
console.log(favoritecolor)

// question 3 

let dayofWeek = "monday"
let firstDay= dayofWeek[0,1]
console.log(firstDay)

// question 4 
let bookTitle= "metamorphosis"
let newBook = bookTitle[7]
console.log(newBook)

// question 5 

let cityname = "surat"
lastchar = cityname[4]
console.log(lastchar)
