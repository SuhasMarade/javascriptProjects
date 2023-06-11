window.onload = function(){
    let seconds = 00;
    let tens = 00;
    let mins = 00;
    let addMin = document.getElementById("mins");
    let addTens = document.getElementById("tens");
    let addSeconds = document.getElementById("secs");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");

    let interval;
    start.addEventListener("click", () =>{
        clearInterval(interval);
         interval = setInterval(startTimer,10);
    })
    stop.addEventListener("click", () =>{
        clearInterval(interval);
    })
    reset.addEventListener("click",() =>{
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        mins = "00"
        addTens.innerHTML = tens;
        addSeconds.innerHTML = seconds;
        addMin.innerHTML = mins;
    })

    function startTimer(){
        tens++;
        if(tens <= 9){
            addTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            addTens.innerHTML = tens;
        }
        if(tens > 99) {
            seconds++;
            addSeconds.innerHTML = "0" + seconds;
            tens = 0;
            addTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            addSeconds.innerHTML = seconds;
        }
        if(seconds > 59) {
            mins++;
            addMin.innerHTML = "0" + mins;
            seconds = 0;
            addSeconds.innerHTML = "0" + 0;
        }
        if(mins > 9){
            addMin.innerHTML = mins;
        }
    }
}