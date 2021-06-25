import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./planBlogo.png"

export const NavBar = () => {

    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="navbar__item active">
                        {localStorage.getItem("planb_customerId") ? <Link className="navbar__link" to="/customer"><img className="navbar__logo" src={Logo} /></Link>
                            : <Link className="navbar__link" to="/vendor"><img className="navbar__logo" src={Logo} /></Link>}
                    </div>
                    <div className="navbar__item active logout">
                        <Link className="navbar__link" to="/logout">Log Out</Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}