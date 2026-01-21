const balance = new Number(1234567828190283766628)
console.log(balance)

//consverts number into string 
console.log(balance.toString())

//adds the n no of 0 after point.therefore when you build e-commerce website and precisions value is so long then we use toFixed(n)
console.log(balance.toFixed(2))

//first converts into string then gives the length of that string
console.log(balance.toString().length)

//it will adds commas in the value if the number is big. it is US standard 
console.log(balance.toLocaleString())

//if we want indian value then we use this. that is it directly converts into indian value from US value 
console.log(balance.toLocaleString('en-IN'))

//MATH OPERATIONS :-

//datatype of Math is object 
console.log(Math) 

//it will converts negative to positive and positive values will be positive 
console.log(Math.abs(-432.22))

//choose lowest value 
console.log(Math.floor(4.2))

//choose top value 
console.log(Math.ceil(4.5))

//gives round value 
console.log(Math.round(4.6))

//gives min value 
console.log(Math.min(1,2,3,4))

//gives max value
console.log(Math.max(1,2,3,4))

//Activity : - math.random 