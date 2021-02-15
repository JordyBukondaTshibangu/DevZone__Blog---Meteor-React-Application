import React from 'react';
import { Redirect, useHistory } from 'react-router';



const UserAccount = props => {

    const avatarAlt = "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png";
    const dev = props.dev

    if(!dev){
        useHistory().push('/sign-in');
    }
    const { fullName, email, avatar, createdAt } = dev
    
            return (
                <> 
                {

                    dev ? (<div className="user-side-bar">
                    <div>
                    {
                    dev.avatar  ? 

                    <img src={avatar} alt={avatarAlt} onClick={() => setShowModal(!showModal)} width="50" height="50" style={{borderRadius : '50px'}}/>
                    :
                    <img src={avatarAlt} alt="" onClick={() => setShowModal(!showModal)} width="50" height="50" style={{borderRadius : '50px'}} />
                }
                        </div>
                        <div>
                            <h3>{fullName}</h3>
                            <h6>{email}</h6>
                            <br></br>
                            <h6>Join on : {createdAt}</h6>
                        </div>
                    </div>) 
                    : 
                    <Redirect to="/sign-in" />
                }
                </>
            )
    
}

export default UserAccount
