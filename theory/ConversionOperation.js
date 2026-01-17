//first take all the datatype variables 
let num_data = 10;
let str_data = "abc";
let bool_data = true;
let undefined_data;
let null_data = null;
let big_data = 123456789n;
console.log(typeof(num_data)) ; //number datatype
console.log(typeof(str_data)) ; //string datatype
console.log(typeof(bool_data)) ; //boolean datatype
console.log(typeof(undefined_data)) ; //undefined datatype
console.log(typeof(null_data)); // object datatype
console.log(typeof(big_data)) ; // big int datatype

//typecasting
 //converting string to number
let str = "abh"
let num_conversion = Number(str)
console.log(str) ; // abh
console.log(num_conversion) ; //it can not get converted into number
console.log(typeof(str)) ; //string datatype
console.log(typeof(num_conversion)) ; //number datatype

let str1 = "20snehit" ;
let num1_converion = Number(str1) ;
console.log(str1) ; // 20
console.log(num1_converion) ; //now it is converted into number as 20 
console.log(typeof(str1)) ; //string datatype
console.log(typeof(num1_converion)) ;//number datatype

let str2 = "20snehit" ;
let num2_converion = Number(str1) ;
console.log(str2) ; // 20snehit
console.log(num2_converion) ; //now here also it is not converted 
console.log(typeof(str2)) ; //string datatype
console.log(typeof(num2_converion)) ;//number datatype

//now converting number to string 
let num1 = 30;
let str1_converion = String(num1)
console.log(num1) ; //30
console.log(str1_converion) ; //"30"
console.log(typeof(num1)); // number
console.log(typeof(str1_converion)); // string

//arithmetic operations as :- +,-,/,*,%
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)

//for string
console.log("samuddhi"+"30") ; //samruddhisnehit
//does not give output in other cases

//conversion+arithmetic operation
console.log("samuddhi"+"10"+30+40)
console.log("1"+2);
console.log(2+"1");
//therefore js can only convert the number into string automatically whenerver there is arithmetic operation