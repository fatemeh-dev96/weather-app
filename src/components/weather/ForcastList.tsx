import ForcastItem from "@/components/weather/ForcastItem";
import { Day, ForcastResponse } from "@/types/api/ForcastResponse";

interface Props {
    forecast: ForcastResponse;
}

function ForcastList({ forecast }: Props) {
    console.log(forecast ? forecast.days[0] : "Forecast is undefined");

    return (
        <div className="grid grid-cols-8">
            {forecast?.days?.length ? (
                forecast.days.map((item: Day) => (
                    <ForcastItem key={item.datetime} item={item} />
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default ForcastList;
