import React, { Component } from 'react'
import Search from '../components/Search'



export default class Greetings extends Component {
    render() {
        return (
            <div className='w-100 greetings d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column justify-content-center align-items-center border border-secondary rounded  p-3 shadow'>
                    <div className='mb-4 text-center'>
                        Welcome to Weather Channel! Please enter your city to know what clothes you should wear.
                    </div>
                    <Search/>
                </div>
            </div>
        )
    }
}