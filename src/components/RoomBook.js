
import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { roomData } from '../constant'
import Navbar from './Navbar';


function RoomBook() {

    const navigate = useNavigate()
    let { id } = useParams();
    // Convert id to an integer
    id = parseInt(id);

    // Find the room data with the matching id
    const room = roomData.find((room) => room.id === id);

    // set initial value to value state
    const [values, setValues] = useState({
        mobile: '',
        checkin_date: '',
        checkout_date: '',
        hotel: room.hotel,
        capacity: room.capacity,
    });

    const [insertionStatus, setInsertionStatus] = useState(false)
    const [insertionStatusMsg, setInsertionStatusMsg] = useState('')



    const submitForm = (event) => {
        event.preventDefault();

        // Send data to the database if there are no validation errors
        if (values.nam !== "") {
            axios.post("https://hotelbookingbackend-bg0y.onrender.com/roombook", values)
                .then((res) => {
                    if (res.status === 200) {
                        setInsertionStatus(true)
                        setInsertionStatusMsg("Please Click Process to Payment for Confirm Booking")
                    }
                }).catch((err) => {
                    console.log(err);
                    if (err.response) {
                        // Handle the error response here
                        setInsertionStatus(false)
                        setInsertionStatusMsg(err.response.data.error)

                    }
                });
        }
    }


    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    function payment_page(id) {
        console.log("Price: " + room.price);

        const timeDifference = new Date(values.checkout_date) - new Date(values.checkin_date); // Difference in milliseconds
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

        console.log(`Number of days: ${daysDifference}`);

        let bill = null

        // Check if room.price is a valid number before calculating the bill
        if (!isNaN(parseFloat(room.price))) {
            bill = parseFloat(room.price) * daysDifference;
            console.log("Bill: " + bill);
        } else {
            console.log("Invalid room price");
        }

        navigate(`/payment/${bill}`);
    }


    return (
        <div id="roombook" className="container-fluid vh-80 pb-4">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="card p-2 mt-4 mb-4 bg-white rounded">
                        <form onSubmit={submitForm}>
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
                                <label htmlFor="checkinDate" className="form-label">Check-in Date</label>
                                <input
                                    type="date"
                                    name="checkin_date"
                                    className="form-control"
                                    id="checkinDate"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="checkoutDate" className="form-label">Check-out Date</label>
                                <input
                                    type="date"
                                    name="checkout_date"
                                    className="form-control"
                                    id="checkoutDate"
                                    onChange={handleInput}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                        {insertionStatus && (
                            <button className="btn btn-primary" onClick={() => payment_page(id)}>Proceed to Payment</button>
                        )}
                        <p>{insertionStatusMsg}</p>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>

        </div>
    );


}
export default RoomBook