export const handler = async (event) => {
    const baseUrl = 'https://api.weather.gov/';
    const myLat = 30.379169;
    const myLong = -89.185271;
    const endPoint = getEndpoint(myLat, myLong);
    const headers = {Method: "Get", Headers: {"User-Agent": "adamtest,fredstorm@icloud.com"}};
    //const wOutlook = getForecast(endPoint)
    //const forecastUrl = baseUrl + '/' + myLat + ',' + myLong;
    async function getEndpoint(lat, long){
        const response = await fetch(
            `${baseUrl}points/${lat},${long}`
        );
        if(!response.ok){
            throw new Error('Fetching endpoint failed');
        }
        //await the response and store data
        const data = await response.json();
        //parse json and grab important parts
        const office = data.properties.cwa;
        const gridx = data.properties.gridX;
        const gridy = data.properties.gridY;
        const forecastUrl = data.properties.forecast;
        return getForecast(forecastUrl, headers);
    }

    async function getForecast(fcastUrl, options){
        //return fcastUrl;
        const forecast = await fetch(fcastUrl, options
        //, 
        // {Method: "Get",
        // Headers: {"User-Agent": "adam-test/fredstorm@icloud.com"}
        // }
        );
        if(!forecast.ok){throw new Error('Fetching forecast failed!');}
        const wForecast = await forecast.json();
        return fcastUrl + ' , ' + forecast;
    
    }
return endPoint;
//return wOutlook;
};




export const handler = async (event) => {
    const baseUrl = 'https://api.weather.gov/';
    const myLat = 30.379169;
    const myLong = -89.185271;
    const endPoint = getEndpoint(myLat, myLong);
    const headers = {Method: "Get", Headers: {"User-Agent": "adamtest,fredstorm@icloud.com"}};
    //const wOutlook = getForecast(endPoint)
    //const forecastUrl = baseUrl + '/' + myLat + ',' + myLong;
    async function getEndpoint(lat, long){
        const response = await fetch(
            `${baseUrl}points/${lat},${long}`
        );
        if(!response.ok){
            throw new Error('Fetching endpoint failed');
        }
        //await the response and store data
        const data = await response.json();
        //parse json and grab important parts
        const office = data.properties.cwa;
        const gridx = data.properties.gridX;
        const gridy = data.properties.gridY;
        const forecastUrl = data.properties.forecast;
        return getForecast(forecastUrl, headers);
    }

    async function getForecast(fcastUrl, options){
        //return fcastUrl;
        const forecast = await fetch(fcastUrl, options
        //, 
        // {Method: "Get",
        // Headers: {"User-Agent": "adam-test/fredstorm@icloud.com"}
        // }
        );
        if(!forecast.ok){throw new Error('Fetching forecast failed!');}
        const wForecast = await forecast.json();
        return fcastUrl + ' , ' + forecast;
    
    }
return endPoint;
//return wOutlook;
};