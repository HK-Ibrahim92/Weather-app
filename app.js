
// var city=prompt("enter city")
var input = document.getElementById("search")
var info = document.getElementById("line1")
var info2 = document.getElementById("line2")
var info3 = document.getElementById("line3")
var info4 = document.getElementById("line4")
var info5=document.getElementById("line5")
var city = document.getElementById("city")
var center = document.getElementById("center")
var date = document.getElementById("date")

let weather;
function updatetime() {
  const currentDate = new Date();
  date.innerHTML = currentDate.toLocaleTimeString();

}

updatetime();
setInterval(updatetime, 1000);

async function nio(cityName) {
  fetch
    (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dc18faa214c79784c865b45687feb174&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      info.innerHTML = (data.main.temp + "℃")
      info5.innerHTML = ("Humidity :" + data.main.humidity + "%")
      info2.innerHTML = (data.weather[0].main)
      info3.innerHTML = ("Feel :" + data.main.feels_like + "℃")
      
      info4.innerHTML = ("Wind:" + data.wind.speed + "km/h")
      let upper = cityName.toUpperCase()
      city.innerHTML = (upper)
      weather = info2.innerHTML
      console.log(weather)
      console.log(data.main.temp + "℃")
      check();

    }
    )
    .catch(error => swal.fire({
      title: "Error!",
      text: "City not Found.",
      icon: "error",
      button: "OK",
    }))
}


window.onload = function () {
  nio("Karachi"); // Display default Karachi weather on page load
};

function handleSearch() {
  var userInput = input.value.trim();
  if (userInput) {
    nio(userInput);
    input.value = "";
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});

async function check() {
  try {
    // weather = await nio()
    if (!weather) {

    } else {
      if (weather === "Rain") {
        document.body.style.backgroundImage = "url('./image/rain.jpg')";
        console.log("It's raining!");

      } else if (weather === "Drizzle") {
        document.body.style.backgroundImage = "url('./image/drizzle.jpg')";
        // Set background for drizzle
      }
      else if (weather === "Thunderstorm") {
        document.body.style.backgroundImage = "url('./image/thunderstorm.jpg')";
        // Set background for thunderstorm
      }
      else if (weather === "Snow") {
        document.body.style.backgroundImage = "url('./image/snow.jpg')";
        // Set background for snow
      }
      else if (weather === "Clear") {
        document.body.style.backgroundImage = "url('./image/clearsky.jpg')";
        // Set background for clear weather
      }
      else if (weather === "Clouds") {
        document.body.style.backgroundImage = "url('./image/cloud.jpg')";
        // Set background for clouds
      }
      else if (weather === "Haze" || weather === "Mist" || weather === "Fog" || weather === "Smoke") {
        document.body.style.backgroundImage = "url('./image/smoke.jpg')";
        console.log("It's not raining.");

      } else {
        // Set default background for other cases
      }



    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}



