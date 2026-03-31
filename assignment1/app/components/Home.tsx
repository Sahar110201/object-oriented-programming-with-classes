"use client"; //this file runs in the browser

import React, { useState } from "react";

//home page component
function Home() {
  // useState is used to show a message when button is clicked
  const [showMessage, setShowMessage] = useState(false); //start with message hidden

  return (
    <div>
      {/*page title*/}
      <h2>Home Page</h2>

      {/*welcome text*/}
      <p>Welcome to my web application for assignment 1!</p>

      {/*button to show a message when clicked*/}
      <button onClick={() => setShowMessage(true)}>Click Me</button>

      {/* shows this text message only if showMessage is true. E.g when the person clicked on the button */}
      {showMessage && <p>You clicked the button!</p>}
    </div>
  );
}
export default Home; // makes home component available 