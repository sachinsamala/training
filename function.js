// // // // function addtocart(){
// // // //     alert("product is added to cart successfully");
// // // //     document.body.style.background="GREY";
// // // // }
// // // // addtocart();

// // // // function demo(){
// // // //     console.log("Hello World");
// // // //     document.body.style.background="GREY";
// // // //     document.body.style..color="red";
// // // // }

// // // // demo();

// // // function add(a,b){
// // //     console.log(a);
// // //     console.log(b);
// // // }
// // // add(5,6);

// // function(){


// // }

// var dermo = function(){
//     console.log("anonymous function executing");
// }
// demo();

// function test(){
//     console.log("this is a test function");
// }
// test();


// (function(){
//     console.log("IIFE function executing");
    
// })
// ();

//arrow function

// let x = ()=>{
//     console.log("Arrow function executing");
 
// };
// x();

//function test1(a,b){
//     return a+b;
// }
// console.log(test1(5,5));

// let x = (a,b) => {return a*b};
// console.log(x(5,5));

// let y = (a,b) => a+b;
// console.log(y(100,200));

//higherorder function
// function hof(a){
//     return a;
// }
// let x = hof(function(){return "callback function"});
// console.log(x);

// let users = ["manoj" , "Asif" , "varshith", "ashwitha" , "sreenu"];
// console.log(users);
// users.map((user)=>{
//     console.log(user);
// })

// closure

var a = 10;
let b = 10;
function x(){
    var user = "vasanth";
    let company = "google";
    const sal = 123456;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a,b);
}    
x();


