import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, image, price, quantity, supplier_name, short_description } = inventory;
    const navigate = useNavigate();
    const handlenavigateToInventoryDetails = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className="col mb-4">
            <div className="card h-100 ">
                <img src={image} className="card-img-top w-50 mx-auto" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex justify-content-center'>
                        <h6 className="mb-2 text-muted p-2">
                            Quantity: {quantity}

                        </h6>
                        <h6 className="mb-2 text-muted p-2">
                            Supplier: {supplier_name}

                        </h6>
                    </div>

                    <h6 className='px-4'><span className='fw-bold'>Short Description:</span> {short_description}</h6>
                    <h3 className="card-text text-danger">Price: {price}</h3>
                </div>
                <button className="btn btn-danger" onClick={() => handlenavigateToInventoryDetails(_id)}>Update Stock</button>


            </div>
        </div>
    );
};

export default Inventory;