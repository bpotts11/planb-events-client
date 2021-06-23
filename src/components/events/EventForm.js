import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { useHistory, useParams } from 'react-router-dom'

export const EventForm = () => {
    const { getEvents, getEventById, addEvent, updateEvent, event, setEvent } = useContext(EventContext)

    const [isLoading, setIsLoading] = useState(true);
    const { eventId } = useParams();
    const history = useHistory()


    useEffect(() => {
        getEvents()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, always create a new one and change state instead of modifying current one */
        const newEvent = { ...event }
        let selectedVal = event.target.value
        newEvent[event.target.name] = selectedVal
        setEvent(newEvent)
    }

    const HandleSave = (e) => {
        e.preventDefault()
        const eventName = event.name
        if (eventName === "") {
            window.alert("Please enter a name")
        } else {
            setIsLoading(true);
            {
                eventId ?
                    updateEvent({
                        id: event.id,
                        name: event.name,
                        date: event.date,
                        budget: parseInt(event.budget)
                    })
                        .then(() => history.push('/customer'))
                    :
                    addEvent({
                        name: event.name,
                        date: event.date,
                        budget: parseInt(event.budget)
                    })
                        .then(() => history.push('/customer'))
            }
        }
    }

    useEffect(() => {
        if (eventId) {
            getEventById(eventId)
                .then(() => setIsLoading(false)
                )
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="event__form">
            <h2 className="form__title">{eventId ? "Edit Event" : "Create Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Event: </label>
                    <input value={event?.name} type="text" name="name" required autoFocus className="form-control"
                        placeholder="Event Name"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of Event:</label>
                    <input value={event?.date} type="date" name="date" required className="form-control"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="budget">Budget: </label>
                    <input value={event?.budget} type="text" name="budget" required className="form-control"
                        placeholder="Budget"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <div>
                <button className="btn btn-primary"
                    disabled={isLoading}
                    onClick={HandleSave}>
                    {eventId ? "Save" : "Create"}
                </button>
            </div>
        </form>
    )
}