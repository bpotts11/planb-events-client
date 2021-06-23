import React, { createContext } from "react"

export const EventProductContext = createContext()

export const EventProductProvider = (props) => {

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

    const deleteEventProduct = (epObj) => {
        return fetch(`http://localhost:8000/events/${epObj.eventId}/product`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
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