Changes and things learned:

- Conditional rendering on CSS ClassNames if certain data criteria is met

- establish a new variable for bit of data [index] inside .map() function
    ```const rain = weatherData.hourly.rain[index]```

- establish new style to be rendered
    ```.weather-card.bold-text p {font-weight: 900}```
    - ❌ this will change everything inside the className

- establish new in-line style to be rendered
    - needs to be inside back ticks ` ` as it's dynamic
    
- had to change all .map() idexes
    - map starts at 0, not 1
    - the last number in the array is 71 not 72. Doh!

- Change CSS to me formatted for mobile app using #media-queries