import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForcastList from "@/components/weather/ForcastList";

function Weather(props) {
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForcastList/>
        </div>
    );
}

export default Weather;