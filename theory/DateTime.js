let myDate = new Date()

//gives day date and time 
console.log(myDate.toString())

//gives as 2026-01-21
console.log(myDate.toISOString())

//o/p:- Wed Jan 21 2026
console.log(myDate.toDateString())

//o/p:-21/1/2026
console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(26,1,21)
console.log(myCreatedDate.toString())

let myCreatedDate2 = new Date("01-21-2026")
console.log(myCreatedDate2.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

//converting time to seconds 
console.log(Date.now()/1000)
console.log(myCreatedDate2.getTime())

//NAN
console.log(Math.floor(Date.now)/1000)

let NewDate = new Date()
console.log(NewDate.getDate())//gives date
console.log(NewDate.getDay())//i.e id monday then in a week 
console.log(NewDate.getFullYear())//gives year 
console.log(NewDate.getMonth()+1)//gives month 
console.log(NewDate.getUTCDate())//gives date 

console.log(NewDate.toLocaleString('default',{weekday : "long"}));//gives actual day 