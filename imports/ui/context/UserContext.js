import React, { createContext, useReducer } from 'react'
import { useHistory } from 'react-router-dom'

export const UserContext = createContext()

const initialState = {
	user: {},
	loading: true,
	error: false,
    sucess : false
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				loading: false,
				error: false,
				user: action.payload,
                sucess : true
			}
		case 'LOGIN_FAILED':
			return {
				...state,
				loading: false,
				error: true,
                sucess : false
			}
		case 'REGISTER_SUCCESS':
			return {
				...state,
				loading: false,
				error: false,
				user: action.payload,
                sucess : true
			}
		case 'REGISTER_FAILED':
			return {
				...state,
				loading: false,
				error: true,
                sucess : false
			}
		default:
			return state
	}
}
const UserContextProvider = (props) => {

	const history = useHistory()

	const [userState, dispatch] = useReducer(reducer, initialState)

    const handleRegister = (fullName,dateOfBirth,email,password) => {

        const newDev = {
            fullName, 
            dateOfBirth , 
            email, 
            password,
            createdAt : new Date()
        }

        Meteor.call('developer.create', newDev, error => {

            if(error) {
                setTimeout(()=> { history.push('/')},3000)
            } else {
                localStorage.setItem('dev', JSON.stringify(newDev))
                dispatch({ type : 'REGISTER_SUCCESS', payload : newDev })
                history.push('/home');
            }
        })
    }
	const handleLogin = (email, password) => {
		const dev = { email, password }

		Meteor.call('dev.login', dev, (error, res) => {
			if (error) {
				setError('There was an error ')
			}

			if (res) {
				dispatch({ type: 'LOGIN_SUCCESS', payload: res })
				localStorage.setItem('dev', JSON.stringify(res))
				history.push('/home')
			}
		})
	}
	return (
		<UserContext.Provider value={{ handleLogin, userState, handleRegister }}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
