import React from "react";
import "./pstyle.scss";
import cover from "../images/con2.jpg";
import user, { login } from "../features/user";
import { useDispatch } from "react-redux";
export default function Contact() {
  var dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    var name = e.target["0"].value;
    var cmp = e.target["1"].value;
    var dob = e.target["2"].value;
    dispatch(login({ id: 1, name: name, company: cmp, dob: dob }));
  }
  return (
    <div className="Contact-page" style={{ textAlign: "center" }}>
      {/* <img src={cover} alt="cover page" />
      
      */}
      <img src={require("../images/con2.jpg")} alt="cover page" />
      <h3>Let's Start a Converstion</h3>
      <div>
        <div>
          Personal Information <hr></hr>
        </div>

        <div>
          <form style={{ padding: "10px" }} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name ..."
              />
            </div>
            <div>
              <input type="text" required placeholder="Enter Company" />
            </div>
            <div>
              <label>Date of Birth </label>
              <input type="date" placeholder="Date of Birth" />
            </div>

            <input type="submit" className="button" value="Submit " />
          </form>
        </div>
      </div>
    </div>
  );
}
