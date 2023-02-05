var ageEl = document.getElementById("age")
var nameEl = document.getElementById("bday-name")

nameEl.textContent = "Jim";
ageEl.textContent = 15;

const urlParams = new URL(window.location.toLocaleString()).searchParams;
const name_param = urlParams.get("name"); //get name param
const age_param = urlParams.get("age"); //get age param
if(urlParams.has("name")) {
    nameEl.textContent = name_param;
} 
if(urlParams.has("age")) {
    nameEl.textContent = age_param;
} 

document.addEventListener("touchstart", function() { }, true);
