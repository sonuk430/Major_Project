"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const getCountryData = function (counrty) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${counrty}`);

  request.send();
  // console.log(this.responseText);

  request.addEventListener("load", function () {
    // this is repregent request
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.capital}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages}</p>
      <p class="country__row"><span>💰</span>${data.currencies}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("bharat");

getCountryData("portugal");
getCountryData("usa");
