const API_KEY = `1d5e61911ef5ba6ab4d811f6afd28569`

const searchTemperature = () => {
  const city = document.getElementById('city-name').value

  if (city === '') {
    alert('Please enter an input')
    return
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === '404') {
        alert('Please input a valid city name')
        return
      }
      displayTemperature(data)
    })

  document.getElementById('city-name').value = ''
}

const setInnertext = (id, text) => {
  document.getElementById(id).innerText = text
}

const displayTemperature = (temperature) => {
  setInnertext('city', temperature.name)
  setInnertext('temperature', temperature.main.temp)
  setInnertext('weather', temperature.weather[0].main)

  //set weather icon
  const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

  const imgIcon = document.getElementById('weather-icon')
  imgIcon.setAttribute('src', url)
  console.log(temperature)
}
