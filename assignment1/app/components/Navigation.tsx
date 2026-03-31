"use client";

import React from "react";
// Navigation component shows 3 buttons to switch pages
// It gets 'setPage' from the main page component
function Navigation({ setPage }: { setPage: (page: string) => void }) {
  return (
    <div className="nav-buttons">
      {/* When the button is clicked, it changes the current page */}
      <button onClick={() => setPage("home")}>Home</button>{/* goes to the home page */}
      <button onClick={() => setPage("counter")}>Counter</button> {/* goes to the counter page */}
      <button onClick={() => setPage("form")}>Form</button>{/* goes to the form page */}
    </div>
  );
}

export default Navigation; // Make Navigation available.