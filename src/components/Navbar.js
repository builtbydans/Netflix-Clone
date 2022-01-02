import React, {useEffect, useState} from 'react';
import '../components/Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 1) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
          <img
            className='nav__logo'
            src=".././images/webflix-logo.png"
            alt="Netflix Logo"
          />
          <ul className="nav__menu"> 
              <li className="nav--firstChild">Home</li>
              <li>Series</li>
              <li>Film</li>
              <li>New & Popular</li>
              <li>My List</li>
          </ul>
          <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="Netflix Avatar"
            />
        </nav>
    )
}

export default Navbar;