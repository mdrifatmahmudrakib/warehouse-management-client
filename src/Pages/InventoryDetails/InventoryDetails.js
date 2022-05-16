import React, { useEffect, useState } from 'react';
// import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ManageInventories from '../ManageInventories/ManageInventories';
// import ManageInventories from '../ManageInventories/ManageInventories';
import "./InventoryDetails.css"
const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
        <div className='shop-container '>


            {/* div One*/}
            <div className="cart-container ">


                <div className='d-flex flex-column'>



                    <Link to="/additem" className='m-2 border border-3 border-dark btn-warning'>Add Item</Link>
                    <Link to="/manageinventories" className='m-2 border border-3 border-dark btn-warning'>Manage Inventories</Link>

                </div>




            </div>


            {/* <h1>{inventory._id}</h1> */}

            {/* div two*/}
            <div className="product-container " >
                <ManageInventories></ManageInventories>
            </div>


        </div>
    );
};

export default InventoryDetails;