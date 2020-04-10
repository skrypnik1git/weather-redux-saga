import React, { Component } from 'react'
import Search from './Search'
import Forecast from './Forecast'
import { getFormatedDate, convertToCelsius, getBCwithTemprtr } from '../helpers'



export default class CurrentWeather extends Component {
    render() {
        const {main, name, iconUrl, weather } = this.props.weather.dataForCurrWeather
        const { feels_like, temp, temp_max, temp_min} = main
        const { description } = weather[0]
        const { isforecastForToday, forecastForToday } = this.props
        return (
                <div className='mt-5 d-flex flex-column justify-content-center align-items-center border border-secondary rounded  p-0 shadow'>
                    <div className='w-100 d-flex justify-content-between align-items-center cityNameBC pl-3 pr-3 mb-3'>
                        <div className='d-flex flex-column justify-content-left'>
                            <div>
                                {name}
                            </div>
                            <div>
                                {getFormatedDate()}
                            </div>
                            <div>
                                {description}
                            </div>
                        </div>
                        <img src={iconUrl} alt='png'></img>
                    </div>
                    <div className='w-100'>
                        <div className={`d-flex justify-content-around border-bottom mb-3 border-bottom border-secondary ${getBCwithTemprtr(temp)}`}>
                            <div>
                                Current temperature:
                            </div>
                            <div>
                                {convertToCelsius(temp)}
                            </div>
                        </div>
                        <div className={`d-flex justify-content-around border-bottom mb-3 border-bottom border-secondary ${getBCwithTemprtr(feels_like)}`}>
                            <div>
                                Feels like: 
                            </div>
                            <div>
                                {convertToCelsius(feels_like)}
                            </div>
                        </div>
                        <div className={`d-flex justify-content-around border-bottom mb-3 border-bottom border-secondary ${getBCwithTemprtr(temp_max)}`}>
                            <div>
                                Max temperature: 
                            </div>
                            <div>
                                {convertToCelsius(temp_max)}
                            </div>
                        </div>
                        <div className={`d-flex justify-content-around border-bottom mb-3 border-bottom border-secondary ${getBCwithTemprtr(temp_min)}`}>
                            <div>
                                Min temperature: 
                            </div>
                            <div>
                                {convertToCelsius(temp_min)}
                            </div>
                        </div>
                        {isforecastForToday && <div className='w-100 d-flex justify-content-left'>  
                                                <div id="moreForToday" className='w-100'>
                                                    <div>
                                                        <div id="moreForTodayOne">
                                                            <h2 className="mb-0">
                                                                <div className='btn search-btn btn-primary text-center' data-toggle="collapse" data-target="#moreForTodayCollapseOne" aria-expanded="true" aria-controls="moreForTodayCollapseOne">
                                                                    More for Today
                                                                </div>
                                                            </h2>
                                                        </div>

                                                        <div id="moreForTodayCollapseOne" className="collapse" aria-labelledby="moreForTodayOne" data-parent="#moreForToday">
                                                            <div className="w-100">
                                                                <Forecast forecast={forecastForToday}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                        }
                    </div>
                    <div className='w-100 cityNameBC mt-3 p-3'>
                        Please use search to find another city:
                        <Search />
                    </div>
                </div>
        )
    }
}