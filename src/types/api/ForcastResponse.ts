// export interface ForcastResponse {
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
export interface ForcastResponse {
   queryCost: number
   latitude: number
   longitude: number
   resolvedAddress: string
   address: string
   timezone: string
   tzoffset: number
   description: string
   days: Day[]
   alerts: Alert[]
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

export interface Alert {
   event: string
   headline: string
   ends: string
   endsEpoch: number
   onset: string
   onsetEpoch: number
   id: string
   language: string
   link: string
   description: string
}

export interface Stations {
   F2269: F2269
   F6968: F6968
   KIAD: Kiad
   C3816: C3816
   KJYO: Kjyo
   KGAI: Kgai
}

export interface F2269 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface F6968 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface Kiad {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface C3816 {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface Kjyo {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}

export interface Kgai {
   distance: number
   latitude: number
   longitude: number
   useCount: number
   id: string
   name: string
   quality: number
   contribution: number
}


// export interface ForcastResponse {
//     cod: string
//     message: number
//     cnt: number
//     list: List[]
//     city: City
// }
//
//  interface List {
//     dt: number
//     main: Main
//     weather: Weather[]
//     clouds: Clouds
//     wind: Wind
//     snow: Snow
//     sys: Sys
//     dt_txt: string
// }
//
//  interface Main {
//     temp: number
//     temp_min: number
//     temp_max: number
//     pressure: number
//     sea_level: number
//     grnd_level: number
//     humidity: number
//     temp_kf: number
// }
//
//  interface Weather {
//     id: number
//     main: string
//     description: string
//     icon: string
// }
//
//  interface Clouds {
//     all: number
// }
//
//  interface Wind {
//     speed: number
//     deg: number
// }
//
//  interface Snow {
//     "3h"?: number
// }
//
//  interface Sys {
//     pod: string
// }
//
//  interface City {
//     id: number
//     name: string
//     coord: Coord
//     country: string
// }
//
//  interface Coord {
//     lat: number
//     lon: number
// }
