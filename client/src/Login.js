import "./Login.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Admin from "./Admin";
import Menu from "./seniormenu";
import ReactDOM from 'react-dom';
import Signup from "./Signup";
import Fresher from "./fresher";

function Login() {

    const [uid,setUid] = useState(0);
    const [pass,setPass] = useState("");
    const [itemlist,setItemList] = useState([]);

    const switchsignup = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Signup />
            </React.StrictMode>,
        document.getElementById('root')
        );
    };
    if (window.$status=="true"){
        ReactDOM.render(
            <React.StrictMode>
              <Admin />
            </React.StrictMode>,
        document.getElementById('root')
        );
    }

    async  function login() {
        await Axios.post("http://localhost:3001/login",{
            uid: uid,
            pass: pass,
        }).then((response) => {           
            if (response.data.message) 
            {
                alert(response.data.message);
                window.location.reload();
            }else {
                window.$status="true";
                alert("Logged In Successfully");
                if (response.data[0].Privilege=="Admin"){
                    ReactDOM.render(
                        <React.StrictMode>
                          <Admin />
                        </React.StrictMode>,
                    document.getElementById('root')
                    );
                }
                else if (response.data[0].Privilege=="Senior"){
                    window.sid=response.data[0].UserID;
                    ReactDOM.render(
                    <React.StrictMode>
                        <Menu />
                    </React.StrictMode>,
                    document.getElementById('root')
                    );
                }
                else {
                    ReactDOM.render(
                        <React.StrictMode>
                            <Fresher />
                        </React.StrictMode>,
                        document.getElementById('root')
                        );
                }
            }
        }).catch((err)=>{
            console.log(err);
        });
    };

    return(
        <div className = "page">
            <div className="layer">
            <div className = "box">
                <div id="login" className="input-group">
                    <input type="text" className ="input-field" placeholder="User ID" onChange={(event) => {setUid(event.target.value);}}required/>
                    <input type="password" className ="input-field" placeholder="Password" onChange={(event) => {setPass(event.target.value);}}required/>
                    <button onClick={login} className="submit-btn">Log In</button>
                    <button type="submit" className="submit-btn" onClick={switchsignup}>Sign Up</button>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Login;