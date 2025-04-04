
let today = document.getElementById("today")
let dateYear = document.getElementById("date")
let dateYeartime = document.getElementById("time")
let morning = document.getElementById("morning")
// ----------------------------------
let cityname = document.getElementById("cityname")
let desc = document.getElementById("desc")
let main = document.getElementById("main")
let country = document.getElementById("country")
let lat = document.getElementById("lat")
let lon = document.getElementById("lon")
let deg = document.getElementById("deg")
let gust = document.getElementById("gust")
let spead = document.getElementById("spead")
const weakDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const form = document.querySelector("form")
let cityNameInput = document.getElementById("cityNameInput")

form.addEventListener("submit",(e)=>{
e.preventDefault()
let cityName = cityNameInput.value
if(cityName.trim() !== ""){
  getCityInfo(cityName)
}else{
    alert("fadlan qor cityname ka aad rabto")
}

cityNameInput.value=""
})

async function getCityInfo(city){
    let apiKey = "8a49767fa928d2d17531c8b07f06c048"
let infoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
let responsive = await fetch(infoUrl)

let result = await responsive.json()
cityname.textContent="City: " + result.name
cityname.innerHTML = `City: <span id="design">${result.name}</span>`
result.weather.forEach((weath)=>{
desc.innerHTML = `Desc: <span id="design">${weath.description}</span>`
main.innerHTML = `Main: <span id="design">${weath.main}</span>`
})

country.innerHTML = `Country: <span id="design">${result.sys.country}</span>`
lat.innerHTML = `Lat: <span id="design">${ result.coord.lat}</span>`
lon.innerHTML = `Lon: <span id="design">${result.coord.lon}</span>`

deg.innerHTML = `Degree: <span id="design">${result.wind.deg}</span>`
gust.innerHTML = `Gust: <span id="design">${result.wind.gust}</span>`
spead.innerHTML = `Speed: <span id="design">${result.wind.speed}</span>`
let temp = document.getElementById("temp")
let hum = document.getElementById("hum")
let feel = document.getElementById("feel")
let tempC = result.main.temp - 273.15
temp.innerHTML = `Tempar: <span id="design">${Math.round(tempC)}°C</span>`
feel.innerHTML = `Feels like: <span id="design">${result.main.feels_like}</span>`
hum.innerHTML = `humidity: <span id="design">${result.main.humidity}%</span>`



}



setInterval(()=>{
    const data = new Date()
let day = weakDays[data.getDay()]
today.textContent="Today: "+ day
let year = data.toLocaleDateString()
dateYear.textContent ="Date: "+ year
let time = data.toLocaleTimeString()

dateYeartime.textContent="time: "+ time
if(time >"1:00:00 AM" || time < "11:00:00 AM"){
morning.textContent="Subax Wanaagsan"
}else if(time > "3:00:00 PM" || time < "5:59:00 PM"){
    morning.textContent="Galab Wanaagsan Sister/Brothers"
    }
else if(time > "6:00:00 PM" || time < "12:00:000 PM"){
    morning.textContent="Habeen Wanaagsan"
    
}
console.log(morning)

},1000)


async function getWeatherInfo() {
let apiKey = "8a49767fa928d2d17531c8b07f06c048"
let infoUrl = `https://api.openweathermap.org/data/2.5/weather?q=mogadishu&appid=${apiKey}`
let responsive = await fetch(infoUrl)

let result = await responsive.json()
cityname.textContent="City: " + result.name
cityname.innerHTML = `City: <span id="design">${result.name}</span>`
result.weather.forEach((weath)=>{
desc.innerHTML = `Desc: <span id="design">${weath.description}</span>`
main.innerHTML = `Main: <span id="design">${weath.main}</span>`
})

country.innerHTML = `Country: <span id="design">${result.sys.country}</span>`
lat.innerHTML = `Lat: <span id="design">${ result.coord.lat}</span>`
lon.innerHTML = `Lon: <span id="design">${result.coord.lon}</span>`

deg.innerHTML = `Degree: <span id="design">${result.wind.deg}</span>`
gust.innerHTML = `Gust: <span id="design">${result.wind.gust}</span>`
spead.innerHTML = `Speed: <span id="design">${result.wind.speed}</span>`
let temp = document.getElementById("temp")
let hum = document.getElementById("hum")
let feel = document.getElementById("feel")
let tempC = result.main.temp - 273.15
temp.innerHTML = `Tempar: <span id="design">${Math.round(tempC)}°C</span>`
feel.innerHTML = `Feels like: <span id="design">${result.main.feels_like}</span>`
hum.innerHTML = `humidity: <span id="design">${result.main.humidity}%</span>`



}

getWeatherInfo()











// http://openweathermap.org/img/w/10d.png
