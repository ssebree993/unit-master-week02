// Add all scripts to the JS folder

// Replace getElementByID with querySelector()
// EG: Line 01 var myDiv =  document.querySelector("#mydiv");
// EG Line 02  myDiv.appendChild(table);

/* 
//first way to get main.js 
var myDiv = document.getElementById("mydiv");
myDiv.innerHTML = "Welcome to my web page getElementById method";
*/

//Second way to get main.js with the window.onload function
/*function myFunc(){
    var myDiv = document.getElementById("mydiv");
    myDiv.innerHTML = "Welcome to my web page with window.onload method";
};
window.onload = myFunc(); 
*/

//AJA request for data test

function jsAjax(){
    // Step 1: Define the data request
    var request = new Request('data/MegaCities.geojson');
};

window.onload = jsAjax();