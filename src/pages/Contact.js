import React from 'react'
import './pstyle.scss';
export default function Contact() {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
  return (
    <div className='Contact-page'>
      Contact Works....

      <form>
        <div>
            <label >Name : </label>
            <input type="text" required placeholder='Enter Your Name ...' />
        </div>
        <div>
            <label>password : </label>
            <input type="text" required placeholder='Enter Password' />
        </div>
        <div>
            <label >Date of Birth </label>
            <input type="date" />
        </div>
        <div>
          <label>City</label>
          <input type="text" placeholder='Enter your City ' />
        </div>
        <input type="submit" value="Add User " />
      </form>
   
    </div>
  )
}
