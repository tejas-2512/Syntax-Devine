import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import SeniorRemove from "./seniorremove";
import Sell from "./sell";
import ReactDOM from 'react-dom';

function Menu() {

    const switchsell = () => {
        ReactDOM.render(
            <React.StrictMode>
               <Sell />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    const switchremove = () => {
        ReactDOM.render(
            <React.StrictMode>
              <SeniorRemove />
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
    return(
        <div className = "page">
            <div className="layer">
            <div className = "box">
                <div id="login" className="input-group">
                    <button onClick={switchsell} className="submit-btn">Sell Items</button>
                    <button type="submit" className="submit-btn" onClick={switchremove}>Remove Existing Deals</button>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Menu;