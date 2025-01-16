function updateTime() {
   
let harareTime = moment().tz("Africa/Harare");
let harareElement = document.querySelector("#harare");
let harareDateElement = document.querySelector("#harare .date");
let harareTimeElement = document.querySelector("#harare .time");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");

let londonTime = moment().tz("Europe/London");
let londonElement = document.querySelector("#london");
let londonDateElement = document.querySelector("#london .date");
let londonTimeElement = document.querySelector("#london .time");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoTime = moment().tz("Asia/Tokyo");
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = document.querySelector("#tokyo .date");
let tokyoTimeElement = document.querySelector("#tokyo .time");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

}
 
updateTime();
setInterval(updateTime, 1000);