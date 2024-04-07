import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

function Admin() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://hotelbookingbackend-bg0y.onrender.com/admin/booking_req'); // Default URL
  //for display messsage
  const [requestDataName, setRequestDataName] = useState('Booking Request Details')
  // when booking accepted, bookingAccept state update so useEffect render again becuse dependency
  const [bookingAccept, setBookingAccept] = useState(0);
  // when click on different button data changes for that these states
  const [confirmBookingFlag, setConfirmBookingFlag] = useState(true)
  const [customerData, setCustomerData] = useState(false)

  const navigate = useNavigate();

  const authentication = useSelector((state) => state.authentication);
  console.log(authentication)

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch data on initial page load
  }, [bookingAccept, url]);

  const handleButtonClick = (mobile) => {
    axios.post(`https://hotelbookingbackend-bg0y.onrender.com/admin/approve/${mobile}`)
      .then((res) => {
        console.log('handleButtonClicked');
        setBookingAccept(!bookingAccept);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function roomRequstUrl() {
    // both are true to see all column
    setConfirmBookingFlag(true)
    setCustomerData(true)

    setRequestDataName("Booking Request Details")
    setUrl('https://hotelbookingbackend-bg0y.onrender.com/admin/booking_req')
  }

  function confirmBookingUrl() {
    setConfirmBookingFlag(false)
    // setCustomerData is true to see CheckInDate,CheckOutDate
    setCustomerData(true)

    setRequestDataName("Confirm Booking Details")
    setUrl('https://hotelbookingbackend-bg0y.onrender.com/admin/conform_booking')
  }

  function userDetail() {
    setCustomerData(false)
    setRequestDataName("Customer Details")

  }

  return (
    <>
      <div className="adminpage mb-4">
        <h2>Admin Panel</h2>
        <br /><br />
        <div className=''>
          <button className="btn btn-primary me-2" onClick={roomRequstUrl}>Room Request</button>
          <button className="btn btn-dark me-2" onClick={confirmBookingUrl}>Confirm Booking</button>
          <button className="btn btn-primary" onClick={userDetail}>Customer Details</button>
        </div>

        <br />
        <br />
        <h3>{requestDataName}</h3>
        <table id="mytable" className="table table-striped table-bordered vh-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Address</th>
              {/* customerData false then not display these column*/}
              {customerData && <th> CheckInDate</th>}
              {customerData && <th>CheckOutDate</th>}
              {customerData && <th>Hotel Name</th>}
              {customerData && <th>No of Bed</th>}
              {customerData && confirmBookingFlag && <th>Button</th>}

            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                {customerData && <td>{item.checkin_date}</td>}
                {customerData && <td>{item.checkout_date}</td>}
                {customerData && <td>{item.hotelname}</td>}
                {customerData && <td>{item.no_of_bed}</td>}
                {confirmBookingFlag && confirmBookingFlag &&
                  <td>
                    <button className="btn btn-primary" onClick={() => handleButtonClick(item.mobile)}>Accept Booking</button>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
