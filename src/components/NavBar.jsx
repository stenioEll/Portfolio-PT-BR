import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from '../assets/imgs/logo.png'
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="nav-logo" src={logo} alt="logo"></img>
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link
              to='home'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Home
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to='servicos'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Serviços
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to='sobre'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Sobre
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to='skills'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Skills
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to='projetos'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projetos
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to='contatos'
              activeClass="active"
              className='nav-links'
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contatos
            </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
