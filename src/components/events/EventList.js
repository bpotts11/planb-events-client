import React, { useEffect, useContext } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Event"
import { useHistory } from "react-router-dom"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getEvents()
    }, []);

    return (
        <div className="event__component">
            <h1>My Events</h1>

            <button onClick={() => history.push("/events/create")}>
                New Event
            </button>

            <div className="events">
                {events.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </div>
        </div>
    )
}