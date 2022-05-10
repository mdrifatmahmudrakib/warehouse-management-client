import React, { useEffect, useState } from 'react';

import ManageInventories from '../ManageInventories/ManageInventories';

const AllInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data));
        // .then(data => setInventories(data.slice(0, 3)));
    }, [])
    return (
        <div>
            {
                inventories.map(inventory => <ManageInventories
                    key={inventory._id}
                    inventory={inventory}>

                </ManageInventories>)
            }
        </div>
    );
};

export default AllInventories;