import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { VendorRegister } from "./auth/VendorRegister"
import { CustomerRegister } from "./auth/CustomerRegister"
import { Register } from "./auth/Register"

export const PlanB = () => (
    <>
        {/* <Route render={() => {
            if (localStorage.getItem("planb_id")) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} /> */}

        <Route path="/login" render={() => {
            if (localStorage.getItem("planb_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register">
            <Register />
        </Route>

        <Route path="/vendorregister" render={() => {
            if (localStorage.getItem("planb_id")) {
                return <Redirect to="/" />
            } else {
                return <VendorRegister />
            }
        }} />
        <Route path="/customerregister" render={() => {
            if (localStorage.getItem("planb_id")) {
                return <Redirect to="/" />
            } else {
                return <CustomerRegister />
            }
        }} />
    </>
)