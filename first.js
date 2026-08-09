// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json

const BASE_URL = "https://api.fastforex.io/fetch-one?api_key=a46b93a828-9c0c63777c-tj2yex&"

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
console.log(toCurr)
const msg = document.querySelector(".msg")

for(let select of dropdown) {
    for(currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value = currCode
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1
        amount.value = 1
    }

    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`
    const URL = `${BASE_URL}from=${fromCurr.value}&to=${toCurr.value}`
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()]

    let finalAmount = amtVal * rate
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

const updateFlag = (element) => {
    let currCode = element.value
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    updateExchangeRate()
})

window.addEventListener("load", () => {
    updateExchangeRate()
})






// let URL = "https://cat-fact.herokuapp.com/facts"
// const getFacts = async () => {
//     console.log("Fetching data...")
//     let response = await fetch(URL)
//     console.log(response) //JSON format
//     let data = await response.json()
//     console.log(data)
// }

// By promise chaining
// function getFacts () {
//     fetch(URL).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// let promise = fetch(URL)
// console.log(promise)

// let users = [{name:"Alex", age:20},
//             {name:"bob", age:22},
//             {name:"clair", age:19}]
// let newUsers = users.filter((obj)=>{
//     return obj.age >= 20
// }).map((obj)=>{
//     return obj.name
// })


// let el = document.createElement("button")
// el.style.height = "50px"
// el.style.width = "50px"
// el.innerText = "Click me!"
// let body = document.querySelector("body")
// body.prepend(el)
// el.addEventListener("click", ()=>{
//     body.style.backgroundColor = "pink"
// })

// let arr = [1,2,3,4,5];
// let max = arr.reduce((res, val) => {
//     return res>val?res:val
// })

// let arr = [1,2,3,4,5]
// let sum = arr.reduce((res, val) => {
//     return res + val
// })

// var x=10
// function test() {
//     console.log(x)
//     var x=20
//     console.log(x)
// }
// test()

// for(var i=0; i<3; i++) {
//     // setTimeout(()=>console.log(i),0)
//     console.log(i)
// }

// let arr = [1,2,3].map(x=>x*2)

// console.log(a);
// let a = 10;

// async await
// function sum(a, b, getNext) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(a < 0) reject("Negative!");
//             else {
//                 console.log(`${a}+${b}=${a+b}`);
//                 resolve("Success");
//             }
//             if(getNext) getNext();
//         }, 2000);
//     })
// }
// async function allSum() {
//     try {
//         await sum(1, 2);
//         await sum(3, 4);
//         await sum(-1, 2);
//     }
//     catch {
//         console.log("Error caught");
//     }
// }


// Promise
// function sum(a, b, getNext) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //         if(a < 0) reject("Negative!");
    //         else {
    //             console.log(`${a}+${b}=${a+b}`);
    //             resolve("Success");
    //         }
    //         if(getNext) getNext();
    //     }, 2000);
    // })
// }
// sum(1, 2).then(()=>{
//     return sum(3, 4);
// }).then(()=>{
//     return sum(-1, 2);
// }).catch((err)=>{
//     console.log(err);
// })

// Callback
// function sum(a, b, getNext) {
//     setTimeout(()=>{
//         console.log(`${a}+${b}=${a+b}`);
//         if(getNext) getNext();
//     }, 2000);
// }
// sum(1, 2, ()=>{
//     sum(3, 4);
// });


// IIFE
// (async () => {
//     console.log("Async Arrow function");
// })();

// let el = document.createElement("button");
// el.innerText = "Change mode!";
// el.style.height = '50px';
// let body = document.querySelector("body");
// body.prepend(el);
// let mode = "light";
// el.addEventListener("click", () => {
//     if(mode === "light") {
//         mode = "dark";
//         body.style.backgroundColor = "gray";
//         el.style.backgroundColor = "pink";
//     }
//     else {
//         mode = "light";
//         body.style.backgroundColor = "pink";
//         el.style.backgroundColor = "gray";
//     }
// })

// let count = 0;
// el.addEventListener("click",() => {
//     count++;
//     console.log(`Button was clicked ${count} times!`);
// })

// el.onclick = () => {
//     console.log("Button was clicked!");
// }

// Sum of odd numbers
// let arr = [4,7,2,3,9,8];
// let oddArr = arr.filter((val)=>{
//     return val%2 != 0;
// })
// let sum = oddArr.reduce((res, val)=>{
//     return res+val;
// })

// length array
// let arr = ["pen", "paper", "scale"];
// let newArr = arr.map((val)=>{
//     return val.length;
// })
// console.log(`New array: ${newArr}`);

// Count evens
// let cntEven = (arr, count) => {
//     for(let val of arr) {
//         if(val%2 == 0) count++;
//     }
//     console.log(`Evens in ${arr} are ${count}`);
// }
// cntEven([2,5,5,4,6,3], 0);


// Largest number
// let arr = [2,5,9,6,3];
// let largeNum = arr.reduce((res, val)=>{
//     return res>val?res:val;
// })
// console.log(`Largest number from ${arr} is ${largeNum}`);

// practice
// let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.shift();
// arr.splice(1,1,"Ola");
// arr.push("Amazon");
// console.log(`Required array: ${arr}`);

// remove duplicates
// let arr = [1,2,2,3,4,4,5,6,6];
// let left = 0, right = 1, size = arr.length;
// while(right < size) {
//     if(arr[left] === arr[right]) {
//         while(arr[left] === arr[right] && right < size) right++;
//         arr.splice(left+1,right-left-1);
//         right = left + 1;
//     }
//     left++;
//     right++;
// }
// console.log(`Array without duplicates: ${arr}`);

// even & odd
// let arr = [10,15,22,31,44,57,68];
// let even = 0, odd = 0;
// for(let el of arr) {
//     if(el%2 === 0) even++;
//     else odd++;
// }
// console.log(`In ${arr} evens are ${even} & odds are ${odd}`);

// largest
// let arr = [12,45,7,89,23,56];
// let tmp = arr[0];
// for(let el of arr) {
//     if(el > tmp) tmp = el;
// }
// console.log(`Largest element from ${arr} is ${tmp}`);

// average
// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let el of arr) {
//     sum += el;
// }
// let avg = sum/arr.length;
// console.log(`Avg of ${arr} : ${avg}`);

// print all elements
// let arr = [1,2,3,4,5];
// for(let el of arr) {
//     console.log(el);
// }

// create username
// let fullName = prompt("Enter full name");
// fullName = fullName.replaceAll(" ","");
// let userName = `@${fullName}${fullName.length}`;
// console.log("Full name:", fullName);
// console.log("Username:", userName);

// Table of a number
// let num = prompt("Enter a number");
// console.log("Table of", num);
// for(let i=1; i<=10; i++) {
//     let table = `${num} x ${i} = ${num*i}`;
//     console.log(table);
// }

// reverse string
// let str = prompt("Enter a string");
// let rev = "";
// let n = str.length-1;
// for(let i=n; i>=0; i--) {
//     rev += str[i];
// }
// console.log("Entered string:", str);
// console.log("Reversed string:", rev);

// count vowels
// let str = prompt("Enter a string");
// let cnt = 0;
// for(let i of str) {
//     if(i === 'a' || i === 'e' || i === 'i'
//         || i === '0' || i === 'u') {
//             cnt++;
//         }
// }
// console.log("Number of vowels in", str, ":", cnt);

// odd num from 1-100
// for(let i=1; i<=100; i++) {
//     if(i%2 !== 0) {
//         console.log(i);
//     }
// }

// let fullName = prompt("Enter full name without spaces.");
// let userName = `@${fullName}${fullName.length}`;
// console.log("Username:", userName);

// let gameNum = 25;
// let userNum = prompt("Enter the game number");
// while(gameNum != userNum) {//prompt always answers in string form that is why != instead of !==
//     userNum = prompt("You entered wrong. Guess again.");
// }
// console.log("Congrats, you entered correct game number.");

//Template Literal
// let specialString = `This is a Template Literal.`;
// let obj = {
//     item: "pen",
//     price: 5,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;//Template literal and string interpolation
// console.log(output);
// console.log("The cost of", obj.item, "is", obj.price);

//escape characters
// console.log("Bhavya \nSah");

//for-in loop
// let student = {
//     name: "Bhavya",
//     age: 24,
//     cgpa: 8.2,
//     isPass: true,
// };
// for(let key in student) {
//     console.log("key:", key, "val:", student[key]);
// }

//for-of loop
// let str = "Bhavya";
// for(let i of str) {
//     console.log("i =", i);
// }

// let marks = prompt("Enter marks (1-100)");
// let grade;
// if(marks >= 80 && marks <= 100) grade = "A";
// else if(marks >= 70 && marks <= 89) grade = "B";
// else if(marks >= 60 && marks <= 69) grade = "C";
// else if(marks >= 50 && marks <= 59) grade = "D";
// else grade = "F";
// console.log("Grade based on your marks is", grade);

// let num = prompt("Enter a number");
// if(num%5 === 0) {
//     console.log(num, "is a Multiple of 5.");
// }
// else {
//     console.log(num, "is NOT a Multiple of 5.");
// }

// console.log('Welcome to JS!');
// console.log('Bhavya');
// fullName = "Tony Stark";
// // x = null; //We know that there's an empty value
// // y = undefined; //We don't know what's in it
// isFollow = false;
// let x = BigInt("123");
// let y = Symbol("Hello");
// console.log(x);
// const student = {
//     fullName : "Bhavya Sah",
//     age : 24,
//     cgpa : 8.2,
//     isPass : true,
// };
// console.log(student.age);
// console.log(student["age"]);

// let a = 5;
// let b = 2;
// console.log("a + b =", a+b);

// alert("Bhavya"); //for pop up
// prompt("Bhavya"); //for pop up and taking temporary input
// let name = prompt("Hello");
// console.log(name); //for taking temporary input and printing
