function updateTime() {
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareTime = moment().tz("Africa/Harare");
    let harareDateElement = document.querySelector("#harare .date");
    let harareTimeElement = document.querySelector("#harare .time");

    harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTime = moment().tz("Europe/London");
    let londonDateElement = document.querySelector("#london .date");
    let londonTimeElement = document.querySelector("#london .time");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoTime = moment().tz("Asia/Tokyo");
    let tokyoDateElement = document.querySelector("#tokyo .date");
    let tokyoTimeElement = document.querySelector("#tokyo .time");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="">All Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
