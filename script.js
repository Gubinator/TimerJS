let hoursInput = document.getElementById("hour-input");
let minutesInput =document.getElementById("minute-input");
let secondsInput =document.getElementById("second-input");
var timer = document.getElementById("clock-segment");
var time = ((hoursInput.value*60*60/10)+(minutesInput.value*60/10)+secondsInput.value);
const audio = new Audio();
audio.src="./sound.mp3"
var count=0, pauseCounter = false;


function updateCountdown(){
    var hours = Math.floor(time/3600);
    var minutes = Math.floor(time % 3600 / 60);
    var seconds = time % 3600 % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    timer.innerHTML=`${hours}:${minutes}:${seconds}`;
    if(time!=0){time--;}
    else{
        count++;
        audio.play();
        if(count==2){
            alert("Inserted time has passed.")
            window.location.reload();
        }
    }
    console.log(time)
}

function startCountdown(){

    setInterval(updateCountdown, 1000);
}

var startButton = document.querySelector(".start-button");
var pauseButton = document.querySelector(".pause-button");
var stopButton = document.querySelector(".stop-button");
startButton.addEventListener('click', () =>{
    if(hoursInput.value > 60 || hoursInput.value < 0){alert("Please insert number for hours in interval from 0 to 60.")}
    if(minutesInput.value > 60 || minutesInput.value < 0){alert("Please insert number for minutes in interval from 0 to 60.")}
    if(secondsInput.value > 60 || secondsInput.value < 0){alert("Please insert number for seconds in interval from 0 to 60.")}
    if(secondsInput.value == 0 && minutesInput.value== 0 && hoursInput.value== 0){alert("Please insert timer values before clicking START.")}
    else{
        time = ((hoursInput.value*60*60/10)+(minutesInput.value*60/10)+secondsInput.value);
        startButton.setAttribute("disabled", "disabled");
        var interval = setInterval(updateCountdown, 1000);
        pauseButton.addEventListener("click", () =>{
            if(!pauseCounter){
                clearInterval(interval);
                pauseCounter=true;
            }
            else {
                interval = setInterval(updateCountdown, 1000);
                pauseCounter=false;
            }
        })
    }
})

stopButton.addEventListener("click", () => {
    location.reload();
})