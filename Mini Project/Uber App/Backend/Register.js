const name = document.getElementById('name_val')
const mob = document.getElementById('MOB_val')
const email2 = document.getElementById('email2_val')
const pass2 = document.getElementById('pass2_val')
const register = document.getElementById('register')

register.addEventListener('click',()=>{
    const mob_val = mob.value;
    if(name.value == "" || mob.value == "" || email2.value == "" || pass2.value == ""){
        alert("Enter all info first")
    }
    else if(mob_val.length!==10){
        alert("Mobile number is invald")
    }
    else{
        alert("Registartion successfull...:)")
    }
    
})
