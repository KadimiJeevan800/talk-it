import React from 'react'
import './pstyle.scss';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import iron_man from '../images/iron-man.jpg';
import { login } from '../features/user';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
export default function Home() {

  const user=useSelector((state)=>state.user.value);
  const dispatch=useDispatch();
  return (
    <div className='home' style={{textAlign:"center"}}>
    
    <div>
      <h1>Player ID : {user.id}</h1>
      <h1>Player name : {user.name}</h1>
      <h1> Team : {user.company} </h1>
      <h1>Date of Join : {user.dob}</h1>
    </div>
     
      {/* <button 
      onClick={()=>{
        dispatch(login({id:2,name:"Jeevan"}))
      }}
      className="button"
      >
        Change name
      </button> <br></br> */}
      <div>
        <img src={iron_man}  style={{WebkitBoxReflect:"right"}} alt="iron man"/>
      </div>
    
    

      <div className='road ' id='road ' style={{width:"100%",height:"auto",background:"black",border:"2px solid antiquewhite"}}>
      <marquee style={{color:"white"}} scrollamount="10">
        <img src={car3} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
     <hr></hr>
      {/* <span style={{color:"white",borderRight:"3px solid white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span> */}
      <marquee style={{color:"white",borderBottom:"6px solid yellow"}} scrollamount="40">
        <img src={car4} width="50px" style={{borderRadius:"20px"}} height="30px"  alt='cars'/>
      </marquee>
      <marquee style={{color:"white"}} direction="right">
      <img src={car1} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      <hr></hr>
      {/* <span style={{color:"white",borderRight:"3px solid white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span> */}
      <marquee style={{color:"white"}} direction="right" scrollamount="20">
      <img src={car2} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      </div>
    </div>
  )
}
