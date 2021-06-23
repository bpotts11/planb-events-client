import React, { createContext, useContext } from "react"
import { EventContext } from "../events/EventProvider"

export const EventProductContext = createContext()

export const EventProductProvider = (props) => {
    const { getEventById } = useContext(EventContext)


    const addEventProduct = (epObj) => {
        return fetch(`http://localhost:8000/events/${epObj.eventId}/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(epObj)
        })
            .then(res => res.json())
    }

    const deleteEventProduct = (eventId, productId) => {
        return fetch(`http://localhost:8000/events/${eventId}/product`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify({ "productId": `${productId}` })
        })
            .then(() => getEventById(eventId))

        // think about what you need to chain on after deleting this
    }

    return (
        <EventProductContext.Provider value={{
            addEventProduct, deleteEventProduct
        }}>
            {props.children}
        </EventProductContext.Provider>
    )
}