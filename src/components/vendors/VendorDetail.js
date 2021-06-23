import React, { useContext, useEffect, useState } from "react"
import { VendorContext } from "./VendorProvider"
import { ProductContext } from "../products/ProductProvider"
import { useHistory, useParams } from "react-router-dom"
import { EventProductContext } from "./EventProductProvider"

export const VendorDetail = () => {
    const { getVendorById } = useContext(VendorContext)
    const { addEventProduct } = useContext(EventProductContext)

    const { products, getProducts } = useContext(ProductContext)
    const [vendor, setVendor] = useState({})
    const { eventId, vendorId } = useParams()
    const history = useHistory()

    const vendorProducts = products.filter(products => parseInt(vendorId) === products.vendor.id)

    const handleAddProduct = (e, prod) => {
        e.preventDefault()

        addEventProduct({
            eventId: parseInt(eventId),
            productId: parseInt(prod)
        })
            .then(() => history.push(`/events/detail/${eventId}`))
    }


    useEffect(() => {
        getProducts()
            .then(() => getVendorById(vendorId))
            .then((response) => {
                setVendor(response)
            })
    }, [])

    return (

        <section className="vendor">

            <h3 className="vendor_business_name">{vendor.business_name}</h3>
            <div className="vendor_about">{vendor.about}</div>
            <div className="vendor_location">{vendor.address} {vendor.city}, {vendor.state}</div>
            <div className="vendor_products">
                {vendorProducts?.map(product =>
                    <div key={product?.id}>
                        <h4>{product?.name} </h4>
                        <div>${product?.price}</div>
                        <button className="btn btn-primary"
                            onClick={(e) => handleAddProduct(e, product.id)}>
                            Add</button>
                    </div>)}
            </div>
        </section >
    )
}