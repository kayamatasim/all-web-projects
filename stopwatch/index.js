let screen = document.querySelector('h1.screen');
let start = document.querySelector('button.start');
let stop = document.querySelector('button.stop');
let reset = document.querySelector('button.reset');
let millisecond = 00;
let second = 00;
let min = 00;

screen.innerText = `${min}:${second}:${millisecond}`;
let timer = false;
let stopwatch;
start.addEventListener('click', () => {
    // timer=true;
    // if(timer==true){
    //     startT()
    // }
    // else{
    //     stopT()
    // }
    startT()
    start.setAttribute('class','bg-info btn');
    start.disabled=true;
})

stop.addEventListener('click', () => {
    // timer=true;
    // if(timer==false){
    //     startT()
    // }
    // else{
    //     stopT()
    // }
    stopT()
})

reset.addEventListener('click', () => {
    millisecond = 0;
    second = 0;
    min = 0;
    stopT()
    start.disabled=false;
    start.setAttribute('class','btn btn-danger')
    screen.innerText = `${min} : ${second} : ${millisecond}`;
})

function startT() {
    stopwatch = setInterval(() => {
        millisecond += 1;
        if (millisecond > 100) {
            millisecond = 0;
            second += 1
        }
        if (second > 59) {
            second = 0;
            millisecond = 0;
            min += 1
            
        }
        screen.innerText = `${min}:${second}:${millisecond}`;
    },10)
}

function stopT() {
    clearInterval(stopwatch)
}

if(millisecond<10){
    millisecond="0"+millisecond;
}
if(second<10){
    second="0"+second;
}
if(min<10){
    min='0'+min;
}