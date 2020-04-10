import React, { Component } from 'react'
import { convertToCelsius } from '../helpers'


export default class Forecast extends Component {
    // if forecastForToday is false , shift first item of array
    // changeDate = date => {
    //     const dateArr = date.split(' ')
    //     const time = dateArr[1].slice(0,5)
    //     return  { 
    //         day: getFormatedDate(new Date(Date.parse(dateArr[0]))),
    //         time,
    //     }
    // }

    render() {
        const { forecast } = this.props
        return (
            forecast.map((period, idx) => {
                const { main, iconUrl, weather, time } = period
                const { feels_like, temp, temp_max, temp_min} = main
                const { description } = weather[0]
                return (
                    <div className='`w-100 d-flex cityNameBC mt-4 mb-4' key={idx}>
                        <div className='col-9 d-flex justify-content-center align-center position-relative'>
                            <div className='d-flex justify-content-end position-absolute forecast-pic-pos'>
                                {description}
                            </div>
                            <div className='w-100 d-flex justify-content-around'>
                                <div className='col-2 d-flex justify-content-around align-items-center'>
                                    <div>
                                        {time}
                                    </div>
                                </div>
                                <div className='col-5 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='w-100 d-flex justify-content-between align-items-center'> 
                                        <div>
                                            Temp:
                                        </div>
                                        <div>
                                            {convertToCelsius(temp)}
                                        </div>
                                    </div>
                                    <div className='w-100 d-flex justify-content-between align-items-center'>
                                        <div>
                                            Feels like:
                                        </div>
                                        <div>
                                            {convertToCelsius(feels_like)}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='w-100 d-flex justify-content-between align-items-center'>
                                        <div>
                                            Max:
                                        </div>
                                        <div>
                                            {convertToCelsius(temp_max)}
                                        </div>
                                    </div>
                                    <div className='w-100 d-flex justify-content-between align-items-center'>
                                        <div>
                                            Min:
                                        </div>
                                        <div>
                                            {convertToCelsius(temp_min)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={iconUrl} alt=""/>
                    </div>
                )
            })

        )
    }
}