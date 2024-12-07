/** @format */

import React from "react";
import headove1 from "../../assets/desktop/headhove12.png";

export default function AboutHeadove() {
  return (
    <div className='about-headove'>
      <h2 className='text-about-mobile'>
        <label>About</label> Headove
      </h2>
      <div>
        <h2 className='text-about text-about-desktop'>
          <label>About</label> Headove
        </h2>
        <p>
          Headove is a creative and marketing agency designed for small
          <br />
          businesses and startups.
          <br /> Riding on the promise of delivering top-notch value affordably,
          we want to make marketing and creative work easily accessible to the
          customers and businesses who need them most.
        </p>
      </div>

      <img src={headove1} alt='' />
    </div>
  );
}
