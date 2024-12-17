const recherchebtn = document.querySelector('#search-btn');
const rechercherInput = document.querySelector('#search-input');
const emplacement = document.querySelector('#localisation');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');

recherchebtn.addEventListener('click', () => {
  const ville = rechercherInput.value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid={6e28fa1a1acf4bee98f704cade0dde8d}')
    .then(response => response.json())
    .then(donnees => {
      emplacement.textContent = donnees.name;
      temperature.textContent = temperature(donnees.main.temp);
      description.textContent = donnees.weather[0].description;
    })
})