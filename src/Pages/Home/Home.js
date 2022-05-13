import React from 'react';
import Inventories from '../Inventories/Inventories';
import Reviews from '../Reviews/Reviews';

import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Inventories></Inventories>
            <Reviews></Reviews>

            <div className='mb-4'>
                <button type="button" class="btn btn-dark"> Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;