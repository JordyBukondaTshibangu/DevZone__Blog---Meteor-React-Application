import React from 'react'
import { Redirect, useHistory } from 'react-router';

const dev = JSON.parse(localStorage.getItem('dev'));

const UserAccount = () => {

    if(!dev){
        useHistory().push('/sign-in');
    }
    const { fullName, email, avatar, createdAt } = dev

    let joinOn  = "";

    if(createdAt) {

        joinOn = createdAt.toString();
    }
            return (
                <>
                {
                    dev ? (<div className="user-side-bar">
                    <div>
                            <img src={avatar} alt="" />
                        </div>
                        <div>
                            <h3>{fullName}</h3>
                            <h6>{email}</h6>
                            <h6>{joinOn}</h6>
                        </div>
                    </div>) 
                    : 
                    <Redirect to="/sign-in" />
                }
                </>
            )
    
}

export default UserAccount
