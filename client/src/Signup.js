import "./Signup.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

function Signup() {

    const [uid,setUid] = useState(0);
    const [pass,setPass] = useState("");
    const [contact,setContact] = useState(0);
    const [priv,setPriv] = useState("");
    const [name,setName] = useState("");

    const signup = () => {
        if (uid==0 || name=="" || pass=="" || contact==0 || priv==""){
            alert("Null entries are not accepted.")
        }
        else {
            Axios.post("http://localhost:3001/adduser", {
            uid:uid,
            name:name,
            pass:pass,
            contact:contact,
            priv:priv
            }).then(() => {
            console.log("success");
            });
            alert("Registration Successful.");
            window.location.reload();
        }
      };
    return(
        <div className = "page">
            <div className="layer">
            <div class = "box">
                <div id="signup" className="input-group">
                    <input type="text" className ="input-field" placeholder="User ID" onChange={(event) => {setUid(event.target.value);}}required/>
                    <input type="text" className ="input-field" placeholder="Name" onChange={(event) => {setName(event.target.value);}}required/>
                    <input type="password" className ="input-field" placeholder="Password" onChange={(event) => {setPass(event.target.value);}} required/>
                    <input type="number" className ="input-field" placeholder="Contact Number" onChange={(event) => {setContact(event.target.value);}}required/>
            
                    <select name="Fresher/Senior" className="Toggle" onChange={(event) => {setPriv(event.target.value);}}required>
                        <option value="">Fresher/Senior</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Senior">Senior</option>
                    </select>

                    <button type="submit" class="submit-btn" onClick={signup}>Sign Up</button>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Signup;