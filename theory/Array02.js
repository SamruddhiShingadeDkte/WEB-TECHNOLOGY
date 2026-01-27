let superMan = ["thor","captain america","krish"]

let val = ["hanuman"]

// superMan.push(val)

// console.log(superMan)//[ 'thor', 'captain america', 'krish', [ 'hanuman' ] ]

// console.log(superMan[3])//[ 'hanuman' ]

// console.log(superMan[2][0]) //first index is for choosing the element , next indext is for choosing the character i.e it is krish and then at 0th there is k therefore final output is 'k'

// console.log(superMan.concat(val))//concat method will directly merge the two array o/p: [ 'thor', 'captain america', 'krish', 'hanuman' ]

const anotherArr = [1,2,3,[4,5,6],7[6,7,[4,5]]] //nested array
const realAnotherArr = anotherArr.flat(Infinity)//it will removes all the brackets i.e all subarray brackets are removed i.e converts all array into one array 
const arr3 = anotherArr.flat(2)
console.log(realAnotherArr)
console.log(arr3)

//used all below methods for data scripting 

console.log(Array.isArray("samruddhi")) //gives element present or not
console.log(Array.from("Samuddhi")) //gives each letter in the form of array o/p:[
//   'S', 'a', 'm',
//   'u', 'd', 'd',
//   'h', 'i'
// ]

console.log(Array.from({name : "samruddhi"})); //gives empty array directly not convert in key values o/p : []

let Score1 = 100;
let Score2 = 200,Score3 = 300;
console.log(Array.of(Score1,Score2,Score3)); //stoes all variable into array o/p : [ 100, 200, 300 ]