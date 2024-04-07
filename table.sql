
CREATE TABLE hotel_signup (
    name VARCHAR(20) NOT NULL,
    mobile VARCHAR(12) NOT NULL,
    address VARCHAR(30),
    password VARCHAR(15)
);

ALTER TABLE hotel_signup
ADD PRIMARY KEY (name, mobile);


CREATE TABLE hotel_user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    mobile VARCHAR(12),
    address VARCHAR(30),
    password VARCHAR(15),
    PRIMARY KEY (id)
);

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    mobile VARCHAR(12),
    address VARCHAR(30),
    checkin_date DATE,
    checkout_date DATE,
    hotelname VARCHAR(20),
    no_of_bed INT,
    PRIMARY KEY (id)
);

CREATE TABLE confirm_rooms (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    mobile VARCHAR(12),
    address VARCHAR(30),
    checkin_date DATE,
    checkout_date DATE,
    hotelname VARCHAR(20),
    no_of_bed INT,
    PRIMARY KEY (id)
);

CREATE TABLE admin_login (
    userid VARCHAR(25),
    password VARCHAR(15)
);

INSERT into admin_login values("75420","123");

