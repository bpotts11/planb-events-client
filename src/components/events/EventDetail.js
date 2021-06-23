import React, { useContext, useEffect, useState, useRef } from "react"
import { EventContext } from "./EventProvider"
import { ProductContext } from "../products/ProductProvider"
import { Link, useHistory, useParams } from "react-router-dom"
import { EventProductContext } from "../vendors/EventProductProvider"

export const EventDetail = () => {
    const { getEventById, deleteEvent } = useContext(EventContext)
    const { deleteEventProduct } = useContext(EventProductContext)
    const { getProducts } = useContext(ProductContext)
    const [event, setEvent] = useState({})
    const { eventId } = useParams();
    const history = useHistory()
    const deleteWarning = useRef()

    useEffect(() => {
        getProducts()
            .then(() => getEventById(eventId))
            .then((response) => {
                setEvent(response)
            })
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



    // const handleRemove = (prod) => {
    //     deleteEventProduct(prod)
    //         .then(() => history.push(`/events/detail/${eventId}`))
    // }

    // this it to calculate the total amount spent for the even
    const eventTotalCost = event.products?.map(n => parseInt(n.price)).reduce((a, b) => a + b)
    const overBudget = eventTotalCost - event.budget
    const underBudget = event.budget - eventTotalCost


    return (

        <section className="event">

            <h3 className="event_name">{event.name}</h3>
            <div className="event_date">Date: {new Date(event.date).toLocaleDateString()}</div>
            <div className="event_budget">{eventTotalCost > event.budget ? <p>You are ${overBudget} over budget</p>
                : <p>You have ${underBudget} remaining budget</p>}</div>
            <Link to={`/events/detail/${event.id}/vendor_list`}>
                Add to your event
            </Link>
            <div className="event_products">
                {event.products?.map(product =>
                    <div key={product.id}>
                        <h4>{product?.name}</h4>
                        {/* <div>{product?.price}</div>
                        <button className="btn btn-3" id={product.id}
                            onClick={() => handleRemove(event.product)}>X</button> */}
                    </div>)}
            </div>

            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this event?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>

            <button onClick={() => { history.push(`/events/edit/${event.id}`) }}>Edit</button>
            <button className="btn btn-3" id={event?.id}
                onClick={handleDeleteWarning}>Delete</button>


        </section>
    )
}