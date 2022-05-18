import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
// import Inventory from '../Inventory/Inventory';
import MySingleItem from '../MySingleItem/MySingleItem';

const MyItem = () => {
    // const [user] = useAuthState(auth);
    // // const [inventories, setItem] = useState([]);
    const email = user.email;
    // console.log(email);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myitem?email=${email}`)
    //         .then((res) => res.json())
    //         .then((data) => setItem(data));

    // }, []);


    const [user] = useAuthState(auth);
    const [inventories, setInventories] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myitem?email=${email}`)
            .then(res => res.json())
            .then(data => setInventories(data));
        // .then(data => setInventories(data.slice(0, 3)));
    }, [user, inventories])



    return (

        <div className='row row-cols-1 row-cols-md-3  mt-5 mr-5 ml-5'>

            {
                inventories.map((inventory) => <MySingleItem
                    key={inventory._id}
                    inventory={inventory}>

                </MySingleItem>)
            }


        </div>

    );
};

export default MyItem;