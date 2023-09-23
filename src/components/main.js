import iconMain from "../iconMain.png";
import React from "react";

export default function Main(){
    return(
        <main className="main_container">
            <h1 className="main_container__title main_set">Fun facts about React</h1>
            <div className="list_and_image">
                <ul className="list_ul">
                    <li className="main_set li_style">Was first released in 2013</li>
                    <li className="main_set li_style">Was originally created by Jordan Walke</li>
                    <li className="main_set li_style">Has well over 100K stars on GitHub</li>
                    <li className="main_set li_style">Is maintained by Facebook</li>
                    <li className="main_set li_style">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={iconMain}></img>
            </div>

        </main>
    )
}