// //first take all the datatype variables 
// let num_data = 10;
// let str_data = "abc";
// let bool_data = true;
// let undefined_data;
// let null_data = null;
// let big_data = 123456789n;
// console.log(typeof(num_data)) ; //number datatype
// console.log(typeof(str_data)) ; //string datatype
// console.log(typeof(bool_data)) ; //boolean datatype
// console.log(typeof(undefined_data)) ; //undefined datatype
// console.log(typeof(null_data)); // object datatype
// console.log(typeof(big_data)) ; // big int datatype

// //typecasting
//  //converting string to number
// let str = "abh"
// let num_conversion = Number(str)
// console.log(str) ; // abh
// console.log(num_conversion) ; //it can not get converted into number
// console.log(typeof(str)) ; //string datatype
// console.log(typeof(num_conversion)) ; //number datatype

// let str1 = "20snehit" ;
// let num1_converion = Number(str1) ;
// console.log(str1) ; // 20
// console.log(num1_converion) ; //now it is converted into number as 20 
// console.log(typeof(str1)) ; //string datatype
// console.log(typeof(num1_converion)) ;//number datatype

// let str2 = "20snehit" ;
// let num2_converion = Number(str1) ;
// console.log(str2) ; // 20snehit
// console.log(num2_converion) ; //now here also it is not converted 
// console.log(typeof(str2)) ; //string datatype
// console.log(typeof(num2_converion)) ;//number datatype

// //arithmetic operations as :- +,-,/,*,%
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)

// //for string
// console.log("samuddhi"+"30") ; //samruddhisnehit
// //does not give output in other cases

// //conversion+arithmetic operation
// console.log("samuddhi"+"10"+30+40)
// console.log("1"+2);
// console.log(2+"1");
// //therefore js can only convert the number into string automatically whenerver there is arithmetic operation

// //ACTIVITY :-
// //CONVERTING NUMBER TO STRING
// let num1 = 30;
// let str1_converion = String(num1)
// console.log(num1) ; //30
// console.log(str1_converion) ; //"30"
// console.log(typeof(num1)); // number
// console.log(typeof(str1_converion)); // string

// //CONVERTING NUMBER TO BOOL
// let num2 =30;
// let b1_converion = Boolean(num2)
// console.log(num2) ; //30
// console.log(b1_converion) ; //true
// console.log(typeof(num2)); // number
// console.log(typeof(b1_converion)); // boolean
//here the b1_conversion value if false if the num2 is undefined or having null value 

//we can not typecast the number variable into the undefined

// //CONVERTING NUMBER TO object
// let num3 =30;
// let n1_converion = Object(num3)
// console.log(num3) ; //30
// console.log(n1_converion) ; //[Number: 30]
// console.log(typeof(num3)); // number
// console.log(typeof(n1_converion)); // object

// //CONVERTING NUMBER TO object
// let num4 =30;
// let bi1_converion = BigInt(num4)
// console.log(num4) ; //30
// console.log(bi1_converion) ; //30n
// console.log(typeof(num4)); // number
// console.log(typeof(bi1_converion)); // bigint

//  //converting string to boolean
// let str2 ="abh";
// let b2_conversion = Boolean(str2)
// console.log(str2) ; // abh
// console.log(b2_conversion) ; //true
// console.log(typeof(str2)) ; //string datatype
// console.log(typeof(b2_conversion)) ; //boolean datatype
//here value of b2_conversion is false when str2="" and str2 is undefined and also str2 is null
//we can not convert string into undefined


 //converting string to object
let str4 ="abh";
let o1_conversion = Object(str4)
console.log(str4) ; // abh
console.log(o1_conversion) ; //[String: 'abh']
console.log(typeof(str4)) ; //string datatype
console.log(typeof(o1_conversion)) ; //object datatype

 //converting string to bigint
let str5 ="23456789";
let b3_conversion = BigInt(str5)
console.log(str5) ; // abh
console.log(b3_conversion) ; //23456789n
console.log(typeof(str5)) ; //string datatype
console.log(typeof(b3_conversion)) ; //bigint datatype
//string value is converted into big int only when the string contains all digit not a single character should present and also no any point values and also str="" not allowed
