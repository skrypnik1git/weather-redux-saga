import { DATA } from '../actions/index'

const initialState = {
    weather: {
        dataForCurrWeather: {},
        dataForForecast: {}
    },
    loading: false,
    error: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA.REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case DATA.SUCCESS:
            return {
                ...state,
                weather: action.payload,
                loading: false,        
            }
        case DATA.ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }
        default:
            return { ...state }
    }
}