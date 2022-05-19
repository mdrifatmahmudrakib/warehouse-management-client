import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo.png";
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    // const navigate = useNavigate();


    return (
        <div className='footer'>


            <footer class="footer-main  ">
                <div class="site-section">
                    <div class="container">

                        <div class="cta d-block d-md-flex align-items-center px-5">
                            <div>
                                <h2 class="mb-0">Wanna Stock your Product?</h2>
                                <h3 class="text-light">Let's get started!</h3>
                            </div>
                            <div class="ml-auto">
                                {/* <a href="#" class="btn btn-dark rounded-0 py-3 px-5">Contact us</a> */}

                                <Nav.Link className="btn btn-dark rounded-0 py-3 px-5 " href="/additem">Learn More.</Nav.Link>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-sm">

                                <img height={100} src={logo} alt="" />
                                <p className="copyright">

                                </p>
                            </div>

                            {/* <div class="col-sm d-flex flex-column">
                                <h3>Quick Links</h3>
                                <Nav.Link className="text-light" href="https://laptop-warehouse-69a42.web.app">Home</Nav.Link>
                                <Nav.Link className="text-light" href="https://laptop-warehouse-69a42.web.app/blog">Blog</Nav.Link>
                                <Nav.Link className="text-light" href="https://laptop-warehouse-69a42.web.app/about">About</Nav.Link>




                            </div>
                            <div class="col-sm">
                                <h3>Manage Your Stock </h3>
                                <Nav.Link className="text-light" href="/manageinventories">Manage Items</Nav.Link>
                                <Nav.Link className="text-light" href="/additem">Add Item</Nav.Link>
                                <Nav.Link className="text-light" href="/myitem">My Item</Nav.Link>







                            </div> */}

                            <div class="col-sm d-flex flex-column">
                                <p className='footer-text text-white mt-4'>© 2022 Laptop Warehouse. All rights reserved
                                    <br />
                                    Build by Rifat Mahmud Rakib
                                </p>
                            </div>
                            <div class="col-md-3 ">
                                <h3>Follow us</h3>

                                <FaFacebook className="m-2"></FaFacebook>
                                <FaTwitter className="m-2"></FaTwitter>
                                <FaInstagram className="m-2"></FaInstagram>


                            </div>

                        </div>

                    </div>
                </div>


            </footer>


        </div>
    );
};

export default Footer;