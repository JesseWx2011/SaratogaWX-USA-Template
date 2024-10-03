<h1>Configuration</h1>

<li>Head to wxforecastconfig.js in ./js</li>
<li>wxforecastconfig.js</li>

<p>"pagetitle" is the location that appears on your webpage.</p>
<p>The "lat" & "long" variables are for the NWS link</p>
<p>"GridX" & "GridY" for the api system. Find your grid cordinates at https://api.weather.gov/points/(Lat),(Long), scroll down to "properties", and copy "gridX" & "gridY".</p>
<p>NWSOffice is for the API, and NWSOfficeFull is for the webpage.</p>

<li>Uploading them to your web server</li>

<p>Duplicate "wxnewpage.php"</p>

<p>Insert *<iframe style="width: -webkit-fill-available;height: 1438px;" src="./forecast.html"> in "main-copy"</p>
