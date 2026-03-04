const c=10;
let a = 10;
var b = 20;
{
    let a=200;
    var b=300;
    console.log(a,b)
}
console.log(a,b)

//we are using node.js beacuse we have to run the java script code outside the browser

//const variable value does not change not even we can reassign that

//difference between let and var is scope let will take the value which is available in that particular scope 
//but the var will take the updated values not the scope value

//difference between the null and undefined is null means the empty or zero value also null has datatype object 
//whereas undefined means we have not given any kind of value and undefined has datatype undefined

let acc_no = 101;//number
let name = "samruddhi";//string
let isAvailable = true ; //boolean
let price ; //undefined
let value = null ; //null
let big = 123456789076345672341567888888n; //big int
console.log(typeof(acc_no),typeof(name),typeof(isAvailable),typeof(price),typeof(value))
console.log(typeof(big))