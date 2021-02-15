import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { DevelopersCollection  } from '../../../db/developers/collection';
import LoadingSpinner from '../../components/LoadingSpinner'

const DevelopersPage = ({posts}) => {

    return (
        <div className="dev-page-container">
            {
                posts.length === 0 ? <LoadingSpinner /> : 
                posts.map((dev,index) => {

                    const { fullName, avatar, email, myBio } = dev

                    return (
                        <div key={index} className="dev-card">
                            <img src={avatar} alt="/"/>
                            <div className="dev-card-body">
                                <h4>{fullName}</h4>
                                <h5>{email}</h5>
                                <p>{myBio}</p>
                            </div>
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