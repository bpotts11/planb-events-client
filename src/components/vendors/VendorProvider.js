import React, { useState, createContext } from "react"

export const VendorContext = createContext()

export const VendorProvider = (props) => {
    const [vendors, setVendors] = useState([])

    const getVendors = () => {
        return fetch("http://localhost:8000/vendors", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(response => response.json())
            .then(setVendors)
    }

    const getVendorById = (id) => {
        return fetch(`http://localhost:8000/vendors/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(res => res.json())
    }

    return (
        <VendorContext.Provider value={{
            vendors, getVendors, getVendorById
        }}>
            {props.children}
        </VendorContext.Provider>
    )
}