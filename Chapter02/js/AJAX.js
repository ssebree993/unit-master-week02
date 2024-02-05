function jsAjax(){
    fetch('data/MegaCities.geojson')
        .then(callback) 
};

function callback(response){
    console.log(response)
}

window.onload = jsAjax();