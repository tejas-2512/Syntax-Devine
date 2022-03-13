import Modal from "./Modals/modalbuy";
import "./fresher.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";


function Fresher() {
    
    const [itemlist,setItemList] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=> {
        Axios.get("http://localhost:3001/items").then((response) => {
            setItemList(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    

    return (
        <div className="App">
            <input 
                className="searchbar"
                type="text" 
                placeholder="Search Item"
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
            
            
            
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th></th>
                        <th>Item Name</th>
                        <th></th>
                        <th>Availability</th>
                        <th></th>
                        <th> View Deal </th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            
            {itemlist.filter((val)=> {
                if (searchTerm == "") {
                    return val
                } else if (val.Item_Name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val,key) => {
                return (
                    <div className="item" key={key}>
                        <table className="content-table">
                        <tbody>
                        <tr>
                                <td>{val.ItemID}</td>
                                <td>{val.Item_Name}</td>
                                <td>{val.Availability}</td>
                                <td><button className="openModalBtn"onClick={()=> {setModalOpen(true);window.iid=val.ItemID}}> View Deal </button>{modalOpen && <Modal setOpenModal={setModalOpen} />}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                
                );
            })}

        </div>
    );
}

export default Fresher;