import React, { useEffect, useContext, useState } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Event"
import { useHistory } from "react-router-dom"

// this is a list of all the events
export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    // const currentUser = parseInt(localStorage.getItem('planb_customerId'))
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getEvents()
    }, []);

    return (
        <div className="post__component">
            <h1>My Events</h1>

            <button onClick={() => history.push("/events/create")}>
                Add Event
            </button>

            <div className="events">
                {events.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </div>
        </div>
    )
}