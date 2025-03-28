import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForcastResponse} from "@/types/api/ForcastResponse";

// const baseUrl = 'https://api.openweathermap.org/data/2.5/';
// const apikey = '3dce9b1c66837262a25b3f448d354a76';
const apikey ='9L2P3B36DTP5A8CQZPPK93GDB';
const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=us&include=events&key=9L2P3B36DTP5A8CQZPPK93GDB&contentType=json
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY
    //     https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=YOUR_API_KEY
            interface WeatherProps {
                // city: string;
                address: string;

            }

interface ForecastApi {
    lat: number,
    lon: number,
}

export async function callWeatherApi({address}: WeatherProps): Promise<WeatherResponse> {

    // const response = await fetch(baseUrl + `weather?q=${city}&appid=${apikey}&units=metric`)
    const response = await fetch(baseUrl + `${address}?key=${apikey}`)
    return await response.json();
}
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=9L2P3B36DTP5A8CQZPPK93GDB
// export async function callForecastApi({lat, lon}: ForecastApi): Promise<ForcastResponse> {
    export async function callForecastApi({address}: WeatherProps): Promise<WeatherResponse> {

    // const response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    // const response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=YOUR_API_KEY
    // const response = await fetch(baseUrl + `${lat},${lon}&key=${apikey}&contentType=json`)
    // const response = await fetch(baseUrl + `${lat},${lon}&?key=${apikey}`)
    const response = await fetch(baseUrl + `${address}?key=${apikey}`)

    return await response.json();
}