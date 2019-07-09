console.log("Connected");


//Target an element on HTML
var myVar = setInterval(clockTicker, 1000);
function clockTicker(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var amPm = "AM";
  if (hours > 13){
    amPm = "PM";
    hours -= 12;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  var currentTime = hours + ":" + minutes + ":" + seconds + " " + amPm;
  document.getElementById("box").innerHTML = currentTime;
  document.getElementById("box").classList.add("clockStyle");
}
