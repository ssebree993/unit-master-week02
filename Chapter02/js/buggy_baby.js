//initialize function called when the script loads
//should all functions be initialized here, or individually?
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}]


//create the table element
var table = document.createElement("table");

//create a header row
var headerRow = document.createElement("tr");

//add the "City" and "Population" columns to the header row
//? Why not add third column here?
headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")	

//add the row to the table
table.appendChild(headerRow);

// Add a third column to the header row called "City Size"
// ? Why is the column added here, other than to evaluate and add general size comment 

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
//Adjacent was misspelled  and at the end of the loop 
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML = '<td' + citySize + '</td>';
    	};
    })  // Extra closing );
};

//Not sure what this is doing... making a random color for the table?
function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		// Appeared to be syntax error, however
		// "rgb(" is in quotes, so it is a string
		// clever to add a random color to the table, then convert to string
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		}

		document.querySelector("table").color = color();
	
		console.log('Hey, you clicked me!');
	

	document.querySelector("table").addEventListener("click", clickme);
}	

//Added an event listener for the to the table needs to be outside 
//of everything at the end
document.addEventListener('DOMContentLoaded',initialize)

//Tested the code in the console, it is not drawing table. Inspector indicates 
//Uncaught SyntaxError: Unexpected token '}' in buggy_baby.js: 68