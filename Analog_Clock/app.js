let hrEL = document.querySelector("#hour");
let minEL = document.querySelector("#min");
let secEL = document.querySelector("#sec");

function displayTime() {
  let date = new Date();

  //gettting hour,mins & sec frome date;

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hrEL.style.transform = `rotate(${hRotation}deg)`;

  minEL.style.transform = `rotate(${mRotation}deg)`;

  secEL.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
