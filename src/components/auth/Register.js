import React from "react"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <div className="regContainer">
                <button className="regbutton">
                    <Link className="navbar__link" to="/vendorregister">Vendor</Link>
                </button>
                <button className="regbutton">
                    <Link className="navbar__link" to="/customerregister">Customer</Link>
                </button>
            </div>
        </>
    )
}