import React from "react"
import { useHistory, useParams } from "react-router-dom"

export const Vendor = ({ vendor }) => {
    const { eventId } = useParams()
    const history = useHistory()

    return (
        <section className="vendor">
            <h3 className="vendor__name">{vendor.business_name}</h3>
            <div className="vendor_about">{vendor.about}</div>
            <div className="vendor_budget">{vendor.category.label}</div>
            <div className="vendor_location">{vendor.city}, {vendor.state}</div>
            <button onClick={() => { history.push(`/events/detail/${eventId}/vendor_list/detail/${vendor.id}`) }}>View</button>

        </section>
    )
}