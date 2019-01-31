var icon = "http://openweathermap.org/img/w/";

document.addEventListener("DOMContentLoaded", function() {
  //sida laddats klart
  onStartUp();
});

function onStartUp() {
  getWeatherFromApi();
  getWeatherFromApi2();
}
function getWeatherFromApi() {
  let weatherTest = fetchData(
    "http://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&APPID=a1cf0bd23139df47f18b82c67aebd321"
  );
}
function getWeatherFromApi2() {
  let weatherTest2 = fetchData2(
    "http://api.openweathermap.org/data/2.5/forecast?q=stockholm&units=metric&APPID=a1cf0bd23139df47f18b82c67aebd321"
  );
}

function fetchData(url) {
  fetch(url)
    .then(res => res.json())
    .then(out => {
      //aktuellt väder
      var wIconToday = out.weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";

      var header = document.getElementById("name");
      header.innerHTML = out.name;
      var header = document.getElementById("temperatur");
      header.innerHTML = out.main.temp;
      var header = document.getElementById("iconContainer");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";

      /*
 


    
    */
    })
    .catch(err => {
      throw err;
    });
}
function fetchData2(url) {
  fetch(url)
    .then(res => res.json())
    .then(out => {

      console.log(out)

      var header = document.getElementById("mintemp");
      header.innerHTML = out.list[1].main.temp_min;
      var header = document.getElementById("maxtemp");
      header.innerHTML = out.list[1].main.temp_max;
      var header = document.getElementById("datum1");
      header.innerHTML = out.list[5].dt_txt;
      var wIconToday = out.list[1].weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";
      var header = document.getElementById("iconContainer1");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";

      var header = document.getElementById("mintemp2");
      header.innerHTML = out.list[2].main.temp_min;
      var header = document.getElementById("maxtemp2");
      header.innerHTML = out.list[2].main.temp_max;
      var header = document.getElementById("datum2");
      header.innerHTML = out.list[13].dt_txt;
      var wIconToday = out.list[2].weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";
      var header = document.getElementById("iconContainer2");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";
      

      var header = document.getElementById("mintemp3");
      header.innerHTML = out.list[3].main.temp_min;
      var header = document.getElementById("maxtemp3");
      header.innerHTML = out.list[3].main.temp_max;
      var header = document.getElementById("datum3");
      header.innerHTML = out.list[21].dt_txt;
      var wIconToday = out.list[3].weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";
      var header = document.getElementById("iconContainer3");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";

      var header = document.getElementById("mintemp4");
      header.innerHTML = out.list[4].main.temp_min;
      var header = document.getElementById("maxtemp4");
      header.innerHTML = out.list[4].main.temp_max;
      var header = document.getElementById("datum4");
      header.innerHTML = out.list[29].dt_txt;
      var wIconToday = out.list[4].weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";
      var header = document.getElementById("iconContainer4");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";

      var header = document.getElementById("mintemp5");
      header.innerHTML = out.list[5].main.temp_min;
      var header = document.getElementById("maxtemp5");
      header.innerHTML = out.list[5].main.temp_max;
      var header = document.getElementById("datum5");
      header.innerHTML = out.list[37].dt_txt;
      var wIconToday = out.list[5].weather[0].icon;
      var wIconShow = "http://openweathermap.org/img/w/" + wIconToday + ".png";
      var header = document.getElementById("iconContainer5");
      header.innerHTML = "<img src='" + wIconShow + "' width='50'>";
      /*

    let icon = document.createElement("img");
      icon.setAttribute("src",icon + weathertest2.list[i].weather[0].icon + ".png");
      femDarDiv.appendChild(icon);
     searchResultList.appendChild(femDarDiv);
     var icon = document.getElementById('iconimg');
     header.innerHTML = out.list[5].main.temp_min;
     */
    })
    .catch(err => {
      throw err;
    });
}

window.onload = function() {
  dateheader = document.getElementById("container");

  let time = new Date();
  let year = time.getFullYear().toString();
  let month = time.getMonth().toString();
  let date = time.getDate().toString();
  let hour = time.getHours().toString();
  let min = time.getMinutes().toString();

  //let datetext= document.createTextNode(date.toDateString());

  if (month == 0) {
    month = "Januari";
  } else if (month == 1) {
    month = "Februari";
  } else if (month == 2) {
    month = "Mars";
  } else if (month == 3) {
    month = "April";
  } else if (month == 4) {
    month = "Maj";
  }

  var p = document.createElement("p");
  p.innerHTML = year + " " + month + " " + date;

  dateheader.appendChild(p);
};

// Button function onclick that shows 5 day weather
function showForecast(){

  document.getElementById("forecastWrapper").style.display = "block";
  document.getElementById("showButton").style.display = "none";
  document.getElementById("hideButton").style.display = "inline";
}
function hideForecast(){

  document.getElementById("forecastWrapper").style.display = "none";
  document.getElementById("showButton").style.display = "inline";
  document.getElementById("hideButton").style.display = "none";
}