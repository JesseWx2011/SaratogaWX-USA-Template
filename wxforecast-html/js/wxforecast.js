async function Forecast() {
    const nwsUrl = `https://api.weather.gov/gridpoints/${NWSOffice}/${gridX},${gridY}/forecast`
    const response = await fetch(nwsUrl)
    const data = await response.json()
    const {properties} = data;
    console.log(data)

    
    dayofweeknunber = new Date().getDay()
    const daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const DayOfWeek = daysofweek[dayofweeknunber]

    const forecastupdated = properties.updateTime

    const forecastupdatedformatted = new Date(forecastupdated).toLocaleString("en-US", {timeStyle: 'short', dateStyle: 'medium'})



    document.getElementById("wxForecastUrl").innerHTML = `Forecast from <a href="https://forecast.weather.gov/MapClick.php?lat=${lat}&amp;lon=${long}&amp;unit=0&amp;lg=english">NOAA-NWS</a> for ${pagelocation}.` 
    document.getElementById("nwsForecastLocation").textContent = pagelocation

document.getElementById("wxForecastUpdated").innerHTML = `${DayOfWeek}, ${forecastupdatedformatted}`
    console.log(forecastupdatedformatted)
    document.getElementById("nwsOffice").innerHTML = `Issued by: National Weather Service ${NWSOfficeFull}`

    document.getElementById("wxForecast0").textContent = properties.periods[0].detailedForecast
    document.getElementById("wxForecast1").textContent = properties.periods[1].detailedForecast
    document.getElementById("wxForecast2").textContent = properties.periods[2].detailedForecast
    document.getElementById("wxForecast3").textContent = properties.periods[3].detailedForecast
    document.getElementById("wxForecast4").textContent = properties.periods[4].detailedForecast
    document.getElementById("wxForecast5").textContent = properties.periods[5].detailedForecast
    document.getElementById("wxForecast6").textContent = properties.periods[6].detailedForecast
    document.getElementById("wxForecast7").textContent = properties.periods[7].detailedForecast
    document.getElementById("wxForecast8").textContent = properties.periods[8].detailedForecast
    document.getElementById("wxForecast9").textContent = properties.periods[9].detailedForecast
    document.getElementById("wxForecast10").textContent = properties.periods[10].detailedForecast
    document.getElementById("wxForecast11").textContent = properties.periods[11].detailedForecast
    document.getElementById("wxForecast12").textContent = properties.periods[12].detailedForecast
    document.getElementById("wxForecast13").textContent = properties.periods[13].detailedForecast

    document.getElementById("wxForecastIcon0").innerHTML = `<img style="width: 58px;" src="${properties.periods[0].icon}">`
    document.getElementById("wxForecastIcon1").innerHTML = `<img style="width: 58px;" src="${properties.periods[1].icon}">`
    document.getElementById("wxForecastIcon2").innerHTML = `<img style="width: 58px;" src="${properties.periods[2].icon}">`
    document.getElementById("wxForecastIcon3").innerHTML = `<img style="width: 58px;" src="${properties.periods[3].icon}">`
    document.getElementById("wxForecastIcon4").innerHTML = `<img style="width: 58px;" src="${properties.periods[4].icon}">`
    document.getElementById("wxForecastIcon5").innerHTML = `<img style="width: 58px;" src="${properties.periods[5].icon}">`
    document.getElementById("wxForecastIcon6").innerHTML = `<img style="width: 58px;" src="${properties.periods[6].icon}">`
    document.getElementById("wxForecastIcon7").innerHTML = `<img style="width: 58px;" src="${properties.periods[7].icon}">`
    document.getElementById("wxForecastIcon8").innerHTML = `<img style="width: 58px;" src="${properties.periods[8].icon}">`
    document.getElementById("wxForecastIcon9").innerHTML = `<img style="width: 58px;" src="${properties.periods[9].icon}">`
    document.getElementById("wxForecastIcon10").innerHTML = `<img style="width: 58px;" src="${properties.periods[10].icon}">`
    document.getElementById("wxForecastIcon11").innerHTML = `<img style="width: 58px;" src="${properties.periods[11].icon}">`
    document.getElementById("wxForecastIcon12").innerHTML = `<img style="width: 58px;" src="${properties.periods[12].icon}">`
    document.getElementById("wxForecastIcon13").innerHTML = `<img style="width: 58px;" src="${properties.periods[13].icon}">`


    document.getElementById("low0").innerHTML = properties.periods[1].temperature + "&deg;F"
    document.getElementById("low1").innerHTML = properties.periods[3].temperature + "&deg;F"
    document.getElementById("low2").innerHTML = properties.periods[5].temperature + "&deg;F"
    document.getElementById("low3").innerHTML = properties.periods[7].temperature + "&deg;F"
    document.getElementById("low4").innerHTML = properties.periods[9].temperature + "&deg;F"
    document.getElementById("low5").innerHTML = properties.periods[11].temperature + "&deg;F"
    document.getElementById("low6").innerHTML = properties.periods[13].temperature + "&deg;F"

    document.getElementById("hi0").innerHTML = properties.periods[0].temperature + "&deg;F"
    document.getElementById("hi1").innerHTML = properties.periods[2].temperature + "&deg;F"
    document.getElementById("hi2").innerHTML = properties.periods[4].temperature + "&deg;F"
    document.getElementById("hi3").innerHTML = properties.periods[6].temperature + "&deg;F"
    document.getElementById("hi4").innerHTML = properties.periods[8].temperature + "&deg;F"
    document.getElementById("hi5").innerHTML = properties.periods[10].temperature + "&deg;F"
    document.getElementById("hi6").innerHTML = properties.periods[12].temperature + "&deg;F"

    document.getElementById("wxCondition0").textContent = properties.periods[0].shortForecast
    document.getElementById("wxCondition1").textContent = properties.periods[1].shortForecast
    document.getElementById("wxCondition2").textContent = properties.periods[2].shortForecast
    document.getElementById("wxCondition3").textContent = properties.periods[3].shortForecast
    document.getElementById("wxCondition4").textContent = properties.periods[4].shortForecast
    document.getElementById("wxCondition5").textContent = properties.periods[5].shortForecast
    document.getElementById("wxCondition6").textContent = properties.periods[6].shortForecast
    document.getElementById("wxCondition7").textContent = properties.periods[7].shortForecast
    document.getElementById("wxCondition8").textContent = properties.periods[8].shortForecast
    document.getElementById("wxCondition9").textContent = properties.periods[9].shortForecast
    document.getElementById("wxCondition10").textContent = properties.periods[10].shortForecast
    document.getElementById("wxCondition11").textContent = properties.periods[11].shortForecast
    document.getElementById("wxCondition12").textContent = properties.periods[12].shortForecast
    document.getElementById("wxCondition13").textContent = properties.periods[13].shortForecast

    document.getElementById("nwsdayname0").innerHTML = `<br/>${properties.periods[0].name}<br/>`
    document.getElementById("nwsdayname1").innerHTML = `<br/>${properties.periods[1].name} <br/><br/>`
    document.getElementById("nwsdayname2").innerHTML = `<br/>${properties.periods[2].name}<br/> `
    document.getElementById("nwsdayname3").innerHTML = `<br/>${properties.periods[3].name}<br/> `
    document.getElementById("nwsdayname4").innerHTML = `<br/>${properties.periods[4].name}<br/> `
    document.getElementById("nwsdayname5").innerHTML = `<br/>${properties.periods[5].name}<br/> `
    document.getElementById("nwsdayname6").innerHTML = `<br/>${properties.periods[6].name}<br/>`
    document.getElementById("nwsdayname7").innerHTML = `<br/>${properties.periods[7].name}<br/><br/>`
    document.getElementById("nwsdayname8").innerHTML = `<br/>${properties.periods[8].name}<br/>`
    document.getElementById("nwsdayname9").innerHTML = `<br/>${properties.periods[9].name}<br/> `
    document.getElementById("nwsdayname10").innerHTML = `<br/>${properties.periods[10].name}<br/> `
    document.getElementById("nwsdayname11").innerHTML = `<br/>${properties.periods[11].name}<br/><br/> `
    document.getElementById("nwsdayname12").innerHTML = `<br/>${properties.periods[12].name}<br/> `
    document.getElementById("nwsdayname13").innerHTML = `<br/>${properties.periods[13].name}<br/> `

    document.getElementById("wxForecastName0").innerHTML =  `<b>` + properties.periods[0].name + `</b>`
    document.getElementById("wxForecastName1").innerHTML =  `<b>` + roperties.periods[1].name + `</b>`
    document.getElementById("wxForecastName2").innerHTML = `<b>` + properties.periods[2].name + `</b>`
    document.getElementById("wxForecastName3").innerHTML = `<b>` + properties.periods[3].name + `</b>`
    document.getElementById("wxForecastName4").innerHTML = `<b>` + properties.periods[4].name + `</b>`
    document.getElementById("wxForecastName5").innerHTML = `<b>` + properties.periods[5].name + `</b>`
    document.getElementById("wxForecastName6").innerHTML = `<b>` + properties.periods[6].name + `</b>`
    document.getElementById("wxForecastName7").innerHTML = `<b>` + properties.periods[7].name  + `</b>`
    document.getElementById("wxForecastName8").innerHTML = `<b>` + properties.periods[8].name + `</b>`
    document.getElementById("wxForecastName9").innerHTML = `<b>` + properties.periods[9].name + `</b>`
    document.getElementById("wxForecastName10").innerHTML = `<b>` + properties.periods[10].name + `</b>`
    document.getElementById("wxForecastName11").innerHTML = `<b>` + properties.periods[11].name + `</b>`
    document.getElementById("wxForecastName12").innerHTML = `<b>` + properties.periods[12].name + `</b>`
    document.getElementById("wxForecastName13").innerHTML = `<b>` + properties.periods[13].name + `</b>`


  }
  Forecast()