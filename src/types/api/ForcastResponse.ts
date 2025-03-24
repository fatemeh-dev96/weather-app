export interface ForcastResponse {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

 interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    snow: Snow
    sys: Sys
    dt_txt: string
}

 interface Main {
    temp: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

 interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

 interface Clouds {
    all: number
}

 interface Wind {
    speed: number
    deg: number
}

 interface Snow {
    "3h"?: number
}

 interface Sys {
    pod: string
}

 interface City {
    id: number
    name: string
    coord: Coord
    country: string
}

 interface Coord {
    lat: number
    lon: number
}
