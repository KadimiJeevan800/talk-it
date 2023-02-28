import React from 'react'
import './pstyle.scss';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import iron_man from '../images/iron-man.jpg';
import { login } from '../features/user';
import laptop from '../images/blog-bg.jpg'
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
export default function Home() {

  const user=useSelector((state)=>state.user.value);
  const dispatch=useDispatch();
  return (
    <div className='home'>
    
      <h1>User ID : {user.id}</h1>

      <h1>User name : {user.name}</h1>
      

      <button 
      onClick={()=>{
        dispatch(login({id:2,name:"Jeevan"}))
      }}
      className="button"
      >
        Change name
      </button>

      <img src={iron_man}  style={{WebkitBoxReflect:"right"}} alt="iron man"/>
    

      <div className='road ' id='road ' style={{width:"100%",height:"190px",background:"black",border:"2px solid antiquewhite"}}>
      <marquee style={{color:"white"}} scrollamount="10">
        <img src={car3} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      <span style={{color:"white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span>
      <marquee style={{color:"white",borderBottom:"3px solid white"}} scrollamount="40">
        <img src={car4} width="50px" style={{borderRadius:"20px"}} height="30px"  alt='cars'/>
      </marquee>
      <marquee style={{color:"white"}} direction="right">
      <img src={car1} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      <span style={{color:"white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span>
      <marquee style={{color:"white"}} direction="right" scrollamount="20">
      <img src={car2} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      </div>
    </div>
  )
}
