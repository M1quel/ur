var today = new Date();
var secondMoveAmmount = 360/60;
var hourMoveValue = 360/12;

var hourCounter = document.querySelector(".hourCounterWrapper")
var minuteCounter = document.querySelector(".minuteCounterWrapper")
var secondCounter = document.querySelector(".secondCounterWrapper")

setTimeout(() =>{
    setInterval(() => {
        let hourMoveAmmount = hourMoveValue * new Date().getHours() + "deg";
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