//lets take a string
let name = "samruddhi";
//to print name there are many techniques as : -
console.log("The name is : "+name)
console.log(`The name is : ${name}`);

//we can also create the object of the string
let newStr = new String("Mrunal")
console.log(`The new string by creating object is : ${newStr}`)

//diff methods on string
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name[0])
console.log(name.charAt(2))
console.log(name.indexOf('i'))

//trim methode:-
let str2 = "    Hii    "
console.log(`Original String : ${str2}`)
//this function will remove the strating and ending spaces 
console.log(str2.trim())

//include and split methode :- the main rule of split methode is it will split the data and then stores it into the array compulsory even if we can pass any kind of parameter 
let str3 = "Hello from java script !!"
console.log(`Original String : ${str3}`)

//it will gives us result true if and only if the provided string is a substring of a actual string otherwise gives result false  
console.log(str3.includes("java"))//o/p :- true

//it will split the string based on the (",") i.e comma we are passing but in our string comma is not present therefore as it is string is dtored at the 0th index of the array
console.log(str3.split(","))//o/p:- [ 'Hello from java script !!' ]

//it will split the string based on the (" ") i.e space therefore as per the space data is splited and stored inside the array  
console.log(str3.split(" "))//o/p:- [ 'Hello', 'from', 'java', 'script', '!!' ]

//it will split the string based on the ("") i.e here we are passing nothing therefore data is get splitted as per each letter therefore each letter is stored at the diff position in the array  
console.log(str3.split(""))
/*o/p:-[
  'H', 'e', 'l', 'l', 'o', ' ',
  'f', 'r', 'o', 'm', ' ', 'j',
  'a', 'v', 'a', ' ', 's', 'c',
  'r', 'i', 'p', 't', ' ', '!',
  '!'
]*/



