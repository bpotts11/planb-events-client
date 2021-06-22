import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { EventDetail } from "./events/EventDetail"
import { EventForm } from "./events/EventForm"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductDetail } from "./products/EventProductForm"
import { ProductForm } from "./products/ProductForm"
import { VendorProvider } from "./vendors/VendorProvider"
import { VendorList } from "./vendors/VendorList"
import { VendorDetail } from "./vendors/VendorDetail"
import { EventProductProvider } from "./vendors/EventProductProvider"

export const ApplicationViews = () => {
    return (
        <>
            <EventProvider>
                <VendorProvider>
                    <ProductProvider>
                        <EventProductProvider>
                            <Route exact path="/customer">
                                <EventList />
                            </Route>
                            <Route exact path="/events/detail/:eventId(\d+)">
                                <EventDetail />
                            </Route>
                            <Route path="/events/create">
                                <EventForm />
                            </Route>
                            <Route path="/events/edit/:eventId(\d+)">
                                <EventForm />
                            </Route>
                            <Route exact path="/vendor">
                                <ProductList />
                            </Route>
                            <Route path="/products/detail/:productId(\d+)">
                                <ProductDetail />
                            </Route>
                            <Route path="/products/create">
                                <ProductForm />
                            </Route>
                            <Route path="/products/edit/:productId(\d+)">
                                <ProductForm />
                            </Route>
                            <Route exact path="/events/detail/:eventId(\d+)/vendor_list">
                                <VendorList />
                            </Route>
                            <Route exact path="/events/detail/:eventId(\d+)/vendor_list/detail/:vendorId(\d+)">
                                <VendorDetail />
                            </Route>
                        </EventProductProvider>
                    </ProductProvider>
                </VendorProvider>
            </EventProvider>
        </>
    )
}