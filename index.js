//baseurl
//http://api.weatherapi.com/v1
//search
//http://api.weatherapi.com/v1/search.json?key=e72aa67d28be4e3ba37113917242006&q=lond
//api key
//e72aa67d28be4e3ba37113917242006
//https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3
//https://api.weatherapi.com/v1/forecast.json?key=e72aa67d28be4e3ba37113917242006&q=${city}&days=3&hour=${gethours}
var input1 = document.querySelector(".input1");
var forecast = document.querySelector("#forecast");
// var current = document.querySelector("#current");
var btn = document.querySelector("#basic-addon2");
var weather = {};

async function getweather(city) {
  var url = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e72aa67d28be4e3ba37113917242006&q=${city}&days=3`
  );
  console.log(url);
  var data = await url.json();
  weather = data;
  console.log(weather);
}

async function callfun(value) {
  await getweather(value);

  display();
}

input1.addEventListener("keyup", function (e) {
  e.preventDefault();
  var x = e.target.value;
  callfun(x);
});
btn.addEventListener("click", function () {
  callfun(input1.value);
});
function display() {
  var box = "";
  box = `  
   <div class="today forecast col-md-4 bg-dark">
            <div
              class="forecast-header bg-black d-flex justify-content-between w-auto py-1"
              id="today"
            >
              <div class="day text-white-50">${day1()}</div>
              <div class="date text-white-50"></div>
            </div>
            <!-- .forecast-header -->
            <div class="forecast-content py-5" id="current">
              <div class="location text-white-50 fs-3">${
                weather.location.name
              }</div>
              <div class="degree">
                <div class="num text-white fs-1">${
                  weather.current.temp_c
                }<sup>o</sup>C</div>

                <div class="forecast-icon">
                  <img
                    src=${weather.forecast.forecastday[0].day.condition.icon}
                    alt=""
                    width="90"
                  />
                </div>
              </div>
              <div class="custom">${weather.current.condition.text}</div>
              <span
                ><img src="images/icon-umberella.png" alt="" class="" />
                <span class="text-white-50">20%</span></span
              >
              <span
                ><img src="images/icon-wind.png" alt="" class="" />
                <span class="text-white-50">18km/h</span>
              </span>

              <span
                ><img src="images/icon-compass.png" alt="" class="" />
                <span class="text-white-50">East</span>
              </span>
            </div>
          </div>
  
          <div class="forecast col-md-4 bg-black text-center">
            <div class="forecast-header bg-dark py-1">
              <div class="day text-white-50 text-center">
              ${day2()}
              </div>
            </div>
            <!-- .forecast-header -->
            <div class="forecast-content py-5">
              <div class="forecast-icon">
                <img
                  src=${weather.forecast.forecastday[1].day.condition.icon}
                  alt=""
                  width="48"
                />
              </div>
              <div class="py-3">
                <div class="degree text-white">${
                  weather.forecast.forecastday[1].day.maxtemp_c
                }<sup>o</sup>C</div>
                <small class="text-white-50">${
                  weather.forecast.forecastday[1].day.mintemp_c
                }<sup>o</sup></small>
              </div>
              <div class="custom">${
                weather.forecast.forecastday[1].day.condition.text
              }</div>
            </div>
          </div>
          <div class="forecast col-md-4 bg-dark text-center">
            <div class="forecast-header bg-black py-1">
              <div class="day text-white-50 text-center">${day3()}</div>
            </div>
            <!-- .forecast-header -->
            <div class="forecast-content py-5">
              <div class="forecast-icon">
                <img
                  src=${weather.forecast.forecastday[2].day.condition.icon}
                  alt=""
                  width="48"
                />
              </div>
              <div class="py-3">
                <div class="degree text-white">${
                  weather.forecast.forecastday[2].day.maxtemp_c
                }<sup>o</sup>C</div>
                <small class="text-white-50">${
                  weather.forecast.forecastday[2].day.mintemp_c
                }<sup>o</sup></small>
              </div>
              <div class="custom">${
                weather.forecast.forecastday[2].day.condition.text
              }</div>
            </div>
          </div>`;
  forecast.innerHTML = box;
}
// function gethours() {
//   var d = new Date(weather.location.localtime);
//   var hourr = d.getHours();
//   return weather.forecast.forecastday[0].hour[hourr].time;
// }

function day1() {
  var day = `${weather.forecast.forecastday[0].date}`;
  var d = new Date(day);
  var dayy = d.toDateString();

  return dayy;
}

function day2() {
  var day = `${weather.forecast.forecastday[1].date}`;
  var d = new Date(day);
  var dayy = d.toDateString();

  return dayy;
}
function day3() {
  var day = `${weather.forecast.forecastday[2].date}`;
  var d = new Date(day);

  var dayy = d.toDateString();

  return dayy;
}
