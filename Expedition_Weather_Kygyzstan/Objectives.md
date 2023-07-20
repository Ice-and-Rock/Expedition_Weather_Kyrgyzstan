## ToDo List for App

- ✅ fetch API data
- ✅ change data to be weatherData
- ✅ render data on page using ```flex: grid```
- ✅ use ```.map()``` for the following:
    - render time, temperature, rain, windspeed_10m, windspeed_180m
    - render index +4 to iterate through array and dispay every fourth hour
    - split into 3 days with index [4 - 24] [28 - 48] [52 - 72]
- ✅ split the mapped data into three rows
- ✅ add column to each row for data info on the left: time, temp etc

**Test for day 1**
- ✅ use conditional render for the following:
    if rain > 2mm || winds10m > 30km/h || winds180m > 30km/h
    - render the grid box to be red
    - ```border: + padding:```
    - new variable to establish API data: rain, winds10m, winds180m
    - ✅add in-line style to ```<div className="`weather-card ${variables}`" />```
    if rain > 1 || winds10m > 15km/h || winds180m > 20km/h
    - render <p> element to be bold
    - ```bold-warning {font-weight: 900}```
    - ✅add in-line style to ```<p className={rain > 1 ? 'bold-warning' : ''} />```

**Test for day 2/3**
- use same conditional rendering for other days
    ❌ couldn't use variables from previous day
        - logic is trapped inside .map() function
    - copy/paste same variables to each day (tkaing into account index)
    - copy=paste conditional rending for ```red-box & bold-warning```
    ❌ There has be be a better way to do this ??? 

**Aditional CSS**
- Add a background image and center it
- improve the colours of each card
- set a max-width / height
- add a title for each day row
     style the title using a ```div className="day-title"```




