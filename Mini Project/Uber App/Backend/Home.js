const buy =[ document.getElementById("buy1"), document.getElementById("buy2"),document.getElementById("buy3"),document.getElementById("buy4"),document.getElementById("buy5")]
const rent =[document.getElementById("rent1"), document.getElementById("rent2"),document.getElementById("rent3"),document.getElementById("rent4"),document.getElementById("rent5")]
for(let i=0;i<buy.length;i++){
    buy[i].addEventListener('click',()=>{
        localStorage.setItem('SelectedCar',buy[i].id);
        window.location.href = "../Frontend/Buy.html";
    })
}

for(let j=0;j<rent.length;j++){
    rent[j].addEventListener('click',()=>{
        localStorage.setItem('RentedCar',rent[j].id);
        window.location.href = "../Frontend/Rent.html";
    })
}
