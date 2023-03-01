import React from 'react'
import {  Link } from "react-router-dom";
import '../App.css';
import './style.scss';
import logo from '../images/logo.jpg';
export default function header() {
  function menu()
  {
    var x = document.getElementById("mobile-m");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById('menu-icon').innerText="menu";
    } else {
      x.style.display = "block";
      document.getElementById('menu-icon').innerText="close";
    }
  }
  return (
    <div className='header'>
    <div className='logo'>
      <Link to="/"><img src={logo} width="100px" height="70px"/></Link> 
    </div>
    <nav className='site-navbar'>
        <ul className='desktop-menu'>
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
        <div className='menu-icon  hov' onClick={()=>(menu())}> 
          <span class="material-symbols-outlined " id='menu-icon' >
            menu
          </span>
        </div>
        <ul className='mobile-menu' id='mobile-m'>
          <li>  <Link to="/games" className='hov'>Games</Link></li>
          <li>  <Link to="/blogs" className='hov'>Blogs</Link></li>
          <li>   <Link to="/contact" className='hov'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
