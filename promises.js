console.log("learning about the promises in js");


// let promise = new Promise((resolve , rejected) => {
//     console.log("task completed");
//     resolve("done");
// });

// function getdata(dataid, getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data", dataid);
//             resolve("success");
//             if(getnextdata){
//                 getnextdata();
//             }
//         }, 1000);
//     });
// }

// let promise1 = getdata(123);
// console.log(promise1)


/* 
Food delivery using promises
*/

// let mypromise = new Promise((resolve, reject) => {
//     let fooddelivered = true;
//     setTimeout(() =>{
//         if(fooddelivered){
//             resolve("Food delivered");
//         }
//         else{
//             reject("Delivered failed");
//         }
//     },1000)
// });

// mypromise
//     .then((message)=> {
//         console.log("Success", message); // runs when resolved
//     })
//     .catch((message) =>{
//         console.log("Failed", message);
//     })


 /* 
 
Exercise 1: Simulating a Coffee Order ☕
Create a Promise that simulates ordering coffee. The process takes 3 seconds:
If the coffee machine is working, resolve with "☕ Coffee is ready!".
If the coffee machine is broken, reject with "❌ Coffee machine is not working!". 
*/   


// let promisecoffee = new Promise((resolve, reject) =>{
//     let coffeemachine = false;
//     setTimeout(()=>{
//         if(coffeemachine){
//             resolve("☕ Coffee is ready!")
//         }
//         else{
//             reject("❌ Coffee machine is not working!");
//         }
//     },3000);
// });


// promisecoffee
//     .then((message) => {
//         console.log("Success!", message);
//     })
//     .catch((message) => {
//         console.log("Failed!", message);
//     })


/* 
Try creating a Promise that simulates downloading a file 📂:
The download takes 2 seconds
If internet = true, resolve with "📂 File downloaded!"
If internet = false, reject with "❌ No internet connection!"
*/

// let downpromise = new Promise((resolve, reject) =>{
//     let internet = false;
//     setTimeout(()=>{
//         if(internet){
//             resolve("📂 File downloaded!");
//         }
//         else{
//             reject("❌ No internet connection!");
//         }
//     }, 2000);
// });

// downpromise
//     .then((message)=>{
//         console.log("Successfully", message);
//     })
//     .catch((message)=>{
//         console.log("Failed", message);
//     })


/* 
Online Shopping Order System 🛒
Create a Promise-based system that:
Step 1: Place an order (2 sec delay)
If the item is in stock, resolve with "✅ Order placed successfully!"
If out of stock, reject with "❌ Item is out of stock!"
Step 2: Process the payment (3 sec delay)
If payment is successful, resolve with "💰 Payment processed successfully!"
If payment fails, reject with "❌ Payment failed!"
Step 3: Deliver the item (2 sec delay)
Always resolve with "📦 Order delivered!"
*/


// let shoppromise = new Promise((resolve, reject) => {
//     let stock = true;
//     let payment = true;
//     setTimeout(() => {
//         if(stock){
//             resolve("✅ Order placed successfully!");
//         }
//         else if(!stock){
//             reject("❌ Item is out of stock!");
//         }
//         if(payment){
//             resolve("💰 Payment processed successfully!");
//         }
//         else if(!payment){
//             reject("❌ Payment failed!");
//         }
//     }, 3000);
// });

// shoppromise
//     .then((message) =>{
//         console.log("Success", message);
//     })
//     .catch((message) =>{
//         console.log("Failed", message);
//     })


// function asyncfunction1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 3000);
//     });
// }


// function asyncfunction2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("some data2");
//             resolve("Success");
//         }, 3000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncfunction1();
// p1
// .then((message)=>{
//     console.log("fetching data2");
//     let p2 = asyncfunction2();
//     p2.then((res) =>{
        
//     });
// })
// .catch((message) => {
//     console.log("Failed!", message);
// })



function printing(num){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(num);
            resolve();
        }, 1000);
    });
}

printing(1)
    .then(() => printing(2))
    .then(() => printing(3))
    .then(() => printing(4))
    .then(() => printing(5))
    .then(() => console.log("Done with the printing using the promises"));