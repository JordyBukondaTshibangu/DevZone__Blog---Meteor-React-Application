import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { DevelopersCollection } from '../../../db/developers/collection';
import LoadingSpinner from '../../feedback/LoadingSpinner';
import styled from 'styled-components';


const DevZoners = ({developers}) => {

    return (
        <DevContainer>
            {
                developers.length === 0 ? <LoadingSpinner /> : 
                developers.map((developer, index) => (
                       <>
                         {/* <img src={developer.avatar} alt=""/> */}    
                         <h5>{ developer.fullName }</h5>
                       </>
                ))
            } 
        </DevContainer>
    )
}
export const DevContainer = styled.div`

`;
export default withTracker(() => {

    Meteor.subscribe('developers', 5);

    return { developers : DevelopersCollection.find({}).fetch()};

})(DevZoners);
