//display student info
//odd or even
//display numbers
//student pass and fail

//1.Dsiplay student info 
let student_name = "Samruddhi Shingade";
let student_age = 20;
let student_email = "samruddhi@gmail.com";

document.writeln("student name : "+student_name+"student age : "+student_age+"student email : "+student_email);

//2.odd or even number 
let num = 101;
if(num%2 == 0){
    document.writeln("Even number");
}
else{
    document.write("Odd number");
}

//display 1 to 10 numbers 
let i ;

//for loop
for(i=1;i<=10;i++){
    document.write(i);
}
//while loop
i=1;
while(i<=10){
    document.write(i);
    i++;
}

//do while loop
i=1;
do{
    document.write(i);
       i++;
}while(i<=10);

 //student pass and fail 
let marks = 35;
if(marks>=75){
    document.write("Student pass");
}
else{
    document.write("Student fail");
}