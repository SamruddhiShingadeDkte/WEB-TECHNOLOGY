let myArr = [0,1,2,3,4]
console.log(myArr)

//activity :- find reason for this 
let myArr1 = [0,"samruddhi",2,3,4]
console.log(myArr1)

let myArr2 = new Array(1,2,3);//creating object of array
console.log(myArr2)
console.log(myArr2[1]) // o/p :- 2

//array methods :- 
myArr2.push(4) //adds element at the last in array 
console.log(myArr2) 

console.log(myArr2.pop())//removes last element from array
console.log(myArr2)

console.log(myArr2.unshift(2))//it shifts all element and put inserted element in front 
console.log(myArr2)
console.log(myArr2.shift())//remove first element 

console.log(myArr2.includes(4)) //checks whether that elements present or not

console.log(myArr2.indexOf(2)) //gives index of that number 

console.log(typeof(myArr2)) //object
 
const newArray = myArr2.join() //it will gives output in the string 
console.log(newArray) //1,2,3
console.log(typeof(newArray)) //string
