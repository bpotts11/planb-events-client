import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { useHistory, useParams } from 'react-router-dom'

export const ProductForm = () => {
    const { getProducts, getProductById, addProduct, updateProduct } = useContext(ProductContext)

    const [vendorProduct, setProduct] = useState({
        "name": "",
        "price": "",
        "description": ""
    })

    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams();
    const history = useHistory()


    useEffect(() => {
        getProducts()
    }, [])

    const handleControlledInputChange = (product) => {
        /* When changing a state object or array, always create a new one and change state instead of modifying current one */
        const newProduct = { ...vendorProduct }
        let selectedVal = product.target.value
        newProduct[product.target.name] = selectedVal
        setProduct(newProduct)
    }

    const HandleSave = (e) => {
        e.preventDefault()
        const productName = vendorProduct.name
        const productPrice = vendorProduct.price
        if (productName === "" || productPrice === "") {
            window.alert("Please enter a name & price")
        } else {
            setIsLoading(true);
            {
                productId ?
                    updateProduct({
                        id: vendorProduct.id,
                        name: vendorProduct.name,
                        price: vendorProduct.price,
                        description: vendorProduct.description
                    })
                        .then(() => history.push('/vendor'))
                    :
                    addProduct({
                        name: vendorProduct.name,
                        price: vendorProduct.price,
                        description: vendorProduct.description
                    })
                        .then(() => history.push('/vendor'))
            }
        }
    }

    useEffect(() => {
        if (productId) {
            getProductById(productId)
                .then(product => {
                    setProduct(product)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="post__form">
            <h2 className="form__title">{productId ? "Edit Product" : "Create Product"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Product: </label>
                    <input value={vendorProduct.name} type="text" name="name" required autoFocus className="form-control"
                        placeholder="Product Name"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input value={vendorProduct.price} type="text" name="price" required className="form-control"
                        placeholder="Product Price"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea value={vendorProduct.description}
                        name="description"
                        required className="form-control"
                        placeholder="About Product"
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>


            <div>
                <button className="btn btn-primary"
                    disabled={isLoading}
                    onClick={HandleSave}>
                    {productId ? "Save" : "Create"}
                </button>
            </div>
        </form>
    )
}