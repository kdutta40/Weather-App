const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="fc326e6abf707b3b9be73dbca6b4995c";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const image=document.querySelector(".pic");
async function weatherapp(city) {
    
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    searchBox.value="";
    if(response.status== 404)
    {    
        document.querySelector(".weather").style.display="none";
        document.querySelector(".details").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    else
    {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity h5").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind h5").innerHTML=data.wind.speed + "km/hr";
        if(data.weather[0].main=="Clear"){
            image.src="images/clear.png";
        }
        else if(data.weather[0].main=="Clouds"){
            image.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            image.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            image.src="images/mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            image.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            image.src="images/snow.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        document.querySelector(".details").style.display="flex";
        
        console.log(data);
    }
    
}
searchBtn.addEventListener("click",()=>{
    weatherapp(searchBox.value);
})


