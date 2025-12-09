const Api_key="1135842c1c538b08e233bbbbbcf5a7fd";
const Url="https://api.openweathermap.org/data/2.5/" ;

const searchBox=document.getElementById("box");
const searchBtn=document.getElementById("btn");
async function CheckWeather(city) {
    const response=await fetch(`${Url}weather?q=${city}&units=metric&appid=${Api_key}`);
    var data=await response.json();
    console.log(data);
    if (data.cod==="404"|| data.cod===404){
        document.getElementById("weather").style.display="none";
        document.getElementById("error_screen").style.display="block";
        return;
    }
    else{
        document.getElementById("weather").style.display="block";
        document.getElementById("error_screen").style.display="none";

    } 
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("Temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("Humidity").innerHTML=data.main.humidity+"%";
    document.getElementById("Wind").innerHTML=data.wind.speed+"km/h";
    

    // Get weather condition (Clear, Clouds, Rain, Snow, etc.)
    const iconDiv = document.getElementById("icon");
    const main=document.querySelector(".main");
    iconDiv.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // Change background and icon depending on weather
     

    


    const forecast=await fetch(`${Url}forecast?q=${city}&appid=${Api_key}&units=metric`);
    const forecastdata=await forecast.json();
    showforecast(forecastdata.list);
}

function showforecast(list){
    const container=document.getElementById("forecast_container");
    container.innerHTML="";

    const daily=list.filter(item=>item.dt_txt.includes("12:00:00"));
    let labels=[];
    let temps=[];

    daily.forEach(day => {
        let date=new Date(day.dt*1000);
        let options={weekday:"short"};
        let weekday=date.toLocaleDateString("en-US",options);
        labels.push(weekday);
        temps.push(day.main.temp);

        container.innerHTML+=`
        <div class="day">
            <p>${weekday}</p>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png">
            <p>${Math.round(day.main.temp)}°C</p>
        </div>
        `;
    });
    drawChart(labels,temps);
}


function drawChart(labels,temps){
    const ctx=document.getElementById("forecastchart").getContext("2d");
    new Chart(ctx,{
        type: "line",
        data:{
            labels:labels,
            datasets:[{
                label: "Temperature (C)",
                data:temps,
                borderColor: "blue",
                fill: false,
                tension: 0.3
            }]
        },
            options:{
                responsive:true,
                scales: {
                    y:{
                        beginAtZero: false
                    }
                }
            }
    });
}
searchBtn.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
})

function go_Back(){
     document.getElementById("weather").style.display="block";
    document.getElementById("error_screen").style.display="none";

}


