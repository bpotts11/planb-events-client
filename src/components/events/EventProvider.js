import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [singleEvent, setEvent] = useState({})


    const getEvents = () => {
        return fetch("https://planb-events.herokuapp.com/events", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`https://planb-events.herokuapp.com/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(res => res.json())
            .then((res) => setEvent(res))
    }

    const addEvent = (eventObj) => {
        return fetch("https://planb-events.herokuapp.com/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(eventObj)
        })
            .then(getEvents)
    }

    const deleteEvent = event => {
        return fetch(`https://planb-events.herokuapp.com/events/${event}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            }
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`https://planb-events.herokuapp.com/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("planb_customerId")}`
            },
            body: JSON.stringify(event)
        }).then(getEvents);
    }

    return (
        <EventContext.Provider value={{
            events, singleEvent, setEvent, getEvents, getEventById, addEvent, deleteEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}