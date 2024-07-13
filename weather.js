const apikey= "c1f8dc36c90fe447de5bc6d00e702d7f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weathericon = document.querySelector(".weather-icon");

console.log(searchBox.value);
async function checkWeather(city){

    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{

    var data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "./images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "./images/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "./images/Mist.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";

    
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

