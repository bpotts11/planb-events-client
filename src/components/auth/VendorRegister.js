import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"

export const VendorRegister = () => {

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const businessName = useRef()
    const about = useRef()
    const phone = useRef()
    const address = useRef()
    const city = useRef()
    const state = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newVendor = {
                "email": email.current.value,
                "password": password.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "is_staff": true,
                "business_name": businessName.current.value,
                "about": about.current.value,
                "category_id": 1,
                "phone_number": phone.current.value,
                "address": address.current.value,
                "city": city.current.value,
                "state": state.current.value,
                "authorized": true
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newVendor)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("planb_vendorId", res.token)
                        history.push("/vendor")
                    }
                })
        }
        else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <>
            <main style={{ textAlign: "center" }}>

                <dialog className="dialog dialog--password" ref={passwordDialog}>
                    <div>Passwords do not match</div>
                    <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
                </dialog>

                <form className="form--login" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"> Last Name </label>
                        <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="businessName"> Business Name </label>
                        <input ref={businessName} type="text" name="businessName" className="form-control" placeholder="Business name" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="about"> Tell A Little About Your Business </label>
                        <input ref={about} type="text" name="about" className="form-control" placeholder="About" required />
                    </fieldset>
                    {/* <fieldset>
                    <label htmlFor="categoryId">Category: </label>
                    <select defaultValue={vendor.categoryId} name="categoryId" id="categoryId" className="form-control" required>
                        <option value="0">Select a Category</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </fieldset> */}
                    <fieldset>
                        <label htmlFor="phone"> Phone Number </label>
                        <input ref={phone} type="text" name="phone" className="form-control" placeholder="phone" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="address"> Address</label>
                        <input ref={address} type="text" name="address" className="form-control" placeholder="address" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="city"> City </label>
                        <input ref={city} type="text" name="city" className="form-control" placeholder="city" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="state"> State </label>
                        <input ref={state} type="text" name="state" className="form-control" placeholder="state" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit" >
                            Register</button>
                    </fieldset>
                </form>

                <section className="link--register">
                    Already registered? <Link to="/login">Login</Link>
                </section>

            </main>
        </>
    )
}