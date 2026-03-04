//difference between arrow function and simple function . also how we can use this keyword in both :
/*
    syntax of simple function : function fun_name(parameters){
                                    body
                                }
    
    syntax of arrow function : const var_name = (parameters)=>{
                                    body
                                }
    simple function has its own this pointer . arrow function does not have this function means it will take it from outside 
    simple function can be used as the constructor function but in arrow function we can not use that . 
*/

//write a code for arrow function with two simple examples 
const even = (num)=>{
    if(num%2 ==0){
        console.log("Even number");
    }
    else{
        console.log("odd number");
    }
    
}

const table = (val)=>{
    for(let i=1;i<=10;i++){
        console.log(i*val+"\n");
    }
}

even(20);
table(2);

//write code for switch case
let number = 2;
switch(number){
    case 0 : console.log("Hello");
    break;
    case 1: console.log("Hii");
    break;
    case 2: console.log("Byy");
    break;
    case 3 : console.log("GoodBye");
    break;
    default : console.log("Sorry ..:(");
}

//write a code for how to use loops in array . (for,while,do-while,for each ,for of ,for in)
//for loop 
for(let i=0;i<=10;i++){
    console.log(i);
}

//while loop 
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//do while loop 
let j=50;
do{
    console.log(j);
    j++;
}while(j<55);

//for each
let arr = ["samruddhi","vaishnavi","amruta","rutuja","mrudula"];
arr.forEach((name)=>{
    console.log(name)
})

//for of 
let fruits = ["mango","apple","guava"];
for(let fruit of fruits){
    console.log(fruit);
}

//for in 
const obj = {
    name : "samruddhi",
    age : 21
}
for(let key in obj){
    console.log(key + " : "+obj[key]);
}

//difference between for of and for in 
/*
    here for of loop is used for the array,strings and iterals adn it will compulsory returs the valuesof arrays 
    where as in for in loop is mostly used for the objects and it will returns the keys of the objects or holds keys not the objects .  
*/

//how to use ternary operators
let age = 20;
let isAllowed = age>=18 ? "Allowed" : "Not Allowed";
console.log(isAllowed)

//how to use truthy and falsy values for which operateors in java script
/* 
    Falsy value : 0 , -0, 0n ,"", NaN , Null , undefined . all these are falsy values 
    truty values : values other than falsy values arre truthy values .

    operators : if() 
        logical AND : returns the first falsy values and if all are truthy then returns last truthy value
        eg : console.log(5 && "Hello");   // "Hello"
            console.log(0 && "Hello");   // 0
            
         logical OR : returns first truthy value .
         eg : console.log("" || "Default");   // "Default"
            console.log("Hi" || "Default"); // "Hi"   
            
        NOT operator : converts negative of actual boolean value .
        eg : console.log(!0);      // true
            console.log(!"Hi");   // false

            if we use !! then it will gives actual value .
        eg : console.log(!!"Hello"); // true
            console.log(!!0);       // false

*/

//how to use reduce methode in js 
/* reduce method is used to reduce an array to a single value like sum,maximum or minimum number .
    syntax : array.reduce((accumulator, currentValue) => {
                    return updatedAccumulator;
            }, initialValue);
        accumulator : stores the result after each iteration,
        currentValue : holds the current value in the array,
        updatedAccumulator : actual action,
        initialValue : providing initial value for the calculation.
*/
//eg : maximum number in array
let arr2= [1,2,3,4];
let res = arr2.reduce((acc,curr)=>{
    if(curr>acc){
        acc = curr;
    }
    return acc;
},0);
console.log(res);


