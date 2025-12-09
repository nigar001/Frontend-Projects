songs=[
   { 
    title:"Yung Kai- Blue", 
    src: "blue.mp3", 
    img: "blue.jpeg"
   },
   {
    title: "Golden Brown",
    src: "The Stranglers - Golden Brown.mp3",
    img: "golden-brown.jpeg"
   },
   {
    title: "Jalebi Baby",
    src: "jasonderulo.mp3",
    img: "download (6).jpeg"

   }
]
let currentsong=0;
let  audio=document.getElementById("audio");
let progress=document.getElementById("progress");
let musicinfo=document.getElementById("music-info");
let cover=document.getElementById("music-image");
let imgbutn=document.getElementById("playimg")
let volumesilder=document.getElementById("volume");

function loadSongs(index){
    audio.src=songs[index].src;
    musicinfo.textContent=songs[index].title;
    cover.src=songs[index].img;
}
loadSongs(currentsong)

function play(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
        imgbutn.src="pause.png";
    }
}
function previous(){
    currentsong=(currentsong+1)% songs.length;
    loadSongs(currentsong);
    audio.play();
}
function next(){
    currentsong=(currentsong-1+songs.length)%songs.length;
    loadSongs(currentsong);
    audio.play();
}
 audio.addEventListener("timeupdate",() =>{
    progress.value=(audio.currentTime/audio.duration)*100||0;
 })
 progress.addEventListener("input",()=>{
    audio.currentTime=(progress.value/100)*audio.duration;
 })

volumesilder.addEventListener("input",()=>{
    audio.volume=volumesilder.value;
})