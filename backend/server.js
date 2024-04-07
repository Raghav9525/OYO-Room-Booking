
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library

const app = express();
app.use(express.json());


PORT = process.env.PORT || 5000

// Use cors middleware with specific configuration
app.use(cors({
  origin: "*"
}));

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error getting a database connection:', err);
//   }else{
//     console.log("connectionn successful");
//   }
// });

// console.log(pool)
console.log(process.env.ID)
console.log(process.env.EMAIL)
console.log(process.env.SECRETKEY)

app.post("/user/cancelbooking/:id", (req, res) => {
  const id = req.params.id;
  sql = `delete from confirm_rooms where id=?`

  pool.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    console.log("after deleting data" + results)
    // Send the retrieved data as a JSON response
    res.json(results);
  });
})

app.get('/userpanel/confirm_booking', (req, res) => {
  const mobile = req.query.mobile;
  console.log(mobile)

  // Use a SQL query to fetch data based on the email
  const sql = `SELECT * FROM confirm_rooms WHERE mobile = ?`

  pool.query(sql, [mobile], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    console.log("result data" + results)
    // Send the retrieved data as a JSON response
    res.json(results);
  });
})

app.post("/signup", (req, res) => {
  const values = [
    req.body.nam,
    req.body.mobile,
    req.body.address,
    req.body.password,
  ]

  const sql = "insert into hotel_user(`name`,`mobile`,`address`,`password`) values(?,?,?,?)";

  pool.getConnection((err, connection) => {
    // execute query using connection object
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.log(err)
      }
      connection.release(); // Release the connection when done
      return res.status(200).json({ message: 'Record inserted successfully' });

    });
  });
})

app.get("/admin/conform_booking", (req, res) => {
  console.log("conform_booking route")
  const sql = "SELECT * FROM confirm_rooms";
  pool.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    // Send the retrieved data as JSON response
    res.json(results);
  });
})

//accept booking request
app.post("/admin/approve/:mobile", (req, res) => {
  const mobile = req.params.mobile;
  let values = [mobile];
  console.log("hii" + values)

  const sql = `
      INSERT INTO confirm_rooms (name, mobile, address,checkin_date, checkout_date,hotelname,no_of_bed)
      SELECT name, mobile, address,checkin_date, checkout_date,hotelname,no_of_bed
      FROM rooms
      WHERE mobile = ?;
    `;

  // If the insertion is successful, you can optionally delete the record from admission_req
  const deleteSql = "DELETE FROM rooms WHERE mobile = ?";

  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Database connection error' });
    }
    // execute insertion operation
    connection.query(sql, values, (err, results) => {
      if (err) {
        connection.release();
        return res.status(500).json({ error: 'Database error' });
      }

      // execute delete operation
      connection.query(deleteSql, [mobile], (deleteErr, deleteResults) => {
        connection.release();

        if (deleteErr) {
          return res.status(500).json({ error: 'Database error' });
        }

        return res.status(200).json({ message: 'booking approved and record deleted' });
      });
    });
  });

})


//fetching booking request
app.get("/admin/booking_req", (req, res) => {
  console.log("/admin/booking_req route")

  const sql = "SELECT * FROM rooms";
  pool.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    // Send the retrieved data as JSON response
    res.json(results);
  });
})

// login Route
//admin Login
app.post('/adminlogin', (req, res) => {
  const mobile = req.body.mobile;
  const password = req.body.password;
  const sql = 'SELECT * FROM admin_login WHERE userid = ? AND password = ?';

  pool.query(sql, [mobile, password], (error, results) => {
    if (error) {
      // Handle database error
      console.error('Database error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = {
        id: process.env.ID,
        username: process.env.USERNAME,
        email: process.EMAIL
      };

      // Generate a JWT token using the jsonwebtoken library
      jwt.sign({ user }, process.env.SECRETKEY , { expiresIn: '300s' }, (err, token) => {
        if (err) {
          res.status(500).json({ error: 'Failed to generate token' });
        } else {
          // Send the token in the response
          res.status(200).json({ success: true, message: 'Login successful', token });
        }
      });
    } else {
      // No matching records found, send an error response
      return res.status(401).json({ success: false, message: 'Invalid mobile or password' });
    }
  });
});

// user Login
app.post('/login', (req, res) => {
  const mobile = req.body.mobile;
  const password = req.body.password;
  const sql = 'SELECT * FROM hotel_user WHERE mobile = ? AND password = ?';

  pool.query(sql, [mobile, password], (error, results) => {
    if (error) {
      // Handle database error
      console.error('Database error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = {
        id: process.env.ID,
        username: process.env.USERNAME,
        email: process.EMAIL
      };

      // Generate a JWT token using the jsonwebtoken library
      jwt.sign({ user }, process.env.SECRETKEY, { expiresIn: '300s' }, (err, token) => {
        if (err) {
          res.status(500).json({ error: 'Failed to generate token' });
        } else {
          // Send the token in the response
          res.status(200).json({ success: true, message: 'Login successful', token });
        }
      });
    } else {
      // No matching records found, send an error response
      return res.status(401).json({ success: false, message: 'Invalid mobile or password' });
    }
  });
});

// route for admission request
app.post("/roombook", (req, res) => {
  const mobile = req.body.mobile;
  const checkin_date = req.body.checkin_date;
  const checkout_date = req.body.checkout_date;
  const hotel = req.body.hotel;
  const capacity = req.body.capacity;

  // First, retrieve the name and address from the hotel_user table
  const selectSql = `SELECT name, address FROM hotel_user WHERE mobile = ?`;

  // Then, insert the data into the rooms table
  const insertSql = "INSERT INTO rooms (name, mobile, address, checkin_date, checkout_date, hotelname, no_of_bed) VALUES (?, ?, ?, ?, ?, ?, ?)";

  // get connection Object
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Database error' });
    }

    // Retrieve the name and address
    connection.query(selectSql, [mobile], (err, result) => {
      if (err) {
        console.log(err);
        connection.release(); // Release the connection when done
        return res.status(500).json({ error: 'Database error' });
      }

      if (result.length > 0) {
        const { name, address } = result[0]; // Assuming the query returns one row
        console.log(name, address)
        // Insert the data into the rooms table
        connection.query(insertSql, [name, mobile, address, checkin_date, checkout_date, hotel, capacity], (err, data) => {
          connection.release(); // Release the connection when done

          if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Database error' });
          }

          return res.json(data);
        });
      } else {
        connection.release(); // Release the connection when there's no matching mobile
        return res.status(404).json({ error: 'Mobile No. not found' });
      }
    });
  });
});


app.listen(PORT, () => { console.log("server running") })