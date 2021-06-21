import React from "react"
import { Link } from "react-router-dom"

export const Event = ({ event }) => {

    return (
        <section className="event">
            <h3 className="event__name">
                <Link to={`/events/detail/${event.id}`}>
                    {event.name}
                </Link>
            </h3>

            <div className="event_date">{event.date}</div>

            <div className="event_budget">{event.budget}</div>
        </section>
    )
}