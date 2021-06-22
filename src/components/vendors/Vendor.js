import React from "react"
import { Link, useParams } from "react-router-dom"

export const Vendor = ({ vendor }) => {
    const { eventId } = useParams()

    return (
        <section className="vendor">
            <h3 className="vendor__name">
                <Link to={`/events/detail/${eventId}/vendor_list/detail/${vendor.id}`}>
                    {vendor.business_name}
                </Link>
            </h3>

            <div className="vendor_about">{vendor.about}</div>
            <div className="vendor_budget">{vendor.category.label}</div>
            <div className="vendor_location">{vendor.city}, {vendor.state}</div>

        </section>
    )
}