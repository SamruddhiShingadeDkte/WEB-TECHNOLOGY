let name= document.getElementById("name1")
let loc = document.getElementById("area1")
let age = document.getElementById("age1")

let submit = document.getElementById("save")

submit.addEventListener('click',()=>{
    let name_val = name.value
    let loc_val = loc.value
    let age_val = age.value
    
    if(name_val == "" || loc_val == "" || age_val == ""){
        alert("Enter all the data first")
        console.log(name_val,loc_val,age_val)
    }
    
    if(age_val!=""){
        if(age_val<=18){
        alert("you are not eligible for the voting..:(")
    }
    else{
        alert(`${name_val} form submitted successfully..:)`)
    }
    }
})