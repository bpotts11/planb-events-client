import React from "react"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <button className="btn btn-1 btn-sep icon-send">
                <Link className="navbar__link" to="/vendorregister">Vendor</Link>
            </button>
            <button className="btn btn-1 btn-sep icon-send">
                <Link className="navbar__link" to="/customerregister">Customer</Link>
            </button>
        </>
    )
}