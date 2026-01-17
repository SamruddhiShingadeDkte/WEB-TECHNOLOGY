//there are 3 types of variable as let,const and var 
//during declaing any variable there is no need to specify the datatype there it can automacally identify that

//let variable means we can reassign the value to that variable also it is dependent on scope means it will take the values based on scope if you havr redeclare that variable 
let num1 = 10; //number datatype
console.log(typeof(num1)) 
{
   let num1 = 20;
    console.log(num1)
}
console.log(num1)

//var variable means here also we can reassign the value to that variable it is not dependent on scope means it will take the updated value if you redeclae that variable  
var num2 = 10; //number datatype
console.log(typeof(num2)) 
{
   var num2 = 20;
    console.log(num2)
}
console.log(num2)

//const variable means we can not reassign value to that variable once it was initialised 
//here also it was depended on the scope means it will take value based on the scope like let variable
const num3 = 10;
console.log(typeof(num3)) ; //number datatype
// num3 = 20 ;//gives error beacause we are assigning value whereas it was initialised at 23 line
{
    const num3 = 20;
    console.log(num3)
}
console.log(num3)

