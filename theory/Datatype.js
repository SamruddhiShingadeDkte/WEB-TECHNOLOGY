//there are 6 datatypes in the js

let num_data = 2;//it is number datatype
console.log(typeof(num_data))

let str_data = "samruddhi"; //stores string data
console.log(typeof(str_data))

let bool_data = false ;//store boolean i.e true or false data here
console.log(typeof(bool_data))

let undefined_data ; //store undefined value means nothing is stored and the datatypeis undefined
console.log(typeof(undefined_data))

let null_data = null; //stores null or empty or zero value datatype is object
console.log(typeof(null_data))

let big_data = 123456789n ; //stores big value of an integer 
console.log(typeof(big_data)) //datatype is big int

//the main difference in big int and the number is big int end with "n" whereas no any constarint on number 
//also in number we have limit i.e only 64 bit floating point is allowed whereas in big int we can store any numbers there is no limit just limit is of memory otherwise we can store any long numbers 

//all primitive datatype are stored in stack 
//memory :- stack used as primitive datatype. whatever you can declare variable it gives copies.
//and heap is used as non primitive . it gives reference original value .
//stack will copies values and then assign that copy to other variable dont make changes in actual value
//therefore when we assign one variable to another the copy is made so changing one doesnt affect to others .
//non primitive datatypes stored in heap memory when we assign 1 object to other variable reference is copied not the value 
// so if we change one both variable see the changes . 
let myYoutubeName = "SMS"
let newYoutubeName = myYoutubeName
newYoutubeName = "PMS"
console.log(myYoutubeName)
console.log(newYoutubeName)

//heap example :-here the reference address is shared therefore both will point to the same object therefore if we change one value then it will directly affects to other .
let user1 = {email : "suresh@gmail.com",
    fname : "Suresh",
    id : 1
}
let user2 = user1
user2.email = "mukesh@gmail.com"
console.log(user1.email)
console.log(user2.email)