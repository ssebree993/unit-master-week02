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


function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('http://127.0.0.1:5500/data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(conversion) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response) //print data to the console - don't see it in the browser
    //http://127.0.0.1:5500/index.html is "Live Server" in VS Code.???????
}

window.onload = jsAjax();