import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import "../../Pages/ManageInventories/ManageInventories.css"
const ManageInventories = () => {

    const [inventories, setInventories] = useItem();
    const navigate = useNavigate();
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://immense-sea-41969.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining)
                })

        }
    }
    // const { _id, name, image, price, quantity, supplier_name, short_description } = inventory;
    return (
        <div >
            <h1 className='text-danger m-4'>Manage Inventories</h1>

            {
                inventories.map(inventory => <div className="container py-4" key={inventory._id}>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">


                                            <img src={inventory.image} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <h5 className='text-left'>{inventory.name}</h5>
                                            <div className="d-flex flex-row text-left">
                                                <span className='text-left'>Product Id: {inventory._id}</span>
                                            </div>
                                            <div className="mt-1 mb-0 text-left ">
                                                <span >Supplier: {inventory.supplier_name}</span>

                                            </div>

                                            <p className='text-left'>
                                                <span className='fw-bold'>Short Description:</span> {inventory.short_description}
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-lg-3 col-xl-3 text-left border-left">
                                            <div className="d-flex flex-row align-items-center mb-1 ">
                                                <h4 className="mb-1 me-1"> {inventory.price}</h4>

                                            </div>

                                            <span >Quantity: {inventory.quantity}</span>
                                            <div className="d-flex flex-column mt-4">
                                                <button className="btn btn-primary btn-sm btn-danger" type="button " onClick={() => handleDelete(inventory._id)}>Delete Item</button>
                                                <button onClick={() => navigate('/additem')} className="btn btn-outline-primary btn-sm mt-2" type="button">
                                                    Add New Item
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )
            }

        </div>
    );
};

export default ManageInventories;