const apiKey= 'poe sua chave'//Você precisa se cadastrar no 'openweather', e inserir a chave.
const apiCountryURL = 'https://countryflagsapi.com/png/'
const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperatura span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')


//funcao

const getWeatherData = async (city) => {
    const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiweatherURL)

    const data = await res.json()

    //console.log(data)
    
    return data

}
const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    weatherIconElement.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute('src', apiCountryURL + data.sys.country)
    windElement.innerText = `${data.wind.speed}`
    umidityElement.innerText = `${data.main.humidity}` 
    descElement.innerText =  data.weather[0].description

    //weatherContainer.classList.remove('hide')
}


//evento

searchBtn.addEventListener('click', async (e) =>{
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)

    //console.log(city)
})

document.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        var btn = document.querySelector("#search");
        btn.click();

        document.getElementById('weather-data').style.display = 'block'
    }
})
