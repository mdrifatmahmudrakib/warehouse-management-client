import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';


const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data));
        // .then(data => setInventories(data.slice(0, 3)));
    }, [])
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3  mt-5 mr-5 ml-5'>

                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}>

                    </Inventory>)
                }


            </div>
        </div>
    );
};

export default Inventories;