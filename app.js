// function hello() {
//     console.log("Hello, how'z going");
// }

// setTimeout(hello, 4000);

// setTimeout(() => {
//     console.log("Hello from arrow function with setTimeout")
// }, 4000);


// call backs 
// const sum = (a, b) => {
//     console.log(a + b);
// }

// function calculator(a, b, sumcallback){
//     sumcallback(a, b);
// }

// calculator(1,2,sum);


// call backhell
function getdata(dataid, getnextdata){
    setTimeout(() =>{
        console.log("data", dataid)
        if(getnextdata){
            getnextdata();
        }
    },2000);
}

getdata(1,()=>{
    getdata(2, ()=>{
        getdata(3, ()=>{
            getdata(4);
        })
    });
});
 
// function printnum(num, nextnum){
//     setTimeout(()=>{
//         console.log("Num: ", num);
//         if(nextnum){
//             nextnum();
//         }
//     }, 2000);
// }

// printnum(1, ()=>{
//     printnum(2, ()=>{
//         printnum(3, ()=>{
//             printnum(4);
//         })
//     })
// })

/*
Task:
    Create a function displayMessage(message, nextStep) that:
    Uses setTimeout to print the message after 1 second.
    If nextStep (a callback function) is provided, execute it after printing the message.
*/

// function displayMessage(message, nextStep){
//     setTimeout(() =>{
//         console.log(message)
//         if(nextStep){
//             nextStep();
//         }
//     }, 1000);
// }


// displayMessage("Hi", ()=>{
//     displayMessage("How are You?", ()=>{
//         displayMessage("Good to See you!")
//     })
// });

/* 
New Task: Chaining Multiple Asynchronous Actions
Create a function countdown(number, nextStep) that:
Uses setTimeout to print the countdown number every second
If nextStep (a callback function) is provided, execute it when the countdown reaches zero.
*/

// function countdown(number , nextStep){
//     setTimeout(()=>{
//         console.log("Level: ", number);
//         if(number > 1){
//             countdown(number - 1, nextStep);
//         }else{
//             nextStep();
//         }
//     },1000);
// }

// countdown(4, ()=>{
//     console.log("🚀 Lift Off!");
// })

/* 
Next Level Task: Simulating a Cooking Process 🍳
You need to create a function cookStep(step, nextStep) that:
Prints the step after 2 seconds.
If there’s a nextStep, execute it after the current step finishes.
*/

// function cookStep(step, nextStep){
//     setTimeout(()=>{
//         console.log(step);
//         if(nextStep){
//             nextStep();
//         }
//     }, 2000);
// }

// cookStep("Boiling Water...", ()=>{
//     cookStep("Adding Pasta...", ()=>{
//         cookStep("Cooking Pasta...", ()=>{
//             cookStep("Draining Water...", ()=>{
//                 cookStep("Pasta is ready!🍝");
//             })
//         })
//     })
// })



/* 
Create the table of 2 using the callback hell till 10
*/


// function table(step, nextStep){
//     setTimeout(()=>{
//         console.log(step);
//         if(step != 10){
//             table(step + 2, nextStep);
//         }
//         else{
//             nextStep();
//         }
//     },1000);
// }

// table(2, ()=>{
//     console.log("table completed");
// })


// function tabl(num){
//     setTimeout(() => {
//         console.log(num);
//         if(num < 20){
//             tabl(num + 2);
//         }
//     }, 1000);
// }

// tabl(2, ()=>{
//     tab(4, ()=>{

//     })
// })

// function timers(n){
//     setTimeout(() => {
//         console.log(n);
//         if(n > 1){
//             timers(n - 1);
//         }
//         else{
//             console.log("Happy New Year");
//         }
//     }, 1000);
// }


// timers(5, ()=>{

// })


function printing(num, nextnum){
    setTimeout(() => {
        console.log(num);
        if(nextnum){
            nextnum();
        }
    }, 1000);
}


printing(1, ()=>{
    printing(2, ()=>{
        printing(3, ()=>{
            printing(4, ()=>{
                printing(5);
            })
        })
    })
})


