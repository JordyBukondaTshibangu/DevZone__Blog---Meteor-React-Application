import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data'
import { DevelopersCollection  } from '../../../db/developers/collection';
import LoadingSpinner from '../../components/LoadingSpinner';
import DevProfile from '../../components/devProfile/DevProfile.jsx'
import './DevelopersPage.css';

const DevelopersPage = ({posts}) => {
    const [ showProfile, setShowProfile ] = useState(false);

    const closeProfileModal = () => { setShowProfile(false)}

    return (
        <div className="dev-page-container">
            {
                posts.length === 0 ? <LoadingSpinner /> : 
                posts.map((dev,index) => {

                    const { fullName, avatar } = dev

                    return (
                        <div key={index} className="dev-card">
                            <img src={avatar} alt="/"/>
                            <div className="dev-card-body">
                                <h4>{fullName}</h4>
                            </div>
                            <div className="dev-card-button">
                                <button onClick={() => setShowProfile(!showProfile)}>View Profile</button>
                                <button>Follow</button>
                            </div>
                            {
                                showProfile && 
                                ReactDOM.createPortal(<DevProfile dev={dev} closeProfileModal={closeProfileModal}/>, document.getElementById('react-user-profile'))

                            }
                        </div>)
                })
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('developers');

    return { posts : DevelopersCollection.find({}).fetch()};

})(DevelopersPage)