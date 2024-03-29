import React from 'react';
import { FaStar } from 'react-icons/fa';
const Reviews = () => {
    return (
        <div className='bg-light py-4'>
            <h1 className='m-4 text-danger'>What Our Client's Say</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-0 mx-5 me-5  ">

                <div className="col mb-4">
                    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">

                        <div className="card-body">

                            <p className="card-text">The Warehouse is such a gem so helpful, kind and considerate. After trying three stores previously  getting not very good customer service over the phone this little beauty it was such a delight to deal with I honestly can’t wait to go into this store because of him. He’s Such an asset to The warehouse.</p>


                        </div>
                        <div class="col">
                            <h4 class="mb-0 Elizabeth">	Bcstractor</h4>

                            <p><span class="fa fa-star  text-warning mr-1"></span>


                                <span
                                    class="fa fa-star-half-o text-warning mr-1">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>

                                </span>

                                <span
                                    class="fa fa-star-o text-warning mr-1">
                                </span></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">

                        <div className="card-body">

                            <p className="card-text">I have never been disappointed with any of my LG appliances, so when it was time to replace my old laptop, going with the LG Gram was an easy decision. Beneath its thin exterior is a powerful PC with ample data storage and a battery that lasts the entire day of non-stop use. I'm very happy with this purchase.</p>


                        </div>
                        <div class="col">
                            <h4 class="mb-0 Elizabeth">Mojoco.</h4>

                            <p><span class="fa fa-star  text-warning mr-1"></span>


                                <span
                                    class="fa fa-star-half-o text-warning mr-1">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>

                                </span>

                                <span
                                    class="fa fa-star-o text-warning mr-1">
                                </span></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">

                        <div className="card-body">

                            <p className="card-text">I've only been using this laptop for a week, but so far it's doing well. It's very light compared to my last laptop, which is a big plus. The screen is vivid and great for graphics. The speakers are not as good as on my last computer, but I purchased a headset to compensate. I don't use the touch screen, and I really haven't tested the battery life, yet.</p>


                        </div>
                        <div class="col">
                            <h4 class="mb-0 Elizabeth">	B. R. Morris</h4>

                            <p><span class="fa fa-star  text-warning mr-1"></span>


                                <span
                                    class="fa fa-star-half-o text-warning mr-1">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>

                                </span>

                                <span
                                    class="fa fa-star-o text-warning mr-1">
                                </span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;