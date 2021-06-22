import React, { useState, createContext } from "react"

export const EventProductContext = createContext()

export const EventProductProvider = (props) => {
    // const [eventProducts, setEventProducts] = useState([])

    const addEventProduct = (epObj) => {
        return fetch(`http://localhost:8000/events/${epObj.eventId}/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(epObj)

            // come back and think through logic of adding product id to event
        })
            .then(res => res.json())
    }

    const deleteEventProduct = (id) => {
        return fetch(`http://localhost:8000/events${id}/product`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
        // .then(getEvents)

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