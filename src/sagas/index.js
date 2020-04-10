import { put, takeEvery } from 'redux-saga/effects'
import { DATA } from '../actions'
import { getData, getUrlForIcon } from '../helpers'

function* workerDataRequest(action) {
    const {currentWeatherUrl, forecastUrl } = action.payload
    try {
        const dataForCurrWeather = yield getData(currentWeatherUrl)
        const dataForForecast = yield getData(forecastUrl)
        const data = {
                dataForCurrWeather,
                dataForForecast,
            }
        yield data.dataForCurrWeather.iconUrl = getUrlForIcon(data.dataForCurrWeather.weather[0].icon)
        
        yield data.dataForForecast.list.splice(0,1)
        yield data.dataForForecast.list.forEach( period => {
            period.iconUrl = getUrlForIcon(period.weather[0].icon)
            period.date = period.dt_txt.split(' ')[0]
            period.time = period.dt_txt.split(' ')[1].slice(0,5)
        })
        yield put({type: DATA.SUCCESS, payload: data}) 
    } catch (error) {
        yield put({type: DATA.ERROR})
    }
}

export default function* watchDataRequst() {
    yield takeEvery(DATA.REQUEST, workerDataRequest)
}

