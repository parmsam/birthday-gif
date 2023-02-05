var ageEl = document.getElementById("age")
var nameEl = document.getElementById("bday-name")

nameEl.textContent = "Jim";
ageEl.textContent = 15;

const params = new URLSearchParams(window.location.q); //parse params
const name_param = params.get("name"); //get q param
const age_param = params.get("age"); //get q param
if ( isEmpty(name_param) ) {
    nameEl.textContent = name_param; //assign q value to input when loading
    ageEl.textContent = age_param;
} 


