import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { DevelopersCollection } from '../../api/collections/developersCollection';


const ListUsers = props => {

    return (
        <div>
            {
                props.developers.map((developer, index) => {
                    const { fullName, avatar, email} = developer
                    return (
                        <div key={index} className="developer-card">
                            <img src={avatar} alt=""/>
                            <div>
                                <h5>{ fullName }</h5>
                                <h6>{ email }</h6>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withTracker(() => {

    Meteor.subscribe('developers', 5);

    return { developers : DevelopersCollection.find({}).fetch()};

})(ListUsers);
