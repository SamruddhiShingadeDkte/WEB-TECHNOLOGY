//Activity 2 :- a.array,function,object declaration
/*              b.write code for reverse number
                c. check palindrone number 
                d. write code for fibonacci series 
                e.find largest element in array 
                f.remove duplicate element in array 
                g.find missing number in array
                h.reverse the string 
                i.count vowels in string 
                j.check palindrone in string 
                k.for numbers , check prime number and factorial number 
                l.functions :- write function to find even or odd
                m.write function to find sum of numbers in array */ 

//Activity 2:-
// a.array,function,object declaration
//array declaration
//here we can directly initialise it 
//let arr = [1,2,3]
//or we can declare it with empty brackets also 
let arr2 =[]
//function declaration 
function fun_name(){
    //function code 
}
//object declaration 
const obj = {
    email : "abc@gmail.com",
    name : "abc"
}

//b.write code for reverse number
function ReverseNum(num){
    let reverse = 0,digit;
    while(num>0){
        digit = num % 10 ; 
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10); //if we dont use math.floorthen it will take the infinity value 
    }
    console.log("Reversed number is : "+reverse)
}
let number = ReverseNum(2356)

//c. check palindrone number
//1st approach by taking reverse number 
function reverseNum(num){
    let reverse = 0,digit;
    while(num>0){
        digit = num % 10;
        reverse = reverse*10 + digit;
        num = Math.floor(num/10);
    }
    return reverse;
}
let number2 = 121;
let reverse_num = reverseNum(number2);
if(number === reverse_num){
    console.log("Palindrome number")
}
else{
    console.log("Not a Palindrome number")
}

//2nd approach by maintaining two pointers
function ReverseNumbers(num){
    let str = num.toString();
    let left = 0,right = str.length-1;
    while(left<right){
        if(str[left] !== str[right]){
            return 0;
        }
        left++;
        right--;
    }
    return 1;
}
let result = ReverseNumbers(number)
if(result == 0){
    console.log("Not a Palindrome number")
}
else{
    console.log("Palindrome number")
}

//d. write code for fibonacci series
function fibonacciSeries(num){
    let a=0,b=1;
    console.log(a)
    console.log(b)
    for(i=3;i<=num;i++){
        let next = a+b
        console.log(next)
        a = b
        b = next 
    }
}
fibonacciSeries(10)



//e.find largest element in array
let arr3 = [100,3,4,5,6,7,89]
let k,temp=0;
for(k=0;k<arr3.length;k++){
    if(arr3[k]>temp){
        temp = arr3[k]
    }
}
console.log("Largest number is : "+temp)

// f.remove duplicate element in array 
let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);


// //h.reverse the string 
// let student_name = "samruddhi";
//here if we use split("") then it will converts the string into the array then in array there is readymade function to reverse () then after usin the join("") it will again convert that array data to string 
 console.log("Reversed string is : "+student_name.split("").reverse().join(""))

function reverseString(str){
    let i,new_str ="";
    for(i= str.length -1;i>=0;i--){
        new_str += str[i]
    }
    return new_str
}
let reversedString = reverseString(student_name)
console.log("Reversed string is : "+reversedString)

// i.count vowels in string 
let str = "samruddhi"
let j,count=0;
for(j=0;j<str.length;j++){
    if((str[j]=='a' || str[j]=='A') || (str[j]=='e' || str[j]=='E') || (str[j]=='i' || str[j]=='I') || (str[j]=='o' || str[j]=='O') || (str[j]=='u' || str[j]=='U')){
        count++;
    }
}
console.log("Count of vowels is "+count)

//j.check palindrone in string
//1st approach 
let fistString = "madam"
let revString = fistString.split("").reverse().join("")
if(fistString == revString){
    console.log("Palindrone ")
}
else{
    console.log(" Not Palindrone ")
}

//2nd approach 
function ReverseString2(str){
    let left = 0,right = str.length -1 ;
    while(left<right){
        if(str[left] !== str[right]){
            return 0;
        }
        left++;
        right--;
    }
    return 1;
}
let resultString = ReverseString2(fistString)
if(resultString == 0){
    console.log(" Not Palindrone ")
}
else{
    console.log(" Palindrone ")
}

//k.for numbers , check prime number and factorial number
//prime number : - 
function PrimeNum(num){
    console.log(num)
    let i,flag = 0;
    for(i=2;i<num/2;i++){
        if(num%i == 0){
            flag =1;
            break;
        }
        else{
            flag =0 ;
        }
    }
    if(flag == 0){
        console.log("Prime number")
    }
    else{
        console.log("Not Prime number")
    }
}
let num5 = 121
PrimeNum(num5)

//factorial of a number :-
function factorialNum(num){
    let res=1;
    while(num>0){
        res = res * num;
        num--;
    }
    console.log("Factorial of is "+res);
}
factorialNum(3)

//l.functions :- write function to find even or odd
function evenOdd(num){
    if(num%2 == 0){
        console.log("even number")
    }
    else{
        console.log("odd number")
    }
}
evenOdd(1)

//m.write function to find sum of numbers in array
let arr1 = [1,2,3,4]
let i;
let sum =0;
for(i=0;i<arr1.length;i++){
    sum = sum+arr1[i]
}
console.log(sum)