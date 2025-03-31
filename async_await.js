console.log("Async and Await in js");

// console.log("async");
// async function one (){
//     console.log("Hello");
// }
// one();

function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("whether data....");
            resolve(200);
        }, 2000);
    });
}

async function getwhetherdata(){
    await api();
    await api();
}

getwhetherdata();


function table(num){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(num);
            if(num != 20){
               resolve(num + 2);
            }
            else{
                reject("table completed")
            }
        }, 1000);
    });
}

async function tab() {
    let num = 2;
    while (num <= 20){
        num = await table(num);
    }
}

tab();

function printing(num){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function helper() {
    await printing(1);
    await printing(2);
    await printing(3);
    await printing(4);
    await printing(5);
}

helper();