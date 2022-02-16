import React from 'react'

const Success = props => {
    return (
        <div className="overlay"> 
           <div className="card-feedback">
                <div className='upper-side'>
                <h3 className='status'> Success</h3>
            </div>
            <div className='lower-side'>
                <p className='message'>
                   { props.children}
                </p>
            </div>
            </div>
        </div>
    )
}

export default Success
