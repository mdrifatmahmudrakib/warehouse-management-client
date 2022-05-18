import React from 'react';
import about from '../../Images/about.jpg';
import Contact from '../Home/Contact/Contact';
import Reviews from '../Reviews/Reviews';
import './About.css'
const About = () => {
    return (
        <div>
            <div className=' py-4'>
                <h1 className='m-4 text-danger'>About Us</h1>
                <div className="row row-cols-1 row-cols-md-2  g-4 mt-0 mx-5 me-5  ">

                    <div className="col mb-4">
                        <img className='about-img' src={about} alt="" />
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100 border-0">

                            <div className="card-body">

                                <h5 className="text-left">Laptop ware house on the basis of helping consume ers an d businesses save money using more cost effective methods to repairing their laptop computer(s). since then we have serviced and worked with over thousand customers. Laptop ware house specializes in laptops, and has developed many strong relationships in the industry that help us bring you the best possible solution to your laptop problems. We are happy to offer service and parts to regular consumers, small to medium size businesses, as well as major corporations. we can provide service for one laptop or multiple laptops On a regular basis. We also offer mass distribution of parts to service centers or in-house technology departments.Ac adapter. Laptop keyboards. Laptop battery. DC jacks. Optical disc driver. Gpu. North bridge chips. South bridge chips. Etc.</h5>


                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>

    );
};

export default About;