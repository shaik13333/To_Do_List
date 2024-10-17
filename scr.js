// let complexData = [
//     { name: 'Alice', details: { age: 25, ocation: 'New York' } },
//     { name: 'Bob', details: { age: 30 } }, 
//     [10, 20, { type: 'number', values: [5, 15, 25] }]
//   ];
  
 
//   let[{name,details:{ocation} },{details:{age}},[,twenty,{values:[,fifteen,]}]] = complexData;
//   console.log(name);
//   console.log(ocation);
//   console.log(age);
//   console.log(twenty);
//   console.log(fifteen); 


// let obj1 = {name:"aneeq",age:23,ach:{first:"jhbjhb",second:"kkbj"}};
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.ach.first = "sadiqqqqqqqqqqqqqqqqqqqqqqq";
// console.log(obj1);
// console.log(obj2);


//DOM VS BOM

// let obj3= {peru:"ssss",vaisu:33};

// let obj4 = JSON.parse(JSON.stringify(obj3));
// obj3.peru = "kkk";
// console.log(obj3);
// console.log(obj4);



// let promise  = new Promise((resolve,reject)=>{
//     let score = 300;
//    setTimeout(() => {
//     if(score!==300){
//         resolve("300 completed!!!");
//     }
//     else{
//         reject("still 300 not completed");
//     }
//    }, 5000);
// })
// promise.then(()=>console.log("promise resolved"));
// promise.catch(()=>console.log("promise not resolved"));






async function hh(){
    let api =  fetch("https://freetestapi.com/api/v1/movies");
    let res = await api;
    let re = await
     res.json()
    console.log(re);
    
}
hh();



// api.then(x=>x.json()).then((y)=>y.filter((g)=>{
//     if(g.genre.includes("Crime")){
//         console.log(g);
//     }
// }))


  










