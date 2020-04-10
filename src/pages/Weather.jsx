import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SpinLoader from '../components/Loader'
import ErrorPage from '../components/Error'
import CurrentWeather from '../components/CurrentWeather'
import Forecast from '../components/Forecast'
import { actionCreator, getUrlForCW, getUrlForF, getCityName, handleForecastList, getFormatedDate } from '../helpers/index'
import { DATA } from '../actions/index'






class Weather extends Component {
    componentDidMount() {
        const { main } = this.props.weather.dataForCurrWeather
        
        if (!main) {
            const { dataRequest } = this.props
            const city = getCityName(this.props.location.pathname)
            dataRequest({currentWeatherUrl: getUrlForCW(city), forecastUrl: getUrlForF(city), })
        }
    }

    render() {
        const { loading, error, weather } = this.props
        const { list } = this.props.weather.dataForForecast
        const isforecastForToday = (list && new Date().getDate() === new Date(handleForecastList(list)[0][0].date).getDate())
        
        
        const forecast = (list && handleForecastList(list))
        if (list && !isforecastForToday) {
            forecast.unshift('forecast for todays is unavailable')
        }
        return (
            <div className='w-100 d-flex justify-content-center align-items-center'>
                {loading && <SpinLoader/>}
                {error && <ErrorPage/>}
                {list && !error && <div className='col-6'>
                                        <CurrentWeather
                                            weather={weather}
                                            isforecastForToday={isforecastForToday} 
                                            forecastForToday={forecast[0]}
                                        />
                                        <div>
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Forecast for tomorrow
                                                        </button>
                                                    </h2>
                                                    </div>

                                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <Forecast forecast={forecast[1]} />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingTwo">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            {getFormatedDate(forecast[2][0].date)}
                                                        </button>
                                                    </h2>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                         <Forecast forecast={forecast[2]} />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            {getFormatedDate(forecast[3][0].date)}
                                                        </button>
                                                    </h2>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <Forecast forecast={forecast[3]} />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingFour">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            {getFormatedDate(forecast[4][0].date)}
                                                        </button>
                                                    </h2>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <Forecast forecast={forecast[4]} />
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                }
            </div> 
        )
    }
}

const mapActionsToProps = {
    dataRequest: actionCreator(DATA.REQUEST)
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Weather))