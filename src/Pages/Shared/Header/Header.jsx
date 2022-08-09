import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "../../../Images/Clipping Path 1 Logo.svg"
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    //change color on scroll
    /*  const [color, setColor] = useState(false);
     const changeColor = () => {
         if (window.scrollY >= 50) {
             setColor(true)
         } else {
             setColor(false)
         }
         className={color ? 'nav-basic on-scroll' : 'nav-basic'}
     }
    window.addEventListener('scroll', changeColor)  */

    return (
        <nav className='navbar'>
            <div className=" container">
                <div>
                    <Nav.Link className="nav-logo">
                        <Link className='nav-links' to="/"> <img className='img-fluid' src={logo} alt="" /> </Link>
                    </Nav.Link>
                </div>
                <div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Nav.Link className="" onClick={handleClick}>
                                <Link className='nav-links' to="/">Home</Link>
                            </Nav.Link>
                        </li>


                        <li>
                            <NavDropdown className='nav-links' title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>



                        <li className="nav-item">
                            <Nav.Link className="" onClick={handleClick}>
                                <Link className='nav-links' to="/portfolio">Portfolio</Link>
                            </Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="" onClick={handleClick} >
                                <Link className="nav-links" to="/blog">Blog</Link>
                            </Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className='text-decoration-none ' onClick={handleClick} >
                                <Link className="nav-links" to="/contact">Contact</Link>
                            </Nav.Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <div className='train-contact'>
                            <li className="quite-items">
                                <Nav.Link className="" onClick={handleClick}>
                                    <Link className='nav-links' to="/free-trial">Free Trial</Link>
                                </Nav.Link>
                            </li>
                        </div>
                        <div className='train-contact ms-md-3'>
                            <li className="quite-items">
                                <Nav.Link className="" onClick={handleClick}>
                                    <Link className='nav-links' to="/get-quote">Get a Quote</Link>
                                </Nav.Link>
                            </li>
                        </div>
                    </ul>
                </div>



                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    );
};

export default Header;