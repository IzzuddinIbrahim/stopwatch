const timeDisplay = document.querySelector("#time-display");    //find time display
const startButton = document.querySelector("#start-btn");       //find start button
const stopButton = document.querySelector("#stop-btn");         //find stop button
const resetButton = document.querySelector("#reset-btn");       //find reset button

let seconds = 0;            //stores how many second have passed
let stopwatch;              //stores the running interval
let isRunning = false;      //checks whether stopwatch is already running

//function formatTime()
function formatTime(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);          //---|
  let minutes = Math.floor((totalSeconds % 3600) / 60); //-----convert total seconds into hours, minutes, and seconds
  let secs = totalSeconds % 60;                         //---|

  hours = String(hours).padStart(2, "0");               //----|
  minutes = String(minutes).padStart(2, "0");           //----|---add leading zeroes
  secs = String(secs).padStart(2, "0");                 //----|

  return `${hours}:${minutes}:${secs}`;                 //return formatted time
}

//function updateDisplay()
function updateDisplay() {
  timeDisplay.textContent = formatTime(seconds);        //take the current seconds value
}                                                       //convert it into 00:00:00 format
                                                        //show it on the page

//connect the start button
startButton.addEventListener("click", function () {     //when start button is click
  if (isRunning === true) {                             //if stopwatch is already running
    return;                                             //stop
  }

  isRunning = true;                                     //set isRunning to true

  stopwatch = setInterval(function () {                 //every 1 second:
    seconds++;                                          //increase seconds by 1
    updateDisplay();                                    //update the display
  }, 1000);
});

//connect the stop button
stopButton.addEventListener("click", function () {
    clearInterval(stopwatch);                       //clearInterval(stopwatch) stop the runnung timer

    isRunning = false;                              //isRunning=false allows Start to work again later
});

//connect the reset button
resetButton.addEventListener("click", function() {
    clearInterval(stopwatch);

    seconds = 0;
    isRunning = false;

    updateDisplay();
});