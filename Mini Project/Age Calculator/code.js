//accessing the data
const birthdateInput = document.getElementById('birth_date');
const button = document.getElementById('click');

//function
function CalculateAge(){
    const birthdateStr = birthdateInput.value;
            if (birthdateStr === "") {
                alert("Please enter your birthdate!");
                return;
            }

            const birthDate = new Date(birthdateStr);
            const today = new Date();

            if(birthDate > today){
                alert("Birthdate cannot be in the future!");
                return;
            }

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (days < 0) {
                months -= 1;
                const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += prevMonth.getDate();
            }

            if (months < 0) {
                years -= 1;
                months += 12;
            }

        alert(`You are ${years} years, ${months} months, and ${days} days old.`);
}

//listener
button.addEventListener('click',CalculateAge);