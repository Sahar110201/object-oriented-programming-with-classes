"use client";//this file runs in the browser

import React, { useState } from "react";

//form page component
function ContactForm() {
  //useState stores the values typed by the user
  const [name, setName] = useState("");//store the name
  const [email, setEmail] = useState("");//store the email
  const [submitted, setSubmitted] = useState(false);//store if form is submitted

  //this function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();// Stop the page from refreshing
    setSubmitted(true); //set submitted to true to show the thank you message
  };

  return (
    <div>
      {/*page title */}
      <h2>Form Page</h2>

      {/*the form for name and email */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name} //shows current name
            onChange={(e) => setName(e.target.value)} //updates the name when user types it
            required
          />
        </label>
        <br/>
        <br/>

        <label>
          Email:
          <input
            type="email"
            value={email} //show current email
            onChange={(e) => setEmail(e.target.value)} //updates the email when user types it
            required
          />
        </label>
        <br />
        <br />

        {/*submit button */}
        <button type="submit">Submit</button>
      </form>

      {/*shows this message only if the form is submitted */}
      {submitted && (
        <p>
          Thank you, {name}! We received your email: {email}
        </p>
      )}
    </div>
  );
}

export default ContactForm; // Make this component available 