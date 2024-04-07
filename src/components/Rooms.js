
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import { roomData } from '../constant'
import { useNavigate } from 'react-router-dom';
import './style.css';
import { FaIndianRupeeSign } from 'react-icons/fa6';

function Rooms() {
    const navigate = useNavigate();

    function booking(id) {
        // navigate(`/roombook/${id}`);
        navigate(`/signup/${id}`);
    }

    function viewDetails(id){
        navigate(`/roomdetails/${id}`);
    }

    return (
        <>
            <div class="container mt-3 room">
                <div className="row">
                    {roomData.map((room) => (
                        <div className="col-sm-4" key={room.id}>
                            <div className="card mb-5">
                                <div>
                                    <img className="d-block w-100 img-fluid mx-auto" src={room.imageSrc} alt="room-img" />
                                </div>
                                <div className="card-body">
                                    <h4>{room.name}</h4>
                                    <h2 className="text-primary">
                                        <FaIndianRupeeSign className="text-primary" />{room.price}
                                    </h2>

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p>Hotel: {room.hotel}</p>
                                            <p>Size: {room.size}</p>
                                            <p>Capacity: {room.capacity}</p>
                                        </div>
                                        <div class="col-sm-6">
                                            <p>Services: {room.services}</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary me-2" onClick={() => booking(room.id)}>Book Now</button>
                                    <button class="btn btn-primary" onClick={() => viewDetails(room.id)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Rooms