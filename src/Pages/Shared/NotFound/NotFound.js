import React from 'react';
import notfound from '../../../Images/notfound.png';
const NotFound = () => {
    return (
        <div className=' text-center'>

            <img className='img-fluid w-50' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;