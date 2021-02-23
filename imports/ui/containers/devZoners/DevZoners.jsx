import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { DevelopersCollection } from '../../../db/developers/collection';
import DevCard from '../../components/devCard/DevCard.jsx'
import LoadingSpinner from '../../components/LoadingSpinner';
import './DevZoners.css';


const DevZoners = ({developers}) => {

    return (
        <div className="blogers-list">
            {
                developers.length === 0 ? <LoadingSpinner /> : 
                developers.map((developer, index) => <DevCard key={index} developer={developer} />)
            } 
        </div>
    )
}

export default withTracker(() => {

    Meteor.subscribe('developers', 5);

    return { developers : DevelopersCollection.find({}).fetch()};

})(DevZoners);
