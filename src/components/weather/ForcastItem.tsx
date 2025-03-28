import {Day} from "@/types/api/ForcastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

interface  Props{
    item:Day;
}
function ForcastItem({item}:Props) {
    let day= new Date(item.datetimeEpoch*1000).toLocaleString('en-us',{weekday:'long'});
    console.log(day);
    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div>{day}</div>
            <WeatherIcon icon={item.icon} size={36}/>
            <div className={"mt-3"}>
                <span className={"text-yellow-700"}>{Math.round(item.tempmin)}</span>
                -
                <span className={"text-yellow-700"}>{Math.round(item.tempmax)}</span>

            </div>
        </div>
    );
}

export default ForcastItem;