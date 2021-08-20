// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete Email from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string in the previous array
// 26) Create an array with 100 random numbers in it
// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);

let obj = {
  name: "mansi",
  surname: "ganar",
  email: "mansi@123.com",
};

delete obj.email;

let arr = [
  "hello",
  "world",
  "asus",
  "apple",
  "one",
  "mouse",
  "home",
  "poland",
  "earth",
  "tree",
];

arr.forEach((e) => console.log(e));

let ranNumber = [];
for (i = 1; i <= 100; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  ranNumber.push(num);
}

ranNumber.sort();
console.log(ranNumber[0], ranNumber[ranNumber.length - 1]);
console.log(ranNumber);

let arrOfArr = [];

for (i = 0; i < 10; i++) {
  let arr = [];
  for (j = 0; j < 10; j++) {
    let num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
  }
  arrOfArr.push(arr);
}
console.log(arrOfArr);

function longestArray(arr1, arr2) {
  return arr1.length > arr2.length ? arr1 : arr2;
}

let b = longestArray([1, 2, 3], [3, 2, 2]);
console.log(b);

function higestSumOfArray(arr1, arr2) {
  arr1.reduceRight((acc, value) => acc + value) >
  arr2.reduceRight((acc, value) => acc + value)
    ? arr1.reduce((acc, value) => acc + value)
    : arr2.reduce((acc, value) => acc + value);
}
console.log(higestSumOfArray([1, 2, 3], [4, 5, 6]));

// DOM

// 31) Get element with ID "container" from the page
// 32) Get every "td" from the page
// 33) Create a cycle that prints the text inside every td of the page
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add the class "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list

function changeValues() {
  let container = document.getElementById("container");
  let tableTd = document.getElementsByTagName("td");
}
function printText() {}
function changeheading() {
  let changeHeadingName = (document.getElementById("heading").innerHTML =
    "I am the new heading now!");
}

function addItemstoUl() {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("This is the third child"));
  ul.appendChild(li);
}
