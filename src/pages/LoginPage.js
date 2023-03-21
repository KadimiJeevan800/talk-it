import React, { useState } from 'react'
import './pstyle.scss';
import { useDispatch } from 'react-redux';
import { login } from '../features/Session';
export default function LoginPage() {
  const [currentUser,setCurrentUser]=useState([{id:0,username:"alien",address:"RR"}]);
  const [IncorrectDetails,setIncorrectDetails]=useState({username:"Enter Your Username :",password:"Enter Your Password : "});
    const dispatch=useDispatch();
    function SubmitHandler(e)
    {
        e.preventDefault();
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
      
        if(username!=='jeevan')
        {
          setIncorrectDetails({username:"Incorrect Username..",password:"Password : "});
          return;
        }
        else if(password!=='jeevan')
        {
          setIncorrectDetails({username:"UserName Matched",password:"Incorrect password"});
          return
        }
        else
        {
          console.log("ok");
          document.getElementById('logout-btn').style.display="block";
          console.log("Login Process...");
          dispatch(login({id:2,name:username,password:password,isLogin:1}))
        }
        
        
    }
  return (
    <div className='LoginPage'>
  
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
    <form >
        <h3>Start the Game</h3>

        <label for="username">{ IncorrectDetails.username }</label>
        <input type="text" placeholder="Email or Phone" id="username" />
       

        <label for="password">{ IncorrectDetails.password }</label>
        <input type="password" placeholder="Password" id="password" />

        <button onClick={SubmitHandler}  class="button_slide slide_left">Lets Play</button>
     
     
        
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
          <div class="register" onClick={()=>{alert("regsiter")}}>  Register</div>
        </div>
    </form>

    <div className='register-block' id='register-block'>
    <form >
        <h3>Register to Play</h3>

        <label for="username">{ IncorrectDetails.username }</label>
        <input type="text" placeholder="Email or Phone" id="Rusername" />
       

        <label for="password">{ IncorrectDetails.password }</label>
        <input type="password" placeholder="Password" id="Rpassword" />

        <button onClick={SubmitHandler}  class="button_slide slide_left">Register</button>
     
     
        
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
          <div class="register">  Login</div>
        </div>
    </form>

    </div>
    </div>
  )
}
