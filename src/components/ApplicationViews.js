import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"

export const ApplicationViews = () => {
    return (
        <>
            <EventProvider>
                <Route exact path="/customer">
                    <EventList />
                </Route>
            </EventProvider>
        </>
    )
}