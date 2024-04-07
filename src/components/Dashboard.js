

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Login";
import Admin from './Admin';
import Signup from './Signup';
import RoomBook from "./RoomBook";
import Rooms from "./Rooms";
import Payment from './Payment';
import Home  from './Home';
import About from './About';
import AdminLogin from './AdminLogin'

import { useSelector, useDispatch } from 'react-redux';
import UserPanel from './UserPanel';
import Contact from './Contact';
import RoomDetails from './RoomDetails';


function Dashboard() {
    const authentication = useSelector((state) => state.authentication);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room" element={<Rooms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/roomdetails/:id" element={<RoomDetails />} />


                <Route path="/roombook/:id" element={<RoomBook />} />

                


                <Route path="/userpanel" element={authentication ? <UserPanel /> : <Login />} />



                <Route path="/admin" element={authentication ? <Admin /> : <Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/signup/:id" element={<Signup />} />
                <Route path="/payment/:bill" element={<Payment />} />

                <Route path="/about" element={<About />} />
                {/* <Route path='/admin/studentdata' element={<StudentData />} />
                <Route path="/liveclass" element={<LiveClass />} />
                <Route path="/meeting" element={<MeetingPage />} />
                <Route path='admin/editfaculty' element={<FacultyUpload />} /> */}
            </Routes>
        </div>
    );
}

export default Dashboard;
