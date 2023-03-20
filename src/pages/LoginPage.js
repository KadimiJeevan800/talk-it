import React from 'react'
import './pstyle.scss';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../features/Session';
import { event } from 'jquery';
export default function LoginPage() {
    const isLogin=useSelector((state)=>state.user.value);
    const dispatch=useDispatch();
    function SubmitHandler(e)
    {
        // e.preventDefault();
        document.getElementById('logout-btn').style.display="block";
        console.log("Login Process...");
        dispatch(login({id:2,name:"Jeevan",password:"Jeevan",isLogin:1}))
    }
  return (
    <div className='LoginPage'>
  
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
    <form >
        <h3>Login Here</h3>

        <label for="username">UserName : </label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password : </label>
        <input type="password" placeholder="Password" id="password" />

        <button onClick={SubmitHandler}>Lets Play</button>
     
     
  
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
  )
}
