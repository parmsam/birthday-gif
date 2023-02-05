var ageEl = document.getElementById("age")
var nameEl = document.getElementById("bday-name")

nameEl.textContent = "Jim";
ageEl.textContent = 15;

const urlParams = new URL(window.location.toLocaleString());
const name_param = urlParams.get("name"); //get q param
const age_param = urlParams.get("age"); //get q param
if ( name_param != '' ) {
    nameEl.textContent = name_param; //assign q value to input when loading
    ageEl.textContent = age_param;
} 


