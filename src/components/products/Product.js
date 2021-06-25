import React from "react"
import { Link } from "react-router-dom"

export const Product = ({ product }) => {

    return (
        <section className="productCard">
            <h3 className="productCard__info product__name">
                <Link to={`/products/detail/${product.id}`}>
                    {product.name}
                </Link>
            </h3>

            <div className="productCard__info product_price">${product.price}</div>

            <div className="productCard__info product_description">{product.description}</div>
        </section>
    )
}