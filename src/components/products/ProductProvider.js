import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])


    const getProducts = () => {
        if (localStorage.getItem("planb_vendorId")) {
            return fetch("https://planb-events.herokuapp.com/products", {
                headers: {
                    "Authorization": `Token ${localStorage.getItem("planb_vendorId")}`
                }
            })
                .then(response => response.json())
                .then(setProducts)
        } else {
            return fetch("https://planb-events.herokuapp.com/products", {
                headers: {
                    "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
                }
            })
                .then(response => response.json())
                .then(setProducts)
        }

    }

    const getProductById = (id) => {
        return fetch(`https://planb-events.herokuapp.com/products/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_vendorId")}`
            }
        })
            .then(res => res.json())
    }

    const addProduct = (productObj) => {
        return fetch("https://planb-events.herokuapp.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_vendorId")}`
            },
            body: JSON.stringify(productObj)
        })
            .then(res => res.json())
    }

    const deleteProduct = product => {
        return fetch(`https://planb-events.herokuapp.com/products/${product}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_vendorId")}`
            }
        })
            .then(getProducts)
    }

    const updateProduct = product => {
        return fetch(`https://planb-events.herokuapp.com/products/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_vendorId")}`
            },
            body: JSON.stringify(product)
        }).then(getProducts);
    };

    return (
        <ProductContext.Provider value={{
            products, getProducts, getProductById, addProduct, deleteProduct, updateProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}