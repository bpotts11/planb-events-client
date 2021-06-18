import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    return (
        <>
            <div className="header">
                <ul className="navbar">
                    {/* <li className="logo">
                    <img className="navbar__logo" src={Logo} />
                    <h2 className="rare__title">Rare Publishing</h2>
                </li> */}
                    <li className="navbar__item active">
                        {localStorage.getItem("planb_customerId") ? <Link className="navbar__link" to="/customer">Events</Link>
                            : <Link className="navbar__link" to="/vendor">Products</Link>}
                    </li>
                    {/* <li className="navbar__item active">
                        <Link className="navbar__link" to="/allvendors">Vendors</Link>
                    </li> */}
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/logout">Log Out</Link>
                    </li>
                </ul>
                <hr></hr>
            </div>
        </>
    )
}