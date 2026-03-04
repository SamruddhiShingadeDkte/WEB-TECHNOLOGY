//display student info
//odd or even
//display numbers
//student pass and fail

//1.Dsiplay student info 
let student_name = "Samruddhi Shingade";
let student_age = 20;
let student_email = "samruddhi@gmail.com";

document.write("student name : "+student_name+"/<br>student age : "+student_age+"<br>student email : "+student_email);
document.write("<br>")
document.write("<br>")
//2.odd or even number 
let num = 101;
if(num%2 == 0){
    document.write("Even number");
}
else{
    document.write("Odd number");
}
document.write("<br>")
document.write("<br>")

//display 1 to 10 numbers 
let i ;

//for loop
for(i=1;i<=10;i++){
    document.write(i);
}
document.write("<br>")
//while loop
i=1;
while(i<=10){
    document.write("<br>",i);
    i++;
}
document.write("<br>")
//do while loop
i=1;
do{
    document.write(i);
       i++;
}while(i<=10);
document.write("<br>")
 //student pass and fail 
let marks = 35;
if(marks>=75){
    document.write("Student pass");
}
else{
    document.write("Student fail");
}