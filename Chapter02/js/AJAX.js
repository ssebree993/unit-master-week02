function jsAjax(){
    fetch('http://127.0.0.1:5500/data/MegaCities.geojson')
        .then(callback) 
};

function callback(response){
    console.log(response)
}

window.onload = jsAjax();