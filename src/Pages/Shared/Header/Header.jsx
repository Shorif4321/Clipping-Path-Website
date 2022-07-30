import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "../../../Images/images.png"
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
            <div className="nav-container container">
                <div>
                    <Nav.Link className="nav-logo"><Link className='nav-links' to="/"> <img className='img-fluid' src={logo} alt="" /> </Link>
                    </Nav.Link>
                </div>
                <div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Nav.Link className="" onClick={handleClick}> <Link className='nav-links' to="/">Home</Link>
                            </Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="" onClick={handleClick} > <Link className="nav-links" to="/blog">Blog</Link> </Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link to="/blog" className='text-decoration-none ' onClick={handleClick} ><Link className="nav-links" to="/contact">Contact</Link>
                            </Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link to="/contact" className=" nav-links" onClick={handleClick}>
                                Contact Us
                            </Nav.Link>
                        </li>
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