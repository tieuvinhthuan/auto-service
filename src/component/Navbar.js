import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
const Navbar = (props) => {
  
    return (
      <nav className="nav-wrapper cyan darken-1">
        <div className="container">
          <Link className="brand-logo left" to="/" style={{fontSize: 20}}>Piispanristintie 10, Kaarina</Link>
          <a href="#" data-target="mobile" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink exact to="/">Tietoa meistä</NavLink></li>
            <li><NavLink to='/palvelut'>Palvelut</NavLink></li>
            <li><NavLink to='/kuvagalleria'>Kuvagalleria</NavLink></li>
            <li><NavLink to='/ottaa'>Ottaa yhteyttä</NavLink></li>
          
          </ul>
        </div>


        <ul className="sidenav" id="mobile">
          <li><NavLink exact to="/">Tietoa meistä</NavLink></li>
          <li><NavLink to='/palvelut'>Palvelut</NavLink></li>
          <li><NavLink to='/kuvagalleria'>Kuvagalleria</NavLink></li>
          <li><NavLink to='/ottaa'>Ottaa yhteyttä</NavLink></li>
        </ul>
      
    </nav>
    )
  
}

export default withRouter(Navbar);