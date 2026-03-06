const car2 = localStorage.getItem('RentedCar')
const access2 = document.getElementById('pcar2')
const cost2 = document.getElementById('cost2')
const days2 = document.getElementById('days')
const rent3 = document.getElementById('rent')

switch(car2){
    case "rent1" : access2.innerText = "Toyota"
                  cost2.innerText = 10000;
                  break;
    case "rent2" : access2.innerText = "Honda"
                  cost2.innerText = 5000;
                  break;
    case "rent3" : access2.innerText = "Audi"
                  cost2.innerText = 20000;
                  break;
    case "rent4" : access2.innerText = "Jeep"
                  cost2.innerText = 2000;
                  break;
    case "rent5" : access2.innerText = "Ford"
                  cost2.innerText = 3000;
                  break;
}

rent3.addEventListener('click',()=>{
    if(access2.innerText !== "" && cost2.innerText !== "" ){
        alert(`car rented for ${days2.value} days so the total value is ${cost2.innerText *days2.value} }`)
    }
})