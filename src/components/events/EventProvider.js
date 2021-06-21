import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])


    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(res => res.json())
    }

    const addEvent = (eventObj) => {
        return fetch("http://localhost:8000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(eventObj)
        })
            .then(res => res.json())
    }

    const deleteEvent = event => {
        return fetch(`http://localhost:8000/events/${event}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(event)
        }).then(getEvents);
    };

    return (
        <EventContext.Provider value={{
            events, getEvents, getEventById, addEvent, deleteEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}