import React, { Component } from 'react'
import Search from './Search'
import { withRouter } from 'react-router-dom'



class ErrorPage extends Component {  
    render() {
        return (
            <div className='w-100 greetings d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column justify-content-center align-items-center border border-danger rounded  p-3 shadow'>
                    <div className='mb-4 text-center'>
                        Something goes wrong. Please try again.
                    </div>
                    <Search/>
                </div>
            </div>
        )
    }
}

export default withRouter(ErrorPage)