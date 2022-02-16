import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data'
import { DevelopersCollection  } from '../../../db/developers/collection';
import LoadingSpinner from '../../feedback/LoadingSpinner';
import DevProfile from '../../components/devProfile/DevProfile.jsx'

const DevelopersPage = ({developers}) => {

    const [ showProfile, setShowProfile ] = useState(false);

    const closeProfileModal = () => { setShowProfile(false)}

    return (
        <div>
            {
                developers.length === 0 ? <LoadingSpinner /> : 
                developers.map((devProfile,index) => {

                    const { fullName, avatar, email } = devProfile

                    return (
                        <div key={index}>
                            <img src={avatar} alt="/"/>
                            <div>
                                <h4>{fullName}</h4>
                                <h6>{email}</h6>
                                <br></br>
                                <hr></hr>
                            </div>
                            <div>
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