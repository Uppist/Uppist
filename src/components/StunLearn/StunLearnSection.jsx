/** @format */

import React from "react";
import ImageSection from "./ImageSection";
import AboutStunLearn from "./AboutStunLearn";
import Unlock from "../Aboutus/Unlock";
import StunMission from "./StunMission";

export default function StunLearnSection() {
  return (
    <div className='stunlearn-section'>
      <ImageSection />
      <AboutStunLearn />
      <Unlock />
    </div>
  );
}
