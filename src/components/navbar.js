import reactjsIcon from "../reactjsIcon.svg";
import React from "react";

export default function Navbar(){
    return(
        <header className="header_block">
            <div className="header_block_logo">
                <img src={reactjsIcon} className="header_block_logo__img"></img>
                <p className="header_block_logo__title">ReactFacts</p>
            </div>
            <p className="header_block__course">React Course - Project 1</p>
        </header>
    )
}