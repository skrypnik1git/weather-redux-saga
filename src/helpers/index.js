export const actionCreator = type => {
    return payload => {
        return {
            type,
            payload
        }
    }
}

export const getCityName = str => {
    const idx = str.lastIndexOf('/')
    return str.slice(idx + 1)
}

export const getData = async url => {
    const response = await fetch(url)
    if (response.status !== 200) {
        throw new Error()
    }
    const data = await response.json()
    return data
} 

export const getUrlForIcon = iconId => {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}

// url for Current Weather
export const getUrlForCW = city => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da68827d644edce14370eb01d3110b41`
}
// url for Forecast
export const getUrlForF = city => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da68827d644edce14370eb01d3110b41`
}

export const getFormatedDate = (mls = new Date()) => {
    const date = new Date(mls)

    let dd = date.getDate()
    if (dd < 10) dd = '0' + dd

    let mm = date.getMonth() + 1
    if (mm < 10) mm = '0' + mm

    let yy = date.getFullYear() % 100
    if (yy < 10) yy = '0' + yy

    return `${dd}.${mm}.${yy}`
    
}

export const convertToCelsius = kelvin => {
    let celcius = Math.round(kelvin - 273,15) 
    return `${celcius > 0 ? '+' : ''}${celcius}`
}

// different background color for cold or warm weather
export const getBCwithTemprtr = kelvin => {
    return convertToCelsius(kelvin) > 0 ? 'greenBC' : 'redBC'
}

export const handleForecastList = list => {
    const days = []

    list.reduce( (day, period) =>{
        if (!day[0]) {
            day.push(period)
            return day
        }
        
        const periodDate = new Date(period.date).getDate()
        const firstDay = new Date(day[0].date).getDate()
        if (periodDate > firstDay) {
            days.push(day)
            day = []
        }
        day.push(period)
        return day

    }, [] )
    return days
}