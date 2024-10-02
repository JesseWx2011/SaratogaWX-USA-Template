async function NewForecast() {
    const nwsForecast = `https://api.weather.gov/gridpoints/${NWSOffice}/${gridX},${gridY}/forecast`
     const response = await fetch(nwsForecast)
     const data = await response.json()
     const {properties} = data;
    console.log(data)   
    
async   function output() {

    temp0 = properties.periods[0].temperature
    temp1 = properties.periods[1].temperature
    
    name0 = properties.periods[0].name
    name1 = properties.periods[1].name

    icon0 = properties.periods[0].icon
    icon1 = properties.periods[1].icon

    forecast0 = properties.periods[0].detailedForecast
    forecast1 = properties.periods[1].detailedForecast

    shortforecast0 = properties.periods[0].shortForecast
    shortforecast1 = properties.periods[1].shortForecast
   

    document.getElementById("day1NWS").innerHTML = name0
    document.getElementById("day2NWS").innerHTML = name1


    document.getElementById("NWSIcon").innerHTML = `<img src="${icon0}" style="width: 56px; border-radius: 10px;"></img>`
    document.getElementById("NWSIcon0").innerHTML = `<img src="${icon1}" style="width: 56px; border-radius: 10px;"></img>`

    document.getElementById("nwsShortForecast0").innerHTML = shortforecast0
    document.getElementById("nwsShortForecast1").innerHTML = shortforecast1

    document.getElementById("ajaxnwsforecastname").innerHTML = `&nbsp;NWS Weather Forecast&nbsp; - Outlook:&nbsp;${name0} &amp; ${name1}`
    document.getElementById("forecastNWSlong").innerHTML = `<b>NWS forecast:</b> ${forecast0}<br>`
    document.getElementById("forecastNWSlong2").innerHTML = `<b>NWS forecast:</b> ${forecast1}<br>`

    document.getElementById("temp1").innerHTML = `${temp0}&deg;F`
    document.getElementById("temp2").innerHTML = `${temp1}&deg;F`


    
    document.getElementById("outlookphrase").textContent = shortforecast0
    document.getElementById("outlookday").textContent = name0
    document.getElementById("outlookicon").innerHTML = `<img style="width: 56px; border-radius: 10px;" src="${icon0}">`

}
output()
}
NewForecast()
