//write a object to store the profile info and then display it and its type also
const profile ={
    fullName : "Samruddhi shingade",
    isFollow : true,
    followers : 160,
    following : 190
}
console.log(profile)//all o/p
console.log(typeof(profile))//object

//Activity-2:Write code in which enter number and check that number is multiple of 5 or not
let Number = prompt("Enter number ")
if(Number%5 == 0){
    console.log("number is multiple of 5")
}
else{
    console.log("number is not multiple of 5")
}

//Activity-3:Write a code which gives grades to student according to their scores
let marks = prompt("Enter marks : ")
let grade;
if(marks>=85 && marks<=100){
    grade = 'A'
    console.log(`Your grade is : ${grade}`)
}
else if(marks<=85 && marks>=70){
    grade = 'B'
    console.log(`Your grade is : ${grade}`)
}
else if(marks<=60 && marks>=40){
    grade = 'C'
    console.log(`Your grade is : ${grade}`)
}
else{
    grade = "F"
    console.log(`Your grade is : ${grade}`)
}