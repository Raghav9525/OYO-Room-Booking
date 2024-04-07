import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const { id } = useParams()
    console.log(id)
    // create state
    const [values, setValues] = useState({
        nam: '',
        mobile: '',
        address: '',
        password: ''
    });

    const navigate = useNavigate();

    // submit method
    const submitForm = (event) => {
        event.preventDefault();

        // Send data to the database if there are no validation errors
        axios.post("https://hotelbookingbackend-bg0y.onrender.com/signup", values)

            .then((res) => {
                if (res.status === 200) {
                    console.log("id" + id)
                    if (id === "gotologin") {
                        console.log("hello")
                        navigate('/login')
                    }
                    else {
                        console.log("/roombook/${id} route")
                        navigate(`/roombook/${id}`)
                    }
                } else {
                    console.log("signup error");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }


    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    return (
        <>
            <div id="booking-container" class="container-fluid vh-80 pb-4">

                <h5>If Already Register click Continue Booking Button</h5>
                <div class="row mt-4">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="card p-4 mb-8" >
                            {/* style={{color: "#fff"; background-color: "rgba(47, 28, 28, 0.5)"}} */}

                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="nam"
                                        className="form-control"
                                        id="exampleInputName"
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="form-control"
                                        id="exampleInputMobile"
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        id="exampleInputAddress"
                                        onChange={handleInput}
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        onChange={handleInput}
                                    />
                                </div>

                                <button type="submit" class="btn btn-primary me-2">SignUp</button>
                                <button onClick={() => navigate(`/roombook/${id}`)} class="btn btn-primary">Continue Booking</button>

                                <br />
                                <NavLink to="/Login">New user?Login</NavLink>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
        </>
    )
}

export default Signup;
