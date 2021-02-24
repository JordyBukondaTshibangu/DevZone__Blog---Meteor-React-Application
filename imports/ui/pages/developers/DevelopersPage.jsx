import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data'
import { DevelopersCollection  } from '../../../db/developers/collection';
import LoadingSpinner from '../../feedback/LoadingSpinner';
import DevProfile from '../../components/devProfile/DevProfile.jsx'
import './DevelopersPage.css';

const DevelopersPage = ({developers}) => {

    const [ showProfile, setShowProfile ] = useState(false);

    const closeProfileModal = () => { setShowProfile(false)}

    return (
        <div className="dev-page-container">
            {
                developers.length === 0 ? <LoadingSpinner /> : 
                developers.map((devProfile,index) => {

                    const { fullName, avatar, email } = devProfile

                    return (
                        <div key={index} className="dev-card">
                            <img src={avatar} alt="/"/>
                            <div className="dev-card-body">
                                <h4>{fullName}</h4>
                                <h6>{email}</h6>
                                <br></br>
                                <hr></hr>
                            </div>
                            <div className="dev-card-button">
                                <button onClick={() => setShowProfile(!showProfile)}>View Profile</button>
                                <button>Follow</button>
                            </div>
                            {
                                showProfile && 
                                ReactDOM.createPortal(<DevProfile devProfile={devProfile} closeProfileModal={closeProfileModal}/>, document.getElementById('react-user-profile'))

                            }
                        </div>)
                })
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('developers');

    return { developers : DevelopersCollection.find({}).fetch()};

})(DevelopersPage)