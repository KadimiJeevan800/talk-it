import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import LoginPage from './LoginPage';
import { login } from '../features/Session';
import { useSelector } from 'react-redux';
export default function Login() {
//  const [isLogin,setIsLogin ]=useState(0); 
 const userData=useSelector((state)=>state.userLogin.value);
 return (
    <div>
      {
    userData.isLogin
    //   isLogin 
      ?  <Outlet/>
      : <LoginPage/>
     }
      {/* <Outlet/> */}
    
    </div>
  )
}
