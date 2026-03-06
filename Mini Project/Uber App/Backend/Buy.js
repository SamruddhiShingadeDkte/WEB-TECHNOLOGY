const car = localStorage.getItem('SelectedCar')
const access = document.getElementById('pcar')
const cost = document.getElementById('cost')
const buy3 = document.getElementById('buy')

switch(car){
    case "buy1" : access.innerText = "Toyota"
                  cost.innerText = "3000000"
                  break;
    case "buy2" : access.innerText = "Honda"
                  cost.innerText = "1000000"
                  break;
    case "buy3" : access.innerText = "Audi"
                  cost.innerText = "5000000"
                  break;
    case "buy4" : access.innerText = "Jeep"
                  cost.innerText = "800000"
                  break;
    case "buy5" : access.innerText = "Ford"
                  cost.innerText = "600000"
                  break;
}

buy3.addEventListener('click',()=>{
    if(access.innerText !== "" && cost.innerText !== "" ){
        alert("Car booked successfully...:)")
    }
})