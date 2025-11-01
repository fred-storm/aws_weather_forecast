const outlook = async function getForecast(url){
    const forecast = await fetch(url);
    if(!forecast.ok){throw new Error('Fetching Forecast Failed!');}
    const wForecast = await forecast.json();
    console.log(forecast);
    const period = wForecast.properties.periods
    return (period.slice(0,2));
  }
  
  
  export const handler = async (event) => {
    // TODO implement
    for (const { messageId, body } of event.Records) {
          console.log('SQS message %s: %j', messageId, body);
          const forecast = outlook(body)
          return forecast;
      }
  };
  