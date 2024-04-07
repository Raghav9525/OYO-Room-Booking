
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { authSuccess } from '../reduxPrac/slices/authentication';
import Footer from './Footer';

// import LoginValidation from './LoginValidation';

function Login() {
    //login->singnup so no roomid when bookNow button->to signup so roomid passed
    const id = undefined

    // create state
    const [values, setValues] = useState({
        mobile: '',
        password: ''
    })
    const navigate = useNavigate();
    // redux Store
    const authentication = useSelector((state) => state.authentication);
    console.log(authentication)
    const dispatch = useDispatch();

    // send login credential to server 
    const submitForm = async (event) => {
        event.preventDefault();
        // setErrors(LoginValidation(values));
        try {
            const response = await axios.post("https://hotelbookingbackend-bg0y.onrender.com/adminlogin", values)
            if (response.status === 200) {
                const data = response.data;
                console.log(data.token)

                // Storing the token in a cookie with an expiration time
                Cookies.set('jwtToken', data.token, { expires: 1 });

                // Dispatch the authSuccess action to update the authentication state
                dispatch(authSuccess());

                // Route to /admin after successful login
                navigate('/admin');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    return (
        <>

            <div id="booking-container" class="container-fluid pb-4 vh-80">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="card p-4 mt-4" >
                            {/* style={{color: "#fff"; background-color: "rgba(47, 28, 28, 0.5)"}} */}
                            <form onSubmit={submitForm}>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Mobile No.</label>
                                    <input
                                        type="mobile"
                                        name="mobile"
                                        onChange={handleInput}
                                        class="form-control"
                                        id="exampleInputMobile"
                                    />
                                    {/* {errors.email && <span className='text-danger'> {errors.email}</span>} */}
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
                                    {/* {errors.password && <span className='text-danger'> {errors.password}</span>} */}
                                </div>

                                <button type="submit" onClick={submitForm} class="btn btn-primary">Admin Login</button>
                                <br />
                                <NavLink to={`/signup/${id}`}>New user? Create Account</NavLink>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Login