// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   res.end('Hello World tushar \n');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });



// function tushar(a,b){
//   return(a+b);
// }
// module.exports="Hi Friends Am Tushar";

// const express=require('express')
// const app=express();
// const PORT=3000;

// app.get('/',(req,res,next)=>{
//   res.send("Hello tushar Bidgar and use nodemon server is running")
// })

// app.listen(PORT ,()=>{
//   console.log(`Example listen on port: ${PORT}`)
// })


// // Define a simple object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   job: "Software Developer",
  
//   // A method inside the object
//   fullName: function() {
//       return this.firstName + " " + this.lastName;
//   },

//   // Another method to display a short introduction
//   introduction: function() {
//       return `Hello, my name is ${this.fullName()} and I am a ${this.job}.`;
//   }
// };

// // Access object properties
// console.log(person.firstName); // Outputs: John
// console.log(person['lastName']); // Outputs: Doe

// // Call object methods
// console.log(person.fullName()); // Outputs: John Doe
// console.log(person.introduction()); // Outputs: Hello, my name is John Doe and I am a Software Developer.




const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
  res.send("Hello Tushar How Are You");
})
app.listen(PORT,()=>{
console.log(`Page is Proper Running${PORT}`);
})