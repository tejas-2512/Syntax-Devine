import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./Modal.css";
import Axios from "axios";
import Admin from "../Admin";

function Modal({setOpenModal}) {
    
    const [id,setID] = useState("");
    const [name,setName] = useState("");
    const [avl, setAvl] = useState("");

    const addItem = () => {
<<<<<<< HEAD:client/src/Modals/Modal.js
        if (id=="" || name=="" || avl==""){
=======
        
        if (id=="" || name=="" || avl=="" ){
>>>>>>> 8a41ee69a6cb590a55947784e0181277f5f64a41:client/src/Components/Modal.js
            alert("Null entries are not accepted.")
        }
        
        else {
            Axios.post("http://localhost:3001/additem", {
            id:id,
            name:name,
            avl:avl
            }).then(() => {
            console.log("success");
            });
            alert("Item Added.");
            setOpenModal(false);
            window.$status="true";
            window.location.reload();
        }
      };
    
    return(
    <div id="myModal" className="modal">
    <div className="modal-content">
            
            <button className="cross"
                onClick={() => {
                    setOpenModal(false);
                }}
            >
                X
            </button>

            <form>

            <label>Item ID: </label>      
            <input type="text" placeholder="ID" onChange={(event) => {setID(event.target.value);}} required/>
            <br/> <br/>
            
            <label>Item Name:</label>
            <input type="text" placeholder="Name" onChange={(event) => {setName(event.target.value);}} required/>
            <br/> <br/>

            <label>Availability:</label>
            <select name="Availability" onChange={(event) => {setAvl(event.target.value);}} required>
                <option value="">Select</option>
                <option value="From Home">From Home</option>
                <option value="Available in Roorkee">Available In Roorkee</option>
                <option value="Available in Campus">Available In Campus</option>
            </select>
            

        </form>
        <div className="align-right">
            <button type="submit" className="button" onClick={addItem}>ADD</button>
        </div>
    </div>
    </div>
    );
}

export default Modal;