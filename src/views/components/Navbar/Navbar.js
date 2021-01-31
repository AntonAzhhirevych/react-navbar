import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { book } from '../../../constants/book';
import { Button } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import closeMenuIcon from '../../../assets/images/close-menu-icon.png';
import openMenuIcon from '../../../assets/images/open-menu-icon.png';

function Navbar() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const isMobile = window.innerWidth < 960;

  const handleClick = () => setMobileMenuStatus(!mobileMenuStatus);
  const closeMobileMenu = () => setMobileMenuStatus(false);
  const onMouseEnter = () =>
    isMobile ? setDropdownStatus(false) : setDropdownStatus(true);
  const onMouseLeave = () => setDropdownStatus(false);

  return (
    <>
      <nav className="navbar">
        <Link to={book.home} className="navbar-logo" onClick={closeMobileMenu}>
          MENU
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {mobileMenuStatus ? (
            <img width="30px" src={closeMenuIcon} alt="close menu icon" />
          ) : (
            <img width="30px" src={openMenuIcon} alt="open menu icon" />
          )}
        </div>
        <ul className={mobileMenuStatus ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to={book.home}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to={book.services}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdownStatus && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to={book.products}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={book.contactUs}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to={book.services}
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
