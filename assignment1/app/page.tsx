"use client"; // This file runs in the browser
import React, { useState } from "react"; //We need React and useState to store page info
import Navigation from "./components/Navigation"; //importing navigation buttons 
import Home from "./components/Home"; //importing home page
import Counter from "./components/Counter"; //importing counter
import ContactForm from "./components/ContactForm"; //importing contact form

function Page() {
  const [page, setPage] = useState("home"); //this keeps tracks of which page is shown, it starts with home page as its set to that

  return (
    <div>
      <h1>Assignment 1 - React Web Application</h1> {/*heading*/}

      <Navigation setPage={setPage}/> {/*navigation button*/}

      <div className="page-content">
      {page === "home" && <Home/>} {/*shows home page if home button is clicked*/}
      {page === "counter" && <Counter/>}{/*shows counter page if counter button is clicked*/}
      {page === "form" && <ContactForm/>}{/*shows form page if form button is clicked*/}
    </div>
    </div>
  );
}
export default Page; //exports to make it available