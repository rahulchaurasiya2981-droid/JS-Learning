console.log("Start");

setTimeout(()=>{
    console.log("CB SetTimeout");
},5000)

fetch('https://api.netflix.com')
.then(function cbF(){
    console.log("CB Netflix");
}) 

console.log("End")
