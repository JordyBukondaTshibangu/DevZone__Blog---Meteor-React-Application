import React from 'react';
import './DevProfile.css'

const DevProfile = ({devProfile, closeProfileModal}) => {

    const { fullName, avatar, email, myBio } = devProfile

    return (
        <div className="overlay" onClick={closeProfileModal}>
            <div className="dev-profile">
                <div className="dev-profile-pic">
                    <img src={avatar} alt="/" />
                </div>
                <div className="dev-profile-info">
                    <ul>
                        <li>Full Name : <span>{fullName}</span></li>
                        <li>Email address : <span>{email}</span></li>
                        <li> Bio </li>
                    </ul>
                    <hr></hr>
                    <p className="dev-profile-bio">{myBio}</p>
                </div>
            </div>
        </div>
    )
}

export default DevProfile
