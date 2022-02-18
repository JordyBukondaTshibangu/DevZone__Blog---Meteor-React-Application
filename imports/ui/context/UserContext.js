import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const UserContextProvider = (props) => {

	const [ userState, setUserState ] = useState({})
	const [ error, setError ] = useState(false)

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
				setError(true)
                setTimeout(()=> { history.push('/')},3000)
            } else {
                localStorage.setItem('dev', JSON.stringify(newDev))
				setUserState(newDev)
                // history.push('/home'); 
            }
        })
    }
	const handleLogin = (email, password) => {
		const dev = { email, password }

		Meteor.call('dev.login', dev, (error, res) => {
			if (error) {
				setError(true)
			}

			if (res) {
				setUserState(res)
				localStorage.setItem('dev', JSON.stringify(res))
				// history.push('/home')
			}
		})
	}
	const handleLogout = () => {
        localStorage.removeItem('dev');
        // history.push('/')
    }
	return (
		<UserContext.Provider value={{ userState, handleLogin, handleRegister, handleLogout, errorFlag : error }}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
