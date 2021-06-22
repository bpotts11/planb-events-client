import React, { useEffect, useContext } from "react"
import { VendorContext } from "./VendorProvider"
import { Vendor } from "./Vendor"

export const VendorList = () => {
    const { vendors, getVendors } = useContext(VendorContext)

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getVendors()
    }, []);

    return (
        <div className="vendor__component">
            <h1>Vendors</h1>

            <div className="vendors">
                {vendors.map(vendor => {
                    return <Vendor key={vendor.id} vendor={vendor} />
                })}
            </div>
        </div>
    )
}