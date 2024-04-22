import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <>
 
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      textify
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
  </>
  )
}



// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     brand: PropTypes.string
//   }
  
//   Navbar.defaultProps = {
//     title: "Default Title",
//     brand: "Default Brand"
//   }


export default Navbar

