var ageEl = document.getElementById("age")
var nameEl = document.getElementById("bday-name")

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
const name = GetURLParameter("name");
if(urlParams.has('name')){
    nameEl.textContent = nameEl;
}
nameEl.textContent = "Jim";
ageEl.textContent = 15;

