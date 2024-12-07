/** @format */

import React from "react";
import image from "../../assets/desktop/best.png";
import image2 from "../../assets/desktop/best2.jpg";
import { Link } from "react-router-dom";

export default function Unlock() {
  return (
    <section className='unlock'>
      <div className='imagesection'>
        <img className='unlockimage' src={image} alt='' />
        <img className='unlockimage2' src={image2} alt='' />

        <div className='empower'>
          <label>The world at your feet</label>
          <Link to='/contact'>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
