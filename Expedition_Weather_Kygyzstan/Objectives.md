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
- ✅ add a background image and center it
- ✅ improve the colours of each card
- ✅ set a max-width / height
- ✅ add a title for each day row
     style the title using a ```div className="day-title"```


**Testing**
- ✅ all conditional rending works within boundaries high/low on day 1
- ❌ all conditional rending works within boundaries high/low on day 2
    - due to .map() not stopping after index 48 ?
        Fixes
        - added slice before the initial map function to day2 and 3
        - 
- ❌ all conditional rending works within boundaries high/low on day 3
    - ✅ Fixed, due to incorrect indexes being passed

**Warnings**
- ✅ All red warnings set to: 2mm rain, 15km/h Winds
- ✅ All bold warnings cahnged to 14km/h Winds
    - day 3 set lower for diplay purposes
