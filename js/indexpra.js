// https://www.keka.com/javascript-coding-interview-questions-and-answers

// 29 may morning wednesday

// what is javascript (with complete explanation)
// => JS stands for JavaScript, a high-level, dynamic, and interpreted programming language widely used in web development.
// data types in js
// below Primitive Data Types

// => String
// let name = "jay";
// console.log(name);

// => Number
// let age = 25;
// let pivalue = 3.14;
// console.log(age);
// console.log(pivalue);

// =>Boolean
// let ans1 = true;
// let ans2 = false;
// console.log(ans1);
// console.log(ans2);

// =>Undefined
// let hello1;
// console.log(hello1);

// =>Symbol
// let sym = Symbol('unique');
// console.log(sym);

// =>BigInt
// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);

// Non-Primitive Data Types

// =>Object
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false
// };
// console.log(person);

// =>Array
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// conditionals in js
// if Statement

// let age = 18;
// if (age >= 18) {
//   console.log("You are an adult.");
// }

// let score = 85;
// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else if (score >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Ternary Operator

// let age = 20;
// let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote);

// array in js

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// and array other methodes

// 29 may after afternoon

// 1.Sum of Numbers in an Array
// 2.  Find the Largest Number in an Array
// 3.Count True Values in an Array
// 4.String Palindrome or not
// 5.Filter even no from the array

// 1.Sum of Numbers in an Array
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// 2.  Find the Largest Number in an Array

// let numbers = [3, 7, 2, 9, 5];
// let largest = Math.max(...numbers);

// console.log(largest)

// let numbers = [3, 7, 2, 9, 5];
// numbers.sort((a, b) => b - a);
// let largest = numbers[0];

// console.log(largest);

// 3.Count True Values in an Array

// let values = [true, false, true, true, false, true];
// let trueValues = values.filter(value => value === true);
// let count = trueValues.length;

// console.log(count);

// 4.String Palindrome or not

// const isPalindrome =(str)=> {
//   let reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// 5.Filter even no from the array

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

// 30 may morning thursday

// 1.Loops with array es6 functions (map,reduce,filter)
// 2.functions
// 3.objects
// 4.HOC (higher order functions/components)

// 1.Loops with array es6 functions (map,reduce,filter)

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(number => number * number);
// console.log(squaredNumbers);

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// console.log(sum);

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// 2.functions
// function greet() {
//   console.log("Hello, world!");
// }

// greet();

// let greet = () => {
//   console.log("Hello, world!");
// };

// greet();

// 3.objects

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// 30 may afternoon below

// solution 1

const factorial = (interger) => {
  if (interger < 0) return "negative number factorial not possible";
  let finaldata = 1;
  for (let i = 1; i <= interger; i++) {
    finaldata = finaldata * i;
  }
  return finaldata;
};

// const finaloutput = factorial(4)
// console.log(finaloutput)

// solution 2

const filterdata = (arrayData, agecheck) => {
  return arrayData.filter((item) => {
    //   console.log(Boolean(item[agecheck]),"cccccccccccccct====")
    return Boolean(item[agecheck]);
  });
};

const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: false },
  { name: "Doe", age: 10 },
];

// const finaloutput = filterdata(data, "age");
// console.log(finaloutput);

// solution 3

const findAverage = (students) => {
  return students.reduce((ele, pertage) => {
    const sum = pertage.grades.reduce((acc, grade) => acc + grade, 0);
    ele[pertage.name] = sum / pertage.grades.length;
    return ele;
  }, {});
};

const students = [
  { name: "John", grades: [80, 90, 75] },
  { name: "Jane", grades: [95, 85, 70] },
];

// const finaloutput = findAverage(students)
// console.log(finaloutput);

// solution 4

const macValue = (array, uniqcprice) => {
  if (array.length === 0) return "empty";
  array.sort((a, b) => b[uniqcprice] - a[uniqcprice]);
  return array[0];
};

const products = [
  { name: "Laptop", price: 100 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 900 },
];

// const finaloutput = macValue(products, 'price')
// console.log(finaloutput);

const Maxvalue = (array, keyofvalue) => {
  if (array.length === 0) return "empty";
  let max = array[0];
  for (const item of array) {
    if (item[keyofvalue] > max[keyofvalue]) {
      max = item;
    }
  }
  return max;
};

const products2 = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 1200 },
];

// const finaloutput = Maxvalue(products2, 'price')
// console.log(finaloutput);

// solution 5

const actionfunc = (array) => {
  return array.filter((elemt) => elemt % 2 === 0);
};

const numbersarr = [1, 2, 3, 4, 5, 6];
const accordingaction = actionfunc(numbersarr);

// const finaloutput = accordingaction
// console.log(finaloutput);

// 31 may morning friday

// set and maps(uniq,set[0],arr performe,add,delete,clear,using map to access number keys)
// destructuring and spreading

// const data=(... cover)=>{ rest
// }
// data(..value) copy spread

// regular expressions (basics)
// console object methods  

// 31 may afternoon friday  afternoon

// 1.Create a function that takes an array of numbers and returns a new array with duplicates removed.
// ex-const numbers = [1, 2, 3, 1, 2, 4, 5];
// console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]

// const removeDuplicates =(numbers)=> {
//   return Array.from(new Set(numbers));
// }

// const numbers = [1, 2, 3, 1, 2, 4, 5];
// console.log(removeDuplicates(numbers));

// 2.Create a function that counts the occurrences of each word in a string using a Map
// const text = "hello world hello";
// console.log(countWordOccurrences(text));
// // Output: Map { 'hello' => 2, 'world' => 1 }

// function countWordOccurrences(text) {
//   const words = text.split(/\s+/);
//   const wordMap = new Map();

//   words.forEach(word => {
//     const count = wordMap.get(word) || 0;
//     wordMap.set(word, count + 1);
//   });

//   return wordMap;
// }

// const text = "hello world hello";
// console.log(countWordOccurrences(text));

// 3.Write a function that swaps the first and last elements of an array using destructuring.
// const array = [1, 2, 3, 4];
// console.log(swapFirstAndLast(array));

// const swapFirstAndLast =(array)=> {
//   if (array.length < 2) return array;

//   const [first, ...middle, last] = array;
//   return [last, ...middle, first];
// }

// const array = [1, 2, 3, 4];
// console.log(swapFirstAndLast(array));

// const swapFirstAndLast=(array)=> {
//   if (array.length < 2) return array;

//   [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
//   return array;
// }

// const array = [1, 2, 3, 4];
// console.log(swapFirstAndLast(array));

//   4.Merge two objects using the spread operator.
// const objA = { a: 1, b: 2 };
// const objB = { b: 3, c: 4 };
// console.log(mergeObjects(objA, objB));

// const mergeObjects = (objA, objB) => ({ ...objA, ...objB });

// const objA = { a: 1, b: 2 };
// const objB = { b: 3, c: 4 };
// console.log(mergeObjects(objA, objB));

// 5.Write a function that validates an email address using a regular expression.

// console.log(validateemail("test@example.com"));
// console.log(validateEmail("invalid-email"));

// const validateEmail = email => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// };

// console.log(validateEmail("test@example.com"));
// console.log(validateEmail("invalid-email"));

// 6.Write a function that logs different types of messages to the console using various console object methods

// const  logMessage=()=> {
//   console.log("This is a simple log message.");
//   console.error("This is an error message.");
//   console.warn("This is a warning message.");
//   console.info("This is an informational message.");
// }

// logMessage();

// const logTable=()=> {
//   const data = [
//     { name: "John", age: 30 },
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 }
//   ];
//   console.table(data);
// }

// logTable();

// Intermediate task Create a function that takes an array of user objects, filters out users with invalid email addresses, and returns a new array with unique users (based on email) using Set and destructuring.

// const filterAndUniqueUsers = (users) => {
//   const validUsers = users.filter(({ email }) => isValidEmail(email));
//   const uniqueUsers = Array.from(
//     new Set(validUsers.map(({ email }) => email))
//   ).map((email) => validUsers.find((user) => user.email === email));
//   return uniqueUsers;
// };

// function isValidEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// const users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jane", email: "jane@example.com" },
//   { name: "John", email: "john@example.com" },
//   { name: "Invalid", email: "invalid-email" },
// ];
// console.log(filterAndUniqueUsers(users));

// 3 jun morning

// Classes 
// JSON Object methods 
// Webstorage apis

// 3 june afternoon 

// 1.Create a Person class with properties name and age. 
// Include a method introduce that prints a message introducing the person.

// solutions 1 

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`${this.name} and  ${this.age}`);
//   }
// }

// const person1 = new Person('jay', 20);
// person1.introduce(); 

// const person2 = new Person('ajay', 21);
// person2.introduce();

// solutions 2

// 2 .Create a JavaScript object representing a book with properties title, author, and year. 
// Convert this object to a JSON string and then parse it back to an object.


// const book = {
//   title: "title one",
//   author: "author one",
//   year: 2024
// };

// const converttojsonString = JSON.stringify(book);
// console.log(converttojsonString);
// const converttoparsed = JSON.parse(converttojsonString);
// console.log(converttoparsed);

// 3.Use the localStorage API to store a user's name and then retrieve it.
//  If the name is not stored, prompt the user to enter their name.

// Function to retrieve the user's name from localStorage
// const storeLocal=()=> {
//   let name = localStorage.getItem('username');
//   if (!name) {
//     name = prompt(" enter name:");
//     localStorage.setItem('username', name);
//   }
//   return name;
// }


// const name = storeLocal();
// console.log("Watch ----" + name);

//4 .Create a User class that includes methods to save the user's data (name and age) to localStorage,
//  retrieve it, and print it. The data should be stored in JSON format.

// solutions 3 
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   save() {
//     const userData = {
//       name: this.name,
//       age: this.age
//     };
//     localStorage.setItem('user', JSON.stringify(userData));
//   }

//   static retrieve() {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     return userData ? new User(userData.name, userData.age) : null;
//   }

//   print() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// const user = new User('jay', 21);
// user.save();

// const retrievedUser = User.retrieve();
// if (retrievedUser) {
//   retrievedUser.print();
// } else {
//   console.log("No---fund localStorage.");






