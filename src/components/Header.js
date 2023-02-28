import React from 'react'
import {  Link } from "react-router-dom";
import '../App.css';
import './style.scss';
import logo from '../images/logo.jpg';
export default function header() {
  return (
    <div className='header'>
    <div className='logo'>
      <Link to="/"><img src={logo} width="100px" height="70px"/></Link> 
    </div>
    <nav>
        <ul >
          <li>
            <Link to="/games" className='hov'>Games</Link>
          </li>
          <li>
            <Link to="/blogs" className='hov'>Blogs</Link>
          </li>
          <li class="dropdown ">
            <Link to="/contact" class=" hov">Contact</Link>
            <ul class="dropdown-menu">
              <li><Link to="/person">Persons</Link></li>
              <li><a href="#">action 2</a></li>
              <li><a href="#">action 3</a></li>
              <li><a href="#">action 4</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
