function Timef(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let day=now.getDate();
    let months=now.getMonth()+1;
    let year=now.getFullYear();

    const weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let weekday=weekdays[now.getDay()];

    hours= hours<10 ? "0"+hours: hours;
    minutes=minutes<10 ? "0"+minutes: minutes;
    seconds=seconds<10 ? "0"+seconds: seconds;

    const clock=`${hours}:${minutes}:${seconds}`;
    const dates=`${day}.${months}.${year}`;
    document.getElementById("clock").textContent=clock;
    document.getElementById("date").textContent=dates;
    document.getElementById("weekday").textContent=weekday;
}

setInterval(Timef,1000)

Timef()
 