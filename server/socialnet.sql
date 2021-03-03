DROP TABLE IF EXISTS 
users;
DROP TABLE IF EXISTS 
friendships;
DROP TABLE IF EXISTS message ;
 DROP TABLE IF EXISTS hairstylists;


CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      first VARCHAR(255) NOT NULL,
      last VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      profile_pic_url VARCHAR,
      bio VARCHAR,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

CREATE TABLE reset_codes(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE friendships(
id SERIAL PRIMARY KEY,
sender_id INT REFERENCES users(id) NOT NULL,
recipient_id INT REFERENCES users(id) NOT NULL,
accepted BOOLEAN DEFAULT false
);

CREATE TABLE message(
      id SERIAL PRIMARY KEY,
      sender_id INT REFERENCES users(id) NOT NULL,
      message VARCHAR NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );



-- FOR HAIR IN THE CITY PROJECT
 CREATE TABLE hairstylists(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) NOT NULL,
      name VARCHAR(255) NOT NULL,
      description VARCHAR DEFAULT NULL,
      lat VARCHAR NOT NULL,
      lng VARCHAR NOT NULL,
      img_stylist VARCHAR DEFAULT NULL,
     
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );