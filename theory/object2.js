//object singleton
const user = new Object(); //singleton object

console.log(user) //{}

const user2 = {}; //non singleton object
user2.id = 123;
user2.name = "samruddhi"
user2.city = "kolhapur"
user.age = 20
user2.isLogin = true
console.log(user2)//{ id: 123, name: 'samruddhi', city: 'kolhapur', isLogin: true }

//nested object 
const regularUser = {
    email: "abc@gmail.com",
    user3:{
        full_name :{
            first_name :"abc",
            last_name :"xyz"
        }
    }
}

console.log(regularUser) //gives object regularUser

console.log(regularUser.user3.full_name.first_name) //abc