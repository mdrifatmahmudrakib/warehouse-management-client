import React, { useEffect, useState } from 'react';
// import { Nav } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
// import ManageInventories from '../ManageInventories/ManageInventories';
// import ManageInventories from '../ManageInventories/ManageInventories';
import "./InventoryDetails.css"
const InventoryDetails = () => {


    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({});
    const [res, setRes] = useState({});
    const [reStock, setReStock] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId, res])
    const { id, name, image, short_description, price, quantity, supplier_name } = inventory;

    //? Handle Delivery operation
    const handleDeliver = () => {
        if (quantity > 0) {
            const newQuantity = {
                quantity: (quantity - 1)
            };

            const url = `http://localhost:5000/inventory/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity),
            })
                .then(res => res.json())
                .then(data => setRes(data));
        }
    }

    //? Handle restock submittion
    const handleForm = (event) => {
        event.preventDefault();
        const amount = parseInt(event.target.amount.value);
        const newQuantity = {
            quantity: (quantity + amount),
        }
        console.log(newQuantity)
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setRes(data))
    }



    return (
        <div className="d-flex flex-column min-vh-100">

            <h1 className='m-4 text-danger'> Inventory Item</h1>
            <div className="container py-4" >
                <div className="row justify-content-center">
                    <div className="col-md-12 col-xl-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">


                                        <img src={image} className="card-img-top" alt="..." />

                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5 className='text-left'>{name}</h5>
                                        <div className="d-flex flex-row text-left">
                                            <span className='text-left'>Product Id: {id}</span>
                                        </div>
                                        <div className="mt-1 mb-0 text-left ">
                                            <span >Supplier: {supplier_name}</span>

                                        </div>


                                        <p className='text-left'>
                                            <span >Quantity: {quantity}</span>
                                        </p>
                                        <p className='text-left'>
                                            <span className='fw-bold'></span> {short_description}

                                        </p>

                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 text-left border-left">
                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                            <h4 className="mb-1 me-1"> {price}</h4>

                                        </div>


                                        <div className=" d-flex flex-column mt-4">


                                            <button className='m-2 btn btn-primary' onClick={() => setReStock(!reStock)}>Restock</button>

                                            <button className='m-2 btn btn-danger' onClick={handleDeliver}>Delivered</button>

                                            <button className='m-2 btn btn-dark' onClick={() => navigate('/manageinventories')}>Manage Inventory</button>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            {reStock && (
                                <div className="inventory_restock">
                                    <form onSubmit={handleForm}>
                                        <div className="inventory_restock_input_field">
                                            <input className="inventory_restock_input_field" type="number" name="amount" placeholder="Enter Amount" />
                                        </div>
                                        <div className="inventory_restock_input_field">
                                            <input className="inventory_restock_input_field" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </div>







    );
};

export default InventoryDetails;