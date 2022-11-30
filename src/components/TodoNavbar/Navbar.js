import React from "react";
import './Navbar.css'

export const Navbar = props => {
    return (
        <div className="header">
            <h1 className="title" style={{fontSize: 100, fontWeight: 100, margin: 0}}>{props.title}</h1>
        </div>
    )
}  
