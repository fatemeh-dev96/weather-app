import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForcastList from "@/components/weather/ForcastList";
import {useEffect, useState} from "react";
import {callForecastApi, callWeatherApi} from "@/api/api";
import ForcastItem from "@/components/weather/ForcastItem";
import {ForcastResponse} from "@/types/api/ForcastResponse";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import Image from "next/image";
import Logo from "../../../public/logo.png";
interface Props{
    address:string
}
interface CurrentConditions {
    datetime: string;
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number | null;
    precipprob: number;
    snow: number;
    snowdepth: number;
    preciptype: string | null;
    windgust: number | null;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    conditions: string;
    icon: string;
    stations: string[];
    source: string;
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    moonphase: number;
}

function Weather({address}:Props) {
    const [cityState, setCityState] = useState(address);
     const [weatherState,setWeatherState]=useState<Weather>({
         // city:city,
         // city:'',
         address:'',
         wind:0,
         // humidity:0,
         description:'',
         icon:'',
         // daily:[],
         days:[],
         currentConditions:[],
         humidity:0,

     });
     // const [forcastState,setForcastState]=useState<ForcastResponse|null>(null);
    const [forcastState,setForcastState]=useState<Weather>({
        // city:city,
        // city:'',
        address:'',
        wind:0,
        // humidity:0,
        description:'',
        icon:'',
        // daily:[],
        days:[],
        currentConditions:[],
        humidity:0,
    });

    // const getWeatherData =async (address:string)=>{
    const getWeatherData =async ()=>{
        const response= await callWeatherApi({address:cityState});
       const weather:Weather={
           // city:response.name,
           // wind:response.wind.speed,
           address:response.address,
           // wind:response.Day.wind,
           // humidity:response.main.humidity,
           // humidity:response.main.humidity,

           // description:response.weather[0].description,
           // icon:response.weather[0].icon,
           icon:response.days[0].icon,
           description:response.description,
           days:[],
           humidity:response.currentConditions.humidity,
           // daily:[]
           wind:response.currentConditions.windspeed,

       }
       setWeatherState(weather);
       console.log(response);
       console.log(response.currentConditions.humidity)
        console.log(response.currentConditions.windspeed)
       // const forcastResponse=await callForecastApi({lat:response.coord.lat,lon:response.coord.lon});
       //   const forcastResponse=await callForecastApi({lat:response.latitude,lon:response.longitude});
         const forcastResponse=await callWeatherApi({address});

         console.log(forcastResponse);

         setForcastState(forcastResponse);
     }
     // if(weatherState.city.length ===0){
    // if(weatherState.address.length ===0){
    //     getWeatherData(address);
    //  }
    // useeffect
    useEffect(() => {
        // getWeatherData(address);
        getWeatherData();

    },[cityState]);
    return (
        <div className={"flex flex-col items-center"}>
             {/*<Image src={'logo.svg'} alt={'logo'} width={86} height={44}/>*/}
            <Image src={Logo} alt="logo" width={86} height={44} />
            {/*<Image src="/logo.png" alt="logo" width={86} height={44} />*/}

            <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>
                {/*<SearchForm city={address} getWeatherData={getWeatherData}/>*/}
                <SearchForm city={cityState} setCityState={setCityState} />

                <WeatherInfo weather={weatherState}/>
                {forcastState && <ForcastList forecast={forcastState}/>}
            </div>
        </div>

    );
}

export default Weather;