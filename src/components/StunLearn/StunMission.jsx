/** @format */

import React from "react";
import image2 from "../../assets/desktop/stunlearn13.png";

export default function StunMission() {
  return (
    <section>
      <div className='about-stunlearn'>
        <div className='stun-mission'>
          <h2>
            Our <span>Mission</span>
          </h2>
          <div>
            <p>
              {" "}
              Our mission is to be a forefront education brand
              <br /> that enhances productivity and inspires
              <br /> passion.
            </p>
            <br />
            <br />
            <div className='teach-mode'>
              <div>
                <label>What we teach</label>

                <ul>
                  <li>Business Growth</li>
                  <li>Leadership Development</li>
                  <li> Professional Skills Development</li>
                </ul>
              </div>

              <div>
                <label>Mode</label>

                <ul>
                  <li>Workshops</li>
                  <li>Programs</li>
                  <li>Courses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='aboutus'>
          <img src={image2} alt='image2' />
        </div>
      </div>
    </section>
  );
}
