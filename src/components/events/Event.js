import React from "react"
import { Link } from "react-router-dom"

export const Event = ({ event }) => {
    const eventTotalCost = event.products?.length !== 0 ? event.products?.map(n => parseInt(n.price)).reduce((a, b) => a + b) : 0

    return (
        <section className="event">
            <h3 className="event__name">
                <Link to={`/events/detail/${event.id}`}>
                    {event.name}
                </Link>
            </h3>

            <div className="event_date"> {new Date(event.date).toLocaleDateString()}</div>

            <div className="event_budget">${eventTotalCost} spent of ${event.budget} budget</div>
        </section>
    )
}