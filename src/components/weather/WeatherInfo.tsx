import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props {
    weather: Weather;
}
function WeatherInfo({weather}: Props) {

    return (

        <div className={"grid grid-cols-2 mb-12"}>
            <div>
                {/*<h1 className={"text-2xl"}>{weather.city}</h1>*/}
                <h1 className={"text-2xl"}>{weather.address}</h1>

                <div>{weather.description}</div>
                {/*<div>Humidity: <span className={"bg-amber-400"}>{weather.humidity}</span> wind: <span*/}
                {/*<div>Humidity: <span className={"text-yellow-700"}>{weather.humidity}</span></div>*/}

                {/*   <div>WindSpeed: <span className={"text-yellow-700"}>{weather.wind}</span></div>*/}
                <div>Humidity: <span className={"text-yellow-700"}>{weather.humidity}</span>,WindSpeed: <span className={"text-yellow-700"}>{weather.wind} km/h</span></div>

            </div>
            <div className={"flex justify-end"}>
                <WeatherIcon size={56} icon={weather.icon}/>
            </div>
        </div>
    );
}

export default WeatherInfo;