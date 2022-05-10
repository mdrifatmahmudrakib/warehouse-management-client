import React from 'react';
import "../../Pages/ManageInventories/ManageInventories.css"
const ManageInventories = ({ inventory }) => {
    const { _id, name, image, price, quantity, supplier_name, short_description } = inventory;
    return (
        <div className="container py-5">


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
                                        <span className='text-left'>Product Id: {_id}</span>
                                    </div>
                                    <div className="mt-1 mb-0 text-left ">
                                        <span >Supplier: {supplier_name}</span>

                                    </div>

                                    <p className='text-left'>
                                        <span className='fw-bold'>Short Description:</span> {short_description}
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 text-left border-left">
                                    <div className="d-flex flex-row align-items-center mb-1 ">
                                        <h4 className="mb-1 me-1"> {price}</h4>

                                    </div>

                                    <span >Quantity: {quantity}</span>
                                    <div className="d-flex flex-column mt-4">
                                        <button className="btn btn-primary btn-sm" type="button">Delete</button>
                                        <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;