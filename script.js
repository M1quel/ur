let regex = /\d+/g;
var today = new Date();
var secondMoveAmmount = 360/60;
var hourMoveValue = 360/12;
var UTCHour;
var manualOffset = false;
var offset = 0;
var actualHour;
var actualMinute;
var actualSecond;
var TimezoneOffset = String(new Date().getTimezoneOffset());
var timezone = TimezoneOffset.match(regex)[0];

var hourCounter = document.querySelector(".hourCounterWrapper")
var minuteCounter = document.querySelector(".minuteCounterWrapper")
var secondCounter = document.querySelector(".secondCounterWrapper")
var digitalTime = document.querySelector(".digitalTimeTag");
console.log(new Date().getTimezoneOffset())
setTimeout(() =>{
    setInterval(() => {
        UTCHour = new Date().getUTCHours();
        actualHour = parseInt(new Date().getHours()) + offset;
        actualMinute = new Date().getMinutes();
        actualSecond = new Date().getSeconds();

        
        

        var digitalHour = actualHour;
        var digitalMinute = actualMinute;
        var digitalSecond = actualSecond;

        if(digitalHour < 10){
            digitalHour = `0${digitalHour}`
        }
        if(digitalMinute < 10){
            digitalMinute = `0${digitalMinute}`
        }
        if (digitalSecond < 10) {
            digitalSecond = `0${digitalSecond}`
        }
        digitalTime.innerText = `${digitalHour} : ${digitalMinute} : ${digitalSecond}`
        let hourMoveAmmount = hourMoveValue * actualHour + "deg";
        hourCounter.style.transform = `rotate(${hourMoveAmmount})`
        
        let minuteMoveAmmount = secondMoveAmmount * new Date().getMinutes() + "deg";
        minuteCounter.style.transform = `rotate(${minuteMoveAmmount})`
        
        let MoveAmmount = secondMoveAmmount * new Date().getSeconds() + "deg";
        secondCounter.style.transform = `rotate(${MoveAmmount})`
        if (new Date().getSeconds() == 59) {
            if (new Date().getMinutes() == 59) {
                if(new Date().getHours() == 11){
                    setTimeout(()=> {
                        hourCounter.style.transform = `rotate(${hourMoveValue * (new Date().getMinutes() + 1) + "deg"})`
                        setTimeout(() => {
                            hourCounter.style.transition = "0s";
                        }, 180);
                    }, 819)
                }
                setTimeout(()=> {
                    minuteCounter.style.transform = `rotate(${secondMoveAmmount * (new Date().getMinutes() + 1) + "deg"})`
                    setTimeout(() => {
                        minuteCounter.style.transition = "0s";
                    }, 180);
                }, 819)
            }
            setTimeout(()=> {
                secondCounter.style.transform = `rotate(${secondMoveAmmount * (new Date().getSeconds() + 1) + "deg"})`
                setTimeout(() => {
                    secondCounter.style.transition = "0s";
                }, 180);
            }, 819)
        }
        secondCounter.style.transition = ".2s"
        minuteCounter.style.transition = ".2s"
        hourCounter.style.transition = ".2s";

    }, 1000);
}, 1000 - new Date().getMilliseconds())



let timezoneSelector = document.querySelector(".timezoneSelect");

timezoneSelector.addEventListener("change", function(){
    manualOffset = true;
    console.log(timezoneSelector.value);
    if (parseInt(timezoneSelector.value) < 0) {
        offset = timezoneSelector.value/60;
    }
    else if (parseInt(timezoneSelector.value) == 0){
        actualHour = UTCHour;
    }
    else{
        console.log(UTCHour);
        actualHour = parseInt(UTCHour) + parseInt((timezoneSelector.value/60));
        console.log(actualHour);
    }
})