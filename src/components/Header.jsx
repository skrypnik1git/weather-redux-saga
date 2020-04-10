import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    onClick = () => {
        this.props.history.push('/')
    }


    render() {
        return (
            <div className='w-100 d-flex align-items-center header'>
                <h1 className='ml-4 text-white text-center' onClick={this.onClick}>
                    Weather channel v1.0
                </h1>
            </div>
        )
    }
}

export default withRouter(Header)