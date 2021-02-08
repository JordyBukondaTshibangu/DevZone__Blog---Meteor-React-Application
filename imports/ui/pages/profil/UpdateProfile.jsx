import React, { useState } from 'react'
import { Link, useHistory } from 'react-router';
import { FaGithub, FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const UpdateProfile = () => {

    const dev = JSON.parse(localStorage.getItem('dev'));
    const { _id, fullName, dateOfBirth, email, myBio, avatar} = dev

    let history = useHistory();

    const [ updatedFullName, setFullName ] = useState(fullName);
    const [ updatedDateOfBirth, setDateOfBirth ] = useState(dateOfBirth);
    const [ updatedEmail, setEmail ] = useState(email);
    const [ updatedAvatar, setAvatar ] = useState(avatar);
    const [ updatedMyBio, setMyBio ] = useState(myBio);
    const [ error, setError ] = useState();

    const editProfile = evt => {

        evt.preventDefault();

        const updatedDev = { 
            _id,
            fullName : updatedFullName, 
            dateOfBirth : updatedDateOfBirth, 
            email : updatedEmail, 
            myBio : updatedMyBio, 
            avatar : updatedAvatar
        }

        Meteor.call('developer.update', updatedDev, (error, res) => {
            if(error) {
                setError("something happened");
                return;
            }
            localStorage.removeItem('dev');
            localStorage.setItem('dev', JSON.stringify(updatedDev))
            history.push('/my-profile');
        })
    }

    return (
        <div className="profile-container">
            { error }
            <div className="user-details">
                <form className="user">
                    <img src={updatedAvatar} alt=""/>
                    <h3>{fullName}</h3>
                </form>
                <div className="info">
                <form onSubmit={editProfile}>
                    <div>
                        <span>Full Name</span>
                        <input type="text" value={updatedFullName} onChange={e => setFullName(e.target.value) } />
                    </div>
                    <div>
                        <span>Date of Birth </span>
                        <input type="text" value={updatedDateOfBirth} onChange={ e => setDateOfBirth(e.target.value)} />
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="text" value={updatedEmail} onChange={e => setEmail(e.target.value) } />
                    </div>
                    <div>
                        <p>My bio</p>
                        <textarea type="text" value={updatedMyBio} onChange={e => setMyBio(e.target.value) } rows="7" cols="70" className="text-area-bio"></textarea>
                    </div>
                    <div className="btn-section">
                        <button type="submit">Edit my profile </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default UpdateProfile
