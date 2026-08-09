// let score = 75
// if(score > 80) {
//         console.log("Grade: A")
// }
// else if(score > 60) {
//         console.log("Grade: B")
// }
// else {
//         console.log("Grade: C")
// }


// let students = [{name:"alex", marks:50},
//                 {name:"bob", marks:60},
//                 {name:"charlie", marks:70}]
// let res = students.filter((student) =>
//         student.marks > 60).map((student) =>
//                             student.name)
// console.log(res)


// let cart = [{item:"pencil", price:10},
//             {item:"pen", price:20},
//             {item:"marker", price:30}]
// let totalPrice = cart.reduce((sum, val) =>
//                             sum + val.price, 0)
// console.log(totalPrice)


// let users = [{name:"alex", age:19},
//             {name:"bob", age:18},
//             {name:"charlie", age:17}]
// let res = users.filter((user) => user.age >= 18)
// console.log(res)


// console.log(a);

// var a = 10;

// let b = 20;

// function greet() {
//     console.log("Hello");
// }

// const add = (x, y) => x + y;

// (function () {
//     console.log("IIFE");
// })();

// greet();

// console.log(add(2, 3));

// multiply(2,3)
// var multiply = (a, b) => a * b;


// async function fetchGroup() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const users = await response.json()
//         const result = users.filter(user =>
//             user.company.name.includes("Group")
//         )
//         console.log(result)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// fetchGroup()


// async function getUser(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         const user = await response.json()
//         return user.name
//     }
//     catch(error) {
//         console.log(error)
//         return null
//     }
// }
// getUser(7).then(name => console.log(name))


// async function createPost() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "My Post",
//                 body: "Hello World",
//                 userId: 1
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// createPost()


// async function fetchPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const posts = await response.json();
//         posts.forEach(post => {
//             if(post.userId === 5) console.log(post)
//         });
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// fetchPosts()


// async function fetchUserNames() {
//     try {
//         console.log("Fetching users...");
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const users = await response.json()
//         users.forEach(user => {
//             console.log(user.name)
//         })
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// fetchUserNames()