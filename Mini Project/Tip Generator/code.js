//getting the access so that we can use them 
const billInput = document.getElementById('bill_amount');
const tipInput = document.getElementById('tip_amount');
const clickButton = document.getElementById('click');

//now writing the actual function 
function CalculateTip(){
    const bill = parseFloat(billInput.value);
    const tip = parseFloat(tipInput.value);
    if(isNaN(bill) || isNaN(tip)){
        alert("Bill amount or tip amount not mentioned.");
        return
    }
    else if(bill<=0 || tip<=0){
        alert("Please enter valid values.");
        return 
    }
    
    const val = bill * (tip/100);
    const total = val+bill;
    alert("The total bill with tip is "+total);
    return
}

//adding actionlistner so that after clicking on button it will call the function
clickButton.addEventListener('click' ,CalculateTip);
