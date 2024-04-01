const ApiKey= "caf06e143a0f7d0f052c84045cfdee20";
const UrlApi="https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");

async function checkWeather(city){

    // on attend l'objet response renvoyé par la méthode fecth
    const response = await fetch( UrlApi + city + "&appid=" + ApiKey);
    alert(response);
    // L'objet Response contient diverses méthodes permettant d'extraire les données de la réponse,
    // Ces méthodes renvoient également des promesses, car elles peuvent impliquer des opérations asynchrones, telles que le téléchargement et le traitement du corps de la réponse.
    var data = await response.json();

    console.log(data);
   
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
    
})

searchBtn.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        checkWeather(searchBox.value);
    }
})