const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("#js-time");


function getTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
    clockTitle.innerText = `${hours}:${minutes} ${ampm}`;   
}

function init () {
  getTime();
}

init();
