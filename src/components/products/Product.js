import React from "react"
import { Link } from "react-router-dom"

export const Product = ({ product }) => {

    return (
        <section className="product">
            <h3 className="product__name">
                <Link to={`/products/detail/${product.id}`}>
                    {product.name}
                </Link>
            </h3>

            <div className="product_price">${product.price}</div>

            <div className="product_description">{product.description}</div>
        </section>
    )
}