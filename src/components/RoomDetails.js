
import React from 'react'
import { roomData } from '../constant'
import { useParams } from 'react-router-dom'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function RoomDetails() {
    let { id } = useParams()
    id = parseInt(id);
    console.log("id" + id)
    // Find the room data with the matching id

    
    const room = roomData.find((room) => room.id === id);
    console.log(room)

    const navigate = useNavigate()
    function booking(id) {
        // navigate(`/roombook/${id}`);
        navigate(`/signup/${id}`);
    }

    return (
        <>
            <div class="container view mt-2 mb-2">
                <div class="row">
                    <div class="col-sm-6">

                        <img className="d-block w-100 img-fluid mx-auto" src={room.imageSrc} alt="room-img" />
                    </div>
                    <div class="col-sm-6">
                        <div class="card" style={{ border: "none" }}>
                            <h4>{room.name}</h4>
                            <h2 className="text-primary">
                                <FaIndianRupeeSign className="text-primary" />{room.price}
                            </h2>
                            <p>Hotel: {room.hotel}</p>
                            <p>Size: {room.size}</p>
                            <p>Capacity: {room.capacity}</p>
                            <p>Services: {room.services}</p>
                            <button className="btn btn-primary me-2 btn btn-primary fs-5 col-4" onClick={() => booking(room.id)}>Book Now</button>
                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}
        </>


    )
}

export default RoomDetails