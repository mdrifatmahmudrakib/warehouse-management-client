import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../Images/logo.png";
const Header = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={100} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                        <Nav className="mx-auto ">

                            <Nav.Link className='text-light' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="about">About</Nav.Link>


                            {
                                user && <>
                                    <Nav.Link className='text-light' as={Link} to="manageinventories">Manage Items</Nav.Link>
                                    <Nav.Link className='text-light' as={Link} to="additem">Add Item</Nav.Link>

                                    <Nav.Link className='text-light' as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='text-light btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                    :

                                    <Nav.Link className='text-light' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;