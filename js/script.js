const ApiKey= "caf06e143a0f7d0f052c84045cfdee20";
const UrlApi="https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

 
    // on attend l'objet response renvoyé par la méthode fecth
    const response = await fetch( UrlApi + city + "&appid=" + ApiKey);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "none";
    // L'objet Response contient diverses méthodes permettant d'extraire les données de la réponse,
    // Ces méthodes renvoient également des promesses, car elles peuvent impliquer des opérations asynchrones, telles que le téléchargement et le traitement du corps de la réponse.
    var data = await response.json();
    console.log("succes");

    console.log(data);
   
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data.weather.main);

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "img/clouds.png";
    } else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "img/clear.png";
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "img/rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "img/mist.png";
    }


    document.querySelector(".weather").style.display = "block";
}
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
})

searchBtn.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        checkWeather(searchBox.value);
    }
})