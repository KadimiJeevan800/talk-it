import React from "react";
import "./pstyle.scss";
import axios from 'axios';
// import cover from "../images/con2.jpg";
import  { login } from "../features/user";
import { useDispatch } from "react-redux";
export default function Contact() {
  var dispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();

    var name = e.target["0"].value;
    var cmp = e.target["1"].value;
    var dob = e.target["2"].value;
    var user ={
      name :name,
      address : cmp
    }
    dispatch(login({ id: 1, name: name, company: cmp, dob: dob }));
    // fetch("http://localhost:3001/add/user",{
    //   method:"post",
    //   body:user
    // })
    axios.post(`http://localhost:3001/add/user`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

    console.log("Data Inserted ...");
  }
  return (
    <div className="Contact-page" style={{ textAlign: "center" }}>
      {/* <img src={cover} alt="cover page" />
      
      */}
      <img src={require("../images/con2.jpg")} alt="cover page" />
      <h2>Let's Start a Converstion</h2>
      <div>
        <div>
         Personal Information :-   <hr></hr> <hr/>
        </div>

        <div>
          <form style={{ padding: "10px" }} method="post" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name ..."
                
              />
            </div>
            <div>
              <input type="text" name="address" required placeholder="Enter Team Name" />
            </div>
            <div>
              <label htmlFor="dob">Date of Join :  </label>
              <input type="date" name="dob" placeholder="Date of Birth" />
            </div>

            <input type="submit" className="button" value="Submit " />
          </form>
        </div>
      </div>
    </div>
  );
}
