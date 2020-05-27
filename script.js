//constant
const testWrapper = document.querySelector(".test-wrapper"); //wrapper of type text
const testArea = document.querySelector("#test-area"); //type text
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset"); //start over
const theTimer = document.querySelector(".timer");
// const switchtext = document.getElementById("switch");//switch
const switchtext = document.querySelector("#switch");

//valuable
var clock, interval, initial, input, speed, run;
clock = [0, 0, 0, 0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function zero(number) {
  if (number < 10) {
    number = "0" + number;
  } else {
    //leave it blank
    console.log();
  }
  return number;
}

// Run a standard minute/second/hundredths timer:
function funtimer() {
  initial = zero(clock[0]) + ":" + zero(clock[1]) + ":" + zero(clock[2]); //set initial timer
  theTimer.innerHTML = initial;
  //reference 1: https://codepen.io/joshishere/pen/QxzLBe, line 26-28
  //computer timers, always give absolute value. 
  //if use Math.ceil() to computer timer, it will shows error
  clock[0] = Math.abs(Math.floor(clock[3] / 100 / 60)); //min
  clock[1] = Math.abs(Math.floor(clock[3] / 100 - clock[0] * 60)); //sec
  clock[2] = Math.abs(Math.floor(clock[3] - clock[1] * 100 - clock[0] * 100)); //hun
  clock[3]++; //counter
//reference 1 end
  
  //count down hundredsecond example
  //   var hours = Math.floor(secs / (60 * 60));

  //     var divisor_for_minutes = secs % (60 * 60);
  //     var minutes = Math.floor(divisor_for_minutes / 60);

  //     var divisor_for_seconds = divisor_for_minutes % 60;
  //     var seconds = Math.ceil(divisor_for_seconds);
  //var hundredths = Math.round((secs % 1) * 100);
  //hours no, minutes=timer[0],seconds=timer[1],hundredths=timer[2]
  // var divisor_for_minutes = timer[1] % (60 * 60);
  // timer[0] = Math.floor(divisor_for_minutes / 60);
  //   var divisor_for_seconds = divisor_for_minutes % 60;
  // timer[1] = Math.ceil(divisor_for_seconds);
  // timer[2] = Math.round((timer[1] % 1) * 100);
}

//switch test text
// function swtext(){
//   if (originText.value === "I am the king of the world!"){
//     originText.value = "switch";
//     switchtext = "I am the king of the world!";
//     console.log("hi");
//   }else{
//     originText.value = "I am the king of the world!";
//     switchtext.value = "switch";
//     console.log("click");
//   }
// }

// var a = "I am the king of the world!",
//   b = "switch!";
// var temp;
// [a, b] = [b, a];
// function swap() {
//   if (a && b) {
//     console.log(a);
//   }else{
//     console.log(b);
//   }
//   // console.log(a);
// }
// console.log(swap());
// let a = "I am the king of the world!";
// let b = "switch!";

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1



// Match the text entered with the provided text on the page:
function match() {
  input = testArea.value;
  if (input == originText) {
    // test typing speed
    speed = (input.length / (clock[1] + clock[2] / 100)) * 60;
    console.log("Your typing speed is " + speed + " length per minute");
    // console.log("time spend " + clock);
    //     window notification
    alert(
      "Your typing speed is " +
        speed +
        " length every minute! \nClick Start over button to restart the test!"
    );
    
    //reference 2: W3S: https://www.w3schools.com/jsref/met_win_setinterval.asp
    clearInterval(interval);
    //reference 2 end
    
    testWrapper.style.borderColor = "#429890"; //green when type correct
  } else {
    testWrapper.style.borderColor = "red"; //red when type wrong
    console.log("Test not finished!");
  }
  console.log("Typing: " + input);
}

// Start the timer:
function start() {
  if (testArea.value.length === 0) {
    
    //reference 3: W3S:display current time function, If the value is less than 10, the value 10 is used, https://www.w3schools.com/jsref/met_win_setinterval.asp
    interval = setInterval(funtimer, 10);
    //reference 3 end
    
  }
  console.log("Typing length: " + testArea.value.length);
}

// Reset everything: when click start over button
function reset() {
  testWrapper.style.borderColor = "grey"; //reset border to defalut grey
  testArea.value = ""; //blank type area
  theTimer.innerHTML = "00:00:00"; //reset clock to 0
  clock = [0, 0, 0, 0];
  
  //reference 4: W3S:stop the time,https://www.w3schools.com/jsref/met_win_clearinterval.asp
  clearInterval(interval); 
  //reference 4 end
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
resetButton.addEventListener("click", reset, false);
testArea.addEventListener(
  "keyup",
  function() {
    match(this);
  },
  false
);
resetButton.addEventListener(
  "click",
  function() {
    console.log("Reset button was clicked");
  },
  false
);
// switchtext.addEventListener("click",swtext,false);

//count down example, 10 mins
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds, dispms;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         dispms = parseInt((timer)%100,10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         dispms = dispms < 10 ? "0" + dispms : dispms;
//         display.textContent = minutes + ":" + seconds+":"+dispms;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var tenMinutes = 60 * 10,
//         display = document.querySelector('#clock');
//     startTimer(tenMinutes, display);
// };
