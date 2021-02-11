import React from 'react';

const Error = props => {
    return (
        <div className="overlay"> 
        <div className="card ">
             <div className='upper-side-failure'>
             <h3 className='status'> Failure</h3>
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

export default Error
