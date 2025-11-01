//https://bitbucket.org/geo-jobe/weather/src/master/main.js

const myLatitude = 30.379169;
const myLongitude = -89.185271;

export const handler = async (event, context)=> {
    async function getEndpoint(latitude, longitude) {
        try  {
            const response = await fetch(
                `https://api.weather.gov/points/${latitude},${longitude}`
            )
            if(!response.ok){
                throw new Error('Fetching endpoint failed');
            }
            //await the response and store data
            const data = await response.json();
            //parse json and grab important parts
            const office = data.properties.cwa;
            const gridx = data.properties.gridX;
            const gridy = data.properties.gridY;
            const forecastUrl = data.properties.forecast
            //call forecast function passing items needed to complete url
            //console.log(forecastUrl);
            getForecast(forecastUrl);
        }
        catch(error) {
            console.error('Error: ', error);
        }
    };

    async function getForecast(url) {
        try {
            const forecast = await fetch(
                url
            )
            if(!forecast.ok){
                throw new Error('Fetching forecast failed');
            }
            //store response data
            const forecastData = await forecast.json();
            const period = forecastData.properties.periods
            //Make output more readable.
            clearData = JSON.stringify(forecastData, null, 2);
            console.log(url);
            //console.log(forecastData);
            //console.log(clearData);
            postPeriod(period[0]);
            
        }
        catch(error){
            console.error('Error: ', error);
        }
        
    };

    function postPeriod(period) {
        //console.log(period);
        return period;
    };

    getEndpoint(myLatitude, myLongitude)
};