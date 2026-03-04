function Add(num1,num2){
    return num1+num2
}

function EvenOdd(num){
    if(num%2 == 0){
        console.log("Even number");
    }
    else{
        console.log("Odd number")
    }
}
let result = Add(5,10);
console.log("Sum is : "+result);

EvenOdd(78)

function addTwoNumbers(num5,num6){
    return num5+num6;
    
}
let res = addTwoNumbers(3,4);//fun_name(arguments)
console.log(res)
function subTwoNumber(num2,num3){
    return num2-num3;
    console.log("hello subTwoNumber")  //after return nothing was executed 
}
let r1 = subTwoNumber(6,5);
console.log(r1)

function displayName(name){
    return `Name is ${name}`;
}

console.log(displayName("samruddhi")) //Name is samruddhi
console.log(displayName()) //Name is undefined i.e when string is empty it gives undefined value is output 

function concept(age){
    return age;
}
console.log(concept(20,89,70)); // here even if we are passing multiple arguments for a single parameter then it will take only 1st value 

function SpreadOperator(...num9){
    return num9;
}
console.log(SpreadOperator(90,87,92,22)); // here spread operator means we are just giving "..." infront of single parameter then it will stores the multiple arguments in a single parameter in the form of array 

const a = ()=>{
    console.log("hi")
}

//this keyword story  :
/*here if we use this keyword inside the normal function then it will gives us all the functionality and if we use that inside the arrow function then it will gives the empty object therefore for that purpose we dont use this inside the arrow function */
function tea(){
    username = "samruddhi"
    console.log(`username = ${this}`) //username = undefined
    console.log(this)
}
tea();
const arrowFunctionExample = ()=>{
    username = "snehit"
    console.log(`username = ${this}`) //username = undefined
}
arrowFunctionExample();