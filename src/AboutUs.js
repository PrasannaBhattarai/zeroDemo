// AboutUs.js

import React from 'react';
import './ContactStyle.css';

function AboutUs() {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    description: '',
  });

  const { firstName, lastName, email, phoneNumber, description } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/prasanna_10/google_sheets/ZDHMsdCHOCeFEFFN?tabId=Sheet1',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify([
            [
              firstName,
              lastName,
              email,
              phoneNumber,
              description,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        description: '',
      });
    window.alert("Submitted Successfully")} catch (error) {
      console.log(error);
    }
  };

  return (<>

  <div className='contact-us'>
    <h1>KNOW MORE</h1>
    
    <ul className='list'>
      <li><h2>about what we do?</h2></li>
      <li><h2>about how we do?</h2></li>
      <li><h2>interested in working with us?</h2></li>
    </ul>  

  
  </div>

    <div className="form-container">
      <h1>Drop a Note!</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <br />
        <label className="form-label">
          Description:
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default AboutUs;
