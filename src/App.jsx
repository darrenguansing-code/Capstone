import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from "react";

import Header from './assets/header.jsx';
import Footer from './assets/footer.jsx';

import Home from './page/Home.jsx';
import Activities from './page/About.jsx';
import Enroll from './page/Enroll.jsx';
import Login from './page/Login.jsx';
import TuitionFee from './page/Tuitionfee.jsx';
import Transportation from './page/Transportation.jsx';
import Form from './page/Form.jsx';
import Success from './page/Success.jsx';
import About from './page/About.jsx';



// 🔥 SMART SCROLL SYSTEM (TOP + SECTION HANDLER)
function SmartScroll() {
  const location = useLocation();

  useEffect(() => {
    // if may #section (about, contact, etc.)
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);

    } else {
      // normal page change → scroll to top
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);

  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}


// 🔥 APP
function App() {

  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />

      {/* SMART SCROLL */}
      <SmartScroll />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tuition-fee" element={<TuitionFee />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<Success />} />

          {/* fallback */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;