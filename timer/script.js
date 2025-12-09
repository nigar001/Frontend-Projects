const Start=document.getElementById("Start");
const reset=document.getElementById("Reset");
const Stop=document.getElementById("Stop");
const timer=document.getElementById("showtime");
let timeleft=1500; 
let interval=null;
const updateTimer=()=>{
    const minutes=Math.floor(timeleft/60);
    const seconds=timeleft%60;
    timer.innerHTML=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
};
const startTimer=()=>{
    interval=setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft===0){
            clearInterval(interval);
            alert("Time is up");
            timeleft=1500;
            updateTimer();
        }
    },1000)
}
const stopTimer= () =>{clearInterval(interval)
    interval=null;
};
const resetTimer=()=> {
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
}
Start.addEventListener("click",startTimer);
reset.addEventListener("click",resetTimer);
Stop.addEventListener("click",stopTimer);
updateTimer();