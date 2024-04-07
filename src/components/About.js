
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <h1 class="fs-1 text-primary text-center mt-3">About</h1>
            <div class="container mb-2">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <img className="d-block w-100 img-fluid mx-auto" src={require("../img/room-2.jpg")} style={{ height: "300px" }} alt="" />
                        </div>
                    </div>
                    
                    <div class="col-sm-6">
                        <div class="card">
                            <p className="p-2" style={{ textAlign: 'justify' }}>
                                A hotel management system is a software application that helps hotels and other lodging establishments efficiently manage their operations. It encompasses various aspects of hotel management, including reservations, guest check-in and check-out, room assignment, billing and invoicing, inventory management, and more. Here are the key components and features of a hotel management system:
                                Allows guests to make room reservations online or through the front desk.
                                Provides an overview of room availability and allows staff to block or reserve rooms
                                Automatically assigns rooms based on guest preferences, availability, and room type.
                                Supports manual room assignment as needed.Manages hotel inventory, including rooms, amenities, and facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default About