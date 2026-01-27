//we can declare two types of object :- object literals and object singleton
/* object is key value pairs (write any datatypes in object )
    object literals :-
*/
let user ={
    name : "samruddhi",
    age : 20,
    email : "samruddhi@gmail.com",
    city : "kolhapur",
    isLogin : true,
    lastLoginDay : ['mon','tue'],
    "full name" : "samruddhi mahesh shingade"
}
console.log(user)

console.log(user.email)

console.log(user.lastLoginDay) //[ 'mon', 'tue' ]

//whenever from database the key comes in string then access like this :-
console.log(user["full name"])

user.email = "samu@gmail.com"

console.log(user.email)

//suppose if the data of object is sensitive and we dontt  want to change that then we can use freeze methode 
//Object.freeze(user)

user.email = "abc@gmail.com"

console.log(user.email)

//symbol example :-
const mySymbol = Symbol("mrunal")
console.log(mySymbol)//Symbol(mrunal)

const myObj1 ={
    mySum : "10"
    
}
console.log(myObj1) //{ mySum: '10' }
console.log(typeof(myObj1)) //object //but from here we can not know that the given myObj1 is of symbol type also 

const myObj2 ={
   [mySymbol ]: "10"
}
console.log(myObj2) //{ Symbol(mrunal): '10' } (here we can know that object of symbol type is created )
console.log(myObj2[mySymbol]) //10 (gives value)

//create a symbol and add into objec and then print thei datatype and value 
user.greeting = function (){
    console.log("hello.js")
}

console.log(user.greeting()) //hello.js

user.greeting2 = function (){
    console.log(`email is : ${this.email}`) //string interpolation (as here we have already writing the function inside the user itself therefore to use its own methode use this keyword)
}
console.log(user.greeting2())
