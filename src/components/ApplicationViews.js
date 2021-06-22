import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { EventDetail } from "./events/EventDetail"
import { EventForm } from "./events/EventForm"
import { ProductProvider } from "./products/ProductProvider"

export const ApplicationViews = () => {
    return (
        <>
            <EventProvider>
                <ProductProvider>
                    <Route exact path="/customer">
                        <EventList />
                    </Route>
                    <Route path="/events/detail/:eventId(\d+)">
                        <EventDetail />
                    </Route>
                    <Route path="/events/create">
                        <EventForm />
                    </Route>
                    <Route path="/events/edit/:eventId(\d+)">
                        <EventForm />
                    </Route>
                </ProductProvider>
            </EventProvider>
        </>
    )
}