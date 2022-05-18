import React from 'react';
import Inventories from '../Inventories/Inventories';
import Reviews from '../Reviews/Reviews';

import Banner from './Banner/Banner';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Inventories></Inventories>
            <div className='mb-4'>
                <button type="button" className="btn btn-dark"> Manage Inventories</button>
            </div>
            <Reviews></Reviews>
            <Contact></Contact>


        </div>
    );
};

export default Home;