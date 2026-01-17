//comparison operations as :- >,>=,<,<=,==,===,!=
console.log(2>2) //false
console.log(2>=2) //true
console.log(2<2) //false
console.log(2<=2) //true
console.log(2==2) //true
console.log(2===2) //true
console.log(2!=2) //false

//performing oeration with string and number
console.log("2">2) //false
console.log("1"<2) //true
console.log(null == 0) //false
console.log(null>0) ////false
console.log(null<0) //false
console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0)  //false

//diff in "==" and "==="
let str = "2";
let number = 2;
console.log(str == number) //true beacause in "==" only value is checked
console.log(str === number) //false because in "===" value as well as datatype is also checked 