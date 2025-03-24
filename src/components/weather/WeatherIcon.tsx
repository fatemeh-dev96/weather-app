import React from 'react';
// @ts-ignore
import ReactAnimatedWeather from 'react-animated-weather';
interface  Props{
    icon:string,
    size:number
}
function WeatherIcon({icon,size}:Props) {

    let codeMapping:{
        [key:string]:string
    }={
        "01d":'CLEAR_DAY',
        "01n":'CLEAR_NIGHT',
        "02d":'PARTLY_CLOUDY_DAY',
        "03n":'PARTLY_CLOUDY_NIGHT',
        "04d":'CLOUDY',
        "02n":'CLOUDY',
        "09d":'RAIN',
        "04n":'SNOW',
        "05d":'WIND',
        "50n":'FOG'
    };
    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 512,
        animate: true
    };

    return (
        // <ReactAnimatedWeather
        //     icon={defaults.icon}
        //     color={defaults.color}
        //     size={defaults.size}
        //     animate={defaults.animate}
        // />
    <ReactAnimatedWeather
        icon={codeMapping[icon]}
        color={'#1e1e1e'}
        size={size}
        animate={true}
    />
    );
}

export default WeatherIcon;