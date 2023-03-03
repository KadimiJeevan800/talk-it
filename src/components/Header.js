import React from 'react'
import {  Link } from "react-router-dom";
import '../App.css';
import './style.scss';
import logo from '../images/logo.jpg';
import $ from 'jquery';
export default function header() {

  $('#g').click(()=>
  {
    alert("Clicked..");
  })
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
      <Link to="/"><img src={logo} alt="site logo" width="100px" height="70px"/></Link> 
    </div>
    <nav className='site-navbar'>
        <ul className='desktop-menu'>
          <li  id='g'>
            <Link to="/games" className='hov'>Games</Link>
          </li>
          <li>
            <Link to="/blogs" className='hov'>Blogs</Link>
          </li>
          <li class="dropdown ">
            <Link to="/contact" class=" hov">Contact</Link>
            <ul class="dropdown-menu">
              <li><Link to="/person">Persons</Link></li>
              <li><Link to="#">action 2</Link></li>
              <li><Link to="#">action 3</Link></li>
              <li><Link to="#">action 4</Link></li>
            </ul>
          </li>
        </ul>
        <div className='menu-icon  hov' onClick={()=>(menu())}> 
          <span class="material-symbols-outlined " id='menu-icon' >
            menu
          </span>
        </div>
        <ul className='mobile-menu' id='mobile-m'>
          <li>  <Link to="/games" className=''>Games</Link></li>
          <li>  <Link to="/blogs" className=''>Blogs</Link></li>
          <li>   <Link to="/contact" className=''>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
