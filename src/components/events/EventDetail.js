import React, { useContext, useEffect, useState, useRef } from "react"
import { EventContext } from "./EventProvider"
import { useHistory, useParams } from "react-router-dom"

export const EventDetail = (props) => {
    const { getEventById, deleteEvent } = useContext(EventContext)
    const [event, setEvent] = useState({})
    const { eventId } = useParams();
    const history = useHistory()
    const deleteWarning = useRef()


    useEffect(() => {
        getEventById(eventId)
            .then((response) => {
                setEvent(response)
            })
    }, [])


    const handleDeleteWarning = event => {
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

    return (

        <section className="event">

            <h3 className="event_title">{event.name}</h3>
            <div className="event_date">Date: {new Date(event.date).toLocaleDateString()}</div>
            <div className="event_budget">${event.budget}</div>
            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this event?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>

            <button className="btn btn-3" id={event.id}
                onClick={handleDeleteWarning}>Delete</button>

            <button onClick={() => { history.push(`/events/edit/${event.id}`) }}>Edit</button>

        </section>
    )
}