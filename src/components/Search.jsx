import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator, getUrlForCW, getUrlForF } from '../helpers/index'
import { DATA } from '../actions/index'


class Search extends Component {
    constructor(props) {
        super(props)
        this.invalidMessage = React.createRef();
    }
    
    onSubmit = e => {
        e.preventDefault()
        const { dataRequest } = this.props
        const city = e.currentTarget.elements[0].value.toLowerCase()
        if (this.checkValidity(city)) {
            dataRequest({currentWeatherUrl: getUrlForCW(city), forecastUrl: getUrlForF(city), })
            this.props.history.push(`/weather/${city}`)
        } else {
            return false
        }
        
    }

    checkValidity = city => {
        return (/^[a-zA-Z]+$/).test(city)
    }

    onChange = e => {
        const city = e.target.value.toLowerCase()
        if (this.checkValidity(city) || city === '') {
            this.invalidMessage.current.classList.remove('d-block')
        } else {
            this.invalidMessage.current.classList.add('d-block')
        }

    }

    render() {
        
        return (
            <form onSubmit={this.onSubmit} className='d-flex position-relative'>
                <input type='text' placeholder='Choose your city' className='mt-2 mb-2 form-control search-input' onChange={this.onChange} defaultValue={'London'} required>
                </input>
                <div ref={this.invalidMessage} className="invalid-feedback position-absolute invalid-validation">
                    Please provide a valid city.
                </div>
                <input type='submit' className='btn btn-primary text-center search-btn mt-2' value='Show Weather'>
                </input>
            </form>
        )
    }
}

const mapActionsToProps = {
    dataRequest: actionCreator(DATA.REQUEST)
}

export default connect(null, mapActionsToProps)(withRouter(Search))