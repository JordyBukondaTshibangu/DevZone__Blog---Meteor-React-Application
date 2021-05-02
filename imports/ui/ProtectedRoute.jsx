import React from 'react'
import {useHistory} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

const ProtectedRoute = props => {

    const dev = JSON.parse(localStorage.getItem('dev'));

    const history = useHistory()

    if (!dev || dev === null) 
        history.push('/sign-up')

    const Component = props.component
    const isAuthenticated = dev.email || ""

    return isAuthenticated !== "" ? <Component propsData={props} dev={dev}/> : <Redirect to={{pathname : "/"}} />
}

export default ProtectedRoute
