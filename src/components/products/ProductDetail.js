import React, { useContext, useEffect, useState, useRef } from "react"
import { ProductContext } from "./ProductProvider"
import { useHistory, useParams } from "react-router-dom"

export const ProductDetail = () => {
    const { getProductById, deleteProduct } = useContext(ProductContext)
    const [product, setProduct] = useState({})
    const { productId } = useParams();
    const history = useHistory()
    const deleteWarning = useRef()


    useEffect(() => {
        getProductById(productId)
            .then((response) => {
                setProduct(response)
            })
    }, [])


    const handleDeleteWarning = () => {
        deleteWarning.current.showModal()
    }

    const handleCloseModal = () => {
        deleteWarning.current.close()
    }

    const handleClickDelete = () => {
        deleteProduct(productId)
        handleCloseModal()
        history.push('/vendor')
    }

    return (

        <section className="product">

            <h3 className="product_name">{product.name}</h3>
            <div className="product_price">${product.price}</div>
            <div className="product_description">{product.description}</div>

            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this product?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>

            <button onClick={() => { history.push(`/products/edit/${product.id}`) }}>Edit</button>
            <button className="btn btn-3" id={product.id}
                onClick={handleDeleteWarning}>Delete</button>


        </section>
    )
}