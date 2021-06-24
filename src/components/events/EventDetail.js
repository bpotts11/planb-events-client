import React, { useContext, useEffect, useState, useRef } from "react"
import { EventContext } from "./EventProvider"
import { ProductContext } from "../products/ProductProvider"
import { Link, useHistory, useParams } from "react-router-dom"
import { EventProductContext } from "../vendors/EventProductProvider"

export const EventDetail = () => {
    const { getEventById, deleteEvent, singleEvent } = useContext(EventContext)
    const { deleteEventProduct } = useContext(EventProductContext)
    const { getProducts } = useContext(ProductContext)
    const { eventId } = useParams();
    const history = useHistory()
    const deleteWarning = useRef()

    useEffect(() => {
        getProducts()
            .then(() => getEventById(eventId))
    }, [])

    const handleDeleteWarning = () => {
        deleteWarning.current.showModal()
    }

    const handleCloseModal = () => {
        deleteWarning.current.close()
    }

    const handleClickDelete = () => {
        deleteEvent(eventId)
        handleCloseModal()
        history.push('/customer')
    }



    const handleRemoveProduct = (prodId) => {
        deleteEventProduct(eventId, prodId)
            .then(() => history.push(`/events/detail/${eventId}`))
    }

    // this it to calculate the total amount spent for the even
    const eventTotalCost = singleEvent.products?.length !== 0 ? singleEvent.products?.map(n => parseInt(n.price)).reduce((a, b) => a + b) : 0
    const overBudget = eventTotalCost - singleEvent.budget
    const underBudget = singleEvent.budget - eventTotalCost


    return (

        <section className="event">

            <h3 className="event_name">{singleEvent.name}</h3>
            <div className="event_date">Date: {new Date(singleEvent.date).toLocaleDateString()}</div>
            <div className="event_budget">{eventTotalCost > singleEvent.budget ? <p>You are ${overBudget} over budget</p>
                : <p>You have ${underBudget} remaining budget</p>}</div>
            <Link to={`/events/detail/${singleEvent.id}/vendor_list`}>
                Add to your event
            </Link>
            <div className="event_products">
                {singleEvent.products?.map(product =>
                    <div key={product.id}>
                        <h4>{product?.name}</h4>
                        <div>{product?.price}</div>
                        <button className="btn btn-3" id={product.id}
                            onClick={() => handleRemoveProduct(product.id)}>X</button>

                    </div>)}
            </div>

            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this event?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>

            <button onClick={() => { history.push(`/events/edit/${singleEvent.id}`) }}>Edit</button>
            <button className="btn btn-3" id={singleEvent?.id}
                onClick={handleDeleteWarning}>Delete</button>


        </section>
    )
}