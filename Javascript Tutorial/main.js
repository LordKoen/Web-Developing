'use strict';

// // Interaction
// let age;

// age = prompt("How old are you?");
// confirm(`Are you ${age} years old?`)
// alert(`You are ${age} years old!`);

// // Conditional Operators
// let officialName = prompt("What's the “official” name of JavaScript?", "Enter your answer here");

// if (officialName == "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("You don't know? “ECMAScript”!");
// }

// let value = prompt("Tell me a number (Negative numbers allowed)", "Write your answer here")

// if (value > 0) {
//     alert(1)
// } else if (value == 0) {
//     alert(0)
// } else if (value < 0) {
//     alert(-1)
// } else {
//     alert ("That is not a number!")
// }

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// result = (a + b < 4) ? 'Below' : 'Over';

// let message;

// let login = prompt("What are you?");

// message = (login == 'Employee') ? "Hello" :
//     (login == 'Director') ? "Greetings" :
//     (login == '') ? "No Login" :
//     "";

// alert(message)

// // Logical Operators
// let age = prompt("What is your age?", 0)

// if (age >= 14 && age <=90) {
//     alert("Your age is between 14 and 90!")
// } else {
//     alert("Your age is not between 14 and 90!")
// }

// let age = prompt("What is your age?", 0)

// if (age < 14 || age > 90) {
//     alert("Your age is not between 14 and 90")
// } else {
//     alert("Your age is between 14 and 90")
// }

// if (!(age >= 14 && age <=90)) {
//     alert("Your age is not between 14 and 90")
// } else {
//     alert("Your age is between 14 and 90")
// }

// let identity = prompt("Who's there?")

// if (identity == "Admin") {
//     let password = prompt("Password?")

//     if (password == "TheMaster") {
//         alert("Welcome")
//     } else if (password == null || identity == "") {
//         alert("Canceled")
//     } else {
//         alert("Wrong Password")
//     }

// } else if (identity == null || identity == "") {
//     alert("Canceled")
// } else {
//     alert("I don't know you")
// }

// // Loops
// let i = 0;
// let j;

// for (i = 2; i <= 10; i++) {
//     if (i % 2) continue;
//     alert(i)
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// let number = 0;

// outer:
// while (number < +101) {
//     number  = prompt("Enter a number greater than 100?")
//     if (number == null || number == "") break
//     if (typeof number != "number") {
//         alert("Enter a number please");
//         continue outer;
//     }
// }

// let n = prompt("Do you want to see the prime numbers between 2 and what number?");

// outer:
// for (i = 2; i <= n; i++) {
//     for (j = i - 1; j > 1; j--) {
//         if (i % j == 0) continue outer; //if not prime number the next iteration of outer begins
//         else if (i % j != 0) continue; //moves to next number
//     }
//     alert(i)
// }

// // Switch Statement
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt("What is your browser")

// if (browser === "Edge") {
//     alert("You've got the Edge!")
// }
// else if (browser === "Chrome" || browser === "Firefox" || browser === "Safrai" || browser === "Opera") {
//     alert("Okay we support these browsers too")
// }
// else {
//     alert("We hope that this page looks ok!")
// }

// // To precisely match the functionality of the switch statement a strict comparison must be
// // Need to use OR operator and not commas as this does not work like HTML or CSS

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch(a) {
//     case 0:
//         alert( 0 );
//         break
//     case 1:
//         alert( 1 );
//         break
//     case 2:
//     case 3:
//         alert ("2,3");
//     break
// }

// // Functions

// let age = prompt("How old are you?")

// function checkAge1(age) {
//     return age > 17 ? true : confirm("Do you have permission from your parents?")
// }

// function checkAge2(age) {
//     return (age > 18) || confirm("Do you have permission from your parents?")
// }

// function accessState(result) {
//     if (result == true) {
//         alert("Welcome")
//     }
//     else {
//         alert("You are not old enugh")
//     }
// }

// accessState(checkAge1(age));

// let a;
// let b;

// function getValues() {
//     a = prompt("What is the first value?")
//     b = prompt("What is the second value?")
//     return a, b;
// }

// function min(a,b) {
//     if (a > b) {
//         return b;
//     } else if (b > a) {
//         return a;
//     }
// }

// getValues();
// alert(`The smaller value is ${min(a,b)}`)

// let x;
// let n;

// function getValues() {
//     x = prompt("What is the base?");
//     n = prompt("What is the exponent?");
//     return x, n;
// }

// function check_nPositive (p) {
//     if (p > 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function action() {
//     getValues();
//     check_nPositive(n)
//     for (let a = check_nPositive(n); a == false; a = check_nPositive(n)) {
//             alert("Please enter a positive interger for the exponent")
//             getValues();
//         }
//     alert(x ** n)
// }

// action();

// function pow(x,n) {
//     for (a = check_nPositive(n); a == false; check_nPositive(n)) {
//         continue
//     }
//     let result = x**n;
//     return result;
// }

// getValues();
// alert(`The result is ${pow(x,n)}`);

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution."),
//   );

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 0) {
//   alert(`Power ${n} is not supported,
//     please enter an integer number greater than zero`);
// } else {
//   alert( pow(x, n) );
// }

// // Objects
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//    for (let key in obj) {
//        if (typeof obj[key] == "number") {
//            obj[key] = obj[key] * 2
//        } else {
//            continue
//        }
//    }
// }

// let calculator = {
//     sum() {
//         return this.firstValue + this.secondValue
//     },
//     mul() {
//         return this.firstValue * this.secondValue
//     },
//     read() {
//         this.firstValue = +prompt("First Value");
//         this.secondValue = +prompt("Second Value");
//     }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// function User(name, age, relationship) {
//     this.name = name;
//     this.age = age;
//     this.relationship = relationship;
//     this.isAdmin = false;
// }

// let summer = new User("Summer", 18, "Girlfriend")

// console.log(summer.name);
// console.log(summer.age)
// console.log(summer.relationship);

// function Calculator() {

//     this.read = function() {
//         this.a = +prompt("What is value a?")
//         this.b = +prompt("What is value b?")
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator()

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul())

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         for (let i = 0;+ i < this.number; i++) {
//             this.a = +prompt(`Value number ${i + 1}`);
//             this.value += this.a;
//         }
//     }
//     this.numberOfValues = function() {
//         this.number = +prompt("How many values would you like to add?")
//     }

// }

// let accumulator = new Accumulator(1);

// accumulator.numberOfValues();
// accumulator.read();
// console.log(accumulator.value);

// function sumAndShow() {
//     let a = +prompt("What is the first value?");
//     let b = +prompt("What is the second value?");
//     return a + b;
// }

// console.log(sumAndShow())

// function readNumber() {
//     let a;
//     a = prompt("Enter a number");
//     if (isFinite(a) == true) {
//         return +a;
//     } else if (a == null || a == "") {
//         return null;
//     } else if (isNaN(a) == true) {
//         alert("That is not a number")
//         readNumber();
//         return a;
//     }
// }

// // if I want something to repeat I should use a loop that checks for a condition!!!

// console.log(readNumber())

// function readNumber() {
//     let a;
//     do {
//         a = prompt("Enter a number")
//     } while (isFinite(a) == false)

//     if (a == null || a == "") return null;
//     else if (isNaN(a) == true) alert("That is not a number");

//     return +a;
// }

// console.log(readNumber());

// console.log ((Math.random() + 1) * 3)

// function random(min, max) {
//     let aValue = min + Math.random();
//     let bValue = max - Math.random();
//     let randomValue = (aValue + bValue) / 2;
//     return randomValue;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(random(1, 5))
// }

// function random2(min, max) {

// }

// function random(min, max) {
//     return parseInt(min + Math.random() * (max));
//   }

// for (let i = 0; i < 100; i++) {
//     console.log(random(3, 10))
// }

// function ucFirst(str) {
// if (!str) return str;

//     let newStr = str[0].toUpperCase() + str.slice(1);
//     return newStr;
// }

// console.log(ucFirst("platinyum"))

// function checkSpam(str) {
//     let defaultStr = str.toLowerCase();

//     if (str.indexOf("viagra") != -1 || str.indexOf("xxx") != -1) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSpam("Pokemon ios the best game toe ver exist hoesntly vIaGra"))

// function truncate(str, maxlength) {
//     let newStr;

//     if (str.length > maxlength) {
//         newStr = str.slice(0, maxlength - 1) + "…"
//         return newStr;
//     } else {
//         return str;
//     }
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20))

// function extractCurrencyValue(str) {
//     let newStr = str.slice(1)
//     return +newStr;
// }

// console.log(extractCurrencyValue('$120') === 120)

// let styles = [
//     "Jazz",
//     "Blues",
// ];
// console.log(styles);

// styles.push("Rock-n-Roll")
// console.log(styles);

// styles[(styles.length - 1) / 2] = "Classics"
// console.log(styles)

// styles.shift();
// console.log(styles)

// styles.unshift("Rap", "Raggae")
// console.log(styles)

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log ( this );
// })

// arr[2]();

// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     let value;

//     do {
//         value = prompt("Give me values and I will sum them");
//         arr.push(value);
//     } while (value != null && value != "" && isFinite(value) == true);

//     arr.length -= 1

//     for (let item of arr) {
//         sum = sum + parseInt(item);
//     }

//     return sum;
// }

// console.log(sumInput());

// let names = "Bilbo, Gandalf; Nazgul"

// let arr = names.split("; ");

// console.log(arr)

// let str = "background-color-pokemon"

// function camelize(str) {
//     let arr = str.split("-");
//     let arr2 = str.split("-")

//     console.log(arr)

//     let newArr = arr.splice(0, 1)

//     newArr = arr.map(function(item) {
//         item = item[0].toUpperCase() + item.slice(1);
//         return item;
//     })

//     newArr.unshift(arr2[0])

//     let newStr = newArr.join("")

//     return newStr;
// }

// console.log(camelize("Style-is-the-best"))

// function filterRange(arr, a, b) {
//     let newArr = arr.filter(item => item >= a && item <= b)
//     return newArr;
// }

// let arr = [
//     2,
//     5,
//     6,
//     10,
//     15,
//     21
// ]

// console.log(filterRange(arr, 0, 1000))

// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
// ]

// function filteRangeInPlace(arr, a, b) {
//     arr.forEach(function(item, index) {
//         if (item < a || item > b) {
//             console.log(item)
//             // console.log(a)
//             // console.log(b)
//             arr.splice(index, 1);
//         }
//     })
// }

// filteRangeInPlace(arr, 9, 12)
// console.log(arr)

// let arr = [5, 2, 1, -10, 8]

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// arr.sort(compareNumeric)
// arr.reverse();

// console.log(arr)

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted( arr) {
//     let copyArr = arr.slice();
//     let sortedArr = copyArr.sort();
//     return sortedArr
// }

// let sorted = copySorted(arr)

// console.log( sorted )
// console.log ( arr )

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(function(item) {
//     item = {
//         fullName: (`${item.name} ${item.surname}`),
//         id: item.id
//     }
//     return item;
// })

// console.log(usersMapped)

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function unique(arr) {
//     let uniqueSet = new Set();

//     arr.forEach(function(item) {
//         uniqueSet.add(item);
//     })
//     return uniqueSet;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values))

// function aclean(arr) {
//     let map = new Map();

//     for (let item of arr) {
//         let letters = item.toLowerCase().split("").sort().join("");
//         map.set(letters, item)
//     }
//     return map.values;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr))

// function sumSalaries(salaries) {
//     let sum = 0;

//     for (let item of Object.values(salaries)) {
//         sum += +item;
//     }

//     return sum;
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// console.log(sumSalaries(salaries))

// let user = {
//     name: 'John',
//     age: 30,
//     pokemon: "Platinum",
// };

// function count(obj) {
//     return Object.keys(obj).length;
// }

// console.log(count(user))

// let user = {
// 	name: 'John',
// 	years: 30
// };

// let { name, years, isAdmin = false } = user;

// console.log(name);
// console.log(years);
// console.log(isAdmin);

// //
// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250
// };

// console.log(topSalary(salaries));

// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }

//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }

//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 1000000; i++) f(date1, date2);
//     return Date.now() - start;
//   }

//   console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
//   console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

// function getSecondsToday() {
// 	let today = new Date();
// 	let now = Date.now();

// 	today.setHours(0, 0, 0, 0);

// 	return Math.round((now - today) / 1000);
// }

// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
// 	let tomorrow = new Date();
// 	tomorrow.setDate(new Date().getDate() + 1);

// 	let now = Date.now();
// 	tomorrow.setHours(0, 0, 0, 0);

// 	return Math.round((tomorrow - now) / 1000);
// }

// console.log(getSecondsToTomorrow());

// function formatDate(date) {
// 	let inputDate = date;
// 	let now = Date.now();

// 	let diff = now - inputDate;
//     let diffInSeconds = diff / 1000;

//     let currentYear = String(inputDate.getFullYear());
//     let currentYearLastDigits = currentYear[2] + currentYear[3]

// 	if (diff < 1000) {
// 		return 'Right Now';
// 	} else if (diff >= 1000 && diff < 60000) {
// 		return `${diffInSeconds} sec. ago`;
// 	} else if (diff >= 60000 && diff < 3600000) {
// 		return `${diffInSeconds / 60} min. ago`;
// 	} else {
// 		return `${inputDate.getDate()}.${inputDate.getMonth()}.${currentYearLastDigits} ${inputDate.getHours()}:${inputDate.getMinutes()}`;
// 	}
// }

// console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Conference',
// 	occupiedBy: [ { name: 'John' }, { name: 'Alice' } ],
// 	place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
// 	JSON.stringify(meetup, function replacer(key, value) {
// 		return value == meetup && key != '' ? undefined : value;
// 	})
// );

// let Obj = {
// 	name: {
// 		first: 'something',
// 		last: 'something11'
// 	},
// 	type: {
// 		heading: 'header1',
// 		fields: {
// 			label: 'value1'
// 		}
// 	}
// };

// let { name: { first, last }, type: { heading, fields } } = Obj;

// fields["Valuelabel"] = fields["label"]
// delete fields["label"]

// console.log(fields)

function loopSumTo(n) {
	let sum = 0;

	for (let i = n; i > 0; i--) {
		sum += i;
	}

	return sum;
}

function recursionSumTo(n) {
	let sum = 0;

	if (n == 1) {
		return n;
	} else {
		return (sum = n + recursionSumTo(n - 1));
	}
}

function arithmeticSumTo(n) {
	let sum = 0;

	return n / 2 * (n + 1);
}

console.log(loopSumTo(5));
console.log(recursionSumTo(9999));
console.log(arithmeticSumTo(5));

function factorial(n) {
	let sum = 1;

	if (n == 1) {
		return n;
	} else {
		return (sum = n * factorial(n - 1));
	}
}

console.log(factorial(140));

function fib(n) {}
