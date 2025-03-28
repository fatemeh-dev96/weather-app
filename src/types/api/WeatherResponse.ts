// export interface WeatherResponse {
//     coord: Coord
//     weather: Weather[]
//     base: string
//     main: Main
//     visibility: number
//     wind: Wind
//     clouds: Clouds
//     dt: number
//     sys: Sys
//     timezone: number
//     id: number
//     name: string
//     cod: number
// }
//
//  interface Coord {
//     lon: number
//     lat: number
// }
//
//  interface Weather {
//     id: number
//     main: string
//     description: string
//     icon: string
// }
//
//  interface Main {
//     temp: number
//     feels_like: number
//     temp_min: number
//     temp_max: number
//     pressure: number
//     humidity: number
//     sea_level: number
//     grnd_level: number
// }
//
//  interface Wind {
//     speed: number
//     deg: number
// }
//
//  interface Clouds {
//     all: number
// }
//
//  interface Sys {
//     type: number
//     id: number
//     country: string
//     sunrise: number
//     sunset: number
// }
export interface WeatherResponse {
   queryCost: number
   latitude: number
   longitude: number
   resolvedAddress: string
   address: string
   timezone: string
   tzoffset: number
   description: string
   days: Day[]
   alerts: any[]
   stations: Stations
   currentConditions: CurrentConditions
}

export interface Day {
   datetime: string
   datetimeEpoch: number
   tempmax: number
   tempmin: number
   temp: number
   feelslikemax: number
   feelslikemin: number
   feelslike: number
   dew: number
   humidity: number
   precip: number
   precipprob: number
   precipcover: number
   preciptype?: string[]
   snow: number
   snowdepth: number
   windgust: number
   windspeed: number
   winddir: number
   pressure: number
   cloudcover: number
   visibility: number
   solarradiation: number
   solarenergy: number
   uvindex: number
   severerisk: number
   sunrise: string
   sunriseEpoch: number
   sunset: string
   sunsetEpoch: number
   moonphase: number
   conditions: string
   description: string
   icon: string
   stations?: string[]
   source: string
   hours: Hour[]
   tzoffset?: number
}

export interface Hour {
   datetime: string
   datetimeEpoch: number
   temp: number
   feelslike: number
   humidity: number
   dew: number
   precip: number
   precipprob: number
   snow: number
   snowdepth: number
   preciptype?: string[]
   windgust: number
   windspeed: number
   winddir: number
   pressure: number
   visibility: number
   cloudcover: number
   solarradiation: number
   solarenergy: number
   uvindex: number
   severerisk: number
   conditions: string
   icon: string
   stations?: string[]
   source: string
   tzoffset?: number
}

export interface Stations {
   EGWU: Egwu
   EGLC: Eglc
   EGLL: Egll
   D5621: D5621
   F6665: F6665
   D4121: D4121
}

export interface Egwu {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface Eglc {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface Egll {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface D5621 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface F6665 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface D4121 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface CurrentConditions {
   datetime: string
   datetimeEpoch: number
   temp: number
   feelslike: number
   humidity: number
   dew: number
   precip: number
   precipprob: number
   snow: number
   snowdepth: number
   preciptype: any
   windgust: number
   windspeed: number
   winddir: number
   pressure: number
   visibility: number
   cloudcover: number
   solarradiation: number
   solarenergy: number
   uvindex: number
   conditions: string
   icon: string
   stations: string[]
   source: string
   sunrise: string
   sunriseEpoch: number
   sunset: string
   sunsetEpoch: number
   moonphase: number
}

// export interface WeatherResponse {
//     queryCost: number
//     latitude: number
//     longitude: number
//     resolvedAddress: string
//     address: string
//     timezone: string
//     tzoffset: number
//     description: string
//     days: Day[]
//     alerts: any[]
//     stations: Stations
//     currentConditions: CurrentConditions
// }
//
//  interface Day {
//     datetime: string
//     datetimeEpoch: number
//     tempmax: number
//     tempmin: number
//     temp: number
//     feelslikemax: number
//     feelslikemin: number
//     feelslike: number
//     dew: number
//     humidity: number
//     precip: number
//     precipprob: number
//     precipcover: number
//     preciptype: any
//     snow: number
//     snowdepth: number
//     windgust: number
//     windspeed: number
//     winddir: number
//     pressure: number
//     cloudcover: number
//     visibility: number
//     solarradiation: number
//     solarenergy: number
//     uvindex: number
//     severerisk: number
//     sunrise: string
//     sunriseEpoch: number
//     sunset: string
//     sunsetEpoch: number
//     moonphase: number
//     conditions: string
//     description: string
//     icon: string
//     stations: string[]
//     source: string
//     hours: Hour[]
// }
//
//  interface Hour {
//     datetime: string
//     datetimeEpoch: number
//     temp: number
//     feelslike: number
//     humidity: number
//     dew: number
//     precip: number
//     precipprob: number
//     snow: number
//     snowdepth: number
//     preciptype: any
//     windgust: number
//     windspeed: number
//     winddir: number
//     pressure: number
//     visibility: number
//     cloudcover: number
//     solarradiation: number
//     solarenergy: number
//     uvindex: number
//     severerisk: number
//     conditions: string
//     icon: string
//     stations: string[]
//     source: string
// }
//
//  interface Stations {
//     OIIE: Oiie
//     OIIP: Oiip
//     OIII: Oiii
// }
//
//  interface Oiie {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
// }
//
//  interface Oiip {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
// }
//
//  interface Oiii {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
// }
//
//  interface CurrentConditions {
//     datetime: string
//     datetimeEpoch: number
//     temp: number
//     feelslike: number
//     humidity: number
//     dew: number
//     precip: any
//     precipprob: number
//     snow: number
//     snowdepth: number
//     preciptype: any
//     windgust: any
//     windspeed: number
//     winddir: number
//     pressure: number
//     visibility: number
//     cloudcover: number
//     solarradiation: number
//     solarenergy: number
//     uvindex: number
//     conditions: string
//     icon: string
//     stations: string[]
//     source: string
//     sunrise: string
//     sunriseEpoch: number
//     sunset: string
//     sunsetEpoch: number
//     moonphase: number
// }
