import React, { useEffect, useContext, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { useHistory } from "react-router-dom"

// this is a list of all the products
export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    // const currentUser = parseInt(localStorage.getItem('planb_vendorId'))
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="product__component">
            <h1>My Products</h1>

            <button onClick={() => history.push("/products/create")}>
                Add Product
            </button>

            <div className="products">
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}