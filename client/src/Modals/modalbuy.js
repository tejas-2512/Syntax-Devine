import React from "react";
import { useState,useEffect } from "react";
import Axios from "axios";
import Fresher from "../fresher";
import ReactDOM from 'react-dom';

function Modal({setOpenModal}) {


    const[ItemID,setItemID]=useState(window.iid);
      useEffect(()=> {
        Axios.get(`http://localhost:3001/deals/${ItemID}`).then((response) => {
            if(response.data.length>0){
                setOpenModal(false);
                ReactDOM.render(
                    <React.StrictMode>
                      <Fresher />
                    </React.StrictMode>,
                    document.getElementById('root')
                  );
                alert("Contact "+response.data[0].Name+" at "+response.data[0].Contact_no+" for a deal of Rs."+response.data[0].Price);
            }
            else{
                setOpenModal(false);
                ReactDOM.render(
                    <React.StrictMode>
                      <Fresher />
                    </React.StrictMode>,
                    document.getElementById('root')
                  );
                alert("No Deal Available");
            }

        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(null);
}

export default Modal;
