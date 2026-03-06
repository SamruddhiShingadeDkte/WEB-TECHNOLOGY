const email = document.getElementById('email_val')
const pass = document.getElementById('pass_val')
const submit = document.getElementById('submit')

submit.addEventListener('click',()=>{
    if( email.value == "" || pass.value =="" ){
        alert("Enter all info first");
    }
    else{
        alert("login successful...:)")
        window.location.href = "../Frontend/Home.html" ;
    }
})

