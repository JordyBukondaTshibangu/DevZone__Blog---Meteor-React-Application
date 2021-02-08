import React from 'react'

const UserCard = props => {
    const { fullName, avatar, email, myBio } = props.developer
    return (
        <div>
            <img src={avatar} alt="" width="100" height="100"/>
            <div>
                
                <h5>{ fullName }</h5>
                <p>{ email }</p>
                <p>{ myBio }</p>
            </div>
        </div>
    )
}

export default UserCard
