const content = document.querySelector(".centerContent"),
 weather = content.querySelector(".js-weather");

const API_KEY = "785a2379ec3ff0ebc7396a9a0ceae998";
const COORDS = 'coords';

function getWeather(lat, long){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=785a2379ec3ff0ebc7396a9a0ceae998&units=imperial`
  )
   .then(function(response) {
    return response.json();
   })
   .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature} °F - ${place}`;
  });
}
  

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);

}

function handleGeoError(){
  console.log("Can't access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null)
  {
    askForCoords();
  }else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function init(){
  loadCoords();
}

init();