import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

function UserPanel() {
  // get login detail to find specific user booking from table
  const location = useLocation();
  const { mobile, password } = location.state;

  const [bookingCancel, setBookingCancel] = useState(0);
  const [data, setData] = useState([]);
  const [requestDataName, setRequestDataName] = useState('Booking Request Details')
  const [customerData, setCustomerData] = useState(false)


  const navigate = useNavigate();

  const authentication = useSelector((state) => state.authentication);
  console.log(authentication)

  async function fetchData() {
    try {
      // Use backticks for string interpolation
      let url = `https://hotelbookingbackend-bg0y.onrender.com/userpanel/confirm_booking?mobile=${mobile}`;

      const response = await axios.get(url);
      console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch data on initial page load
  }, [bookingCancel]);

  const handleButtonClick = (id) => {
    axios.post(`https://hotelbookingbackend-bg0y.onrender.com/user/cancelbooking/${id}`)
      .then((res) => {
        console.log('handleButtonClicked');
        setBookingCancel(!bookingCancel);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="adminpage">
      <div >
        <h2>User Panel</h2>
        <br /><br />


        <h3>{requestDataName}</h3>
        <table id="mytable" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th> CheckInDate</th>
              <th>CheckOutDate</th>
              <th>Hotel Name</th>
              <th>No of Bed</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.checkin_date}</td>
                <td>{item.checkout_date}</td>
                <td>{item.hotelname}</td>
                <td>{item.no_of_bed}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleButtonClick(item.id)}>Cancel Booking</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default UserPanel;
