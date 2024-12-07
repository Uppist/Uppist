/** @format */

import React, { useEffect } from "react";
import "../../style.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ValueSection from "./ValueSection";
import Unlock from "./Unlock";
import Choose from "./Choose";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='background1'>
      <NavBar />
      <AboutSection />
      <ValueSection />
      <Unlock />
      <Choose />
      <Footer />
    </div>
  );
}
