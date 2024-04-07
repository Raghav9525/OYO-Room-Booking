import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Rooms from './Rooms';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide img-fluid carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("../img/car1.jpg")} className="d-block w-100 img-fluid mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("../img/car2.jpg")} class="d-block w-100 img-fluid mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("../img/car3.jpg")} class="d-block w-100 mx-auto" alt="..." />
          </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Rooms section */}
      {/* <h1 class="fs-1 text-primary text-center mt-3">Rooms</h1> */}
      <Rooms />
      <Contact />
      {/* About section */}
      {/* <h1 class="fs-1 text-primary text-center mt-3">About</h1>
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
      </div> */}
      <About />

    </div>
  );
}

export default Home;
