import React from 'react';

const DevCard = ({developer}) => {
    return (
        <div className="blogger-card">
            <img src={developer.avatar} alt=""/>
            <div className="bloger-card-body">
                <h5>{ developer.fullName }</h5>
                <h6>{ developer.email }</h6>
            </div>
        </div>
    )
}

export default DevCard;
