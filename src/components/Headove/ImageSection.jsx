/** @format */

import React from "react";
import headove from "../../assets/desktop/headove2.png";
import headove1 from "../../assets/desktop/headove21.png";

export default function ImageSection() {
  return (
    <div className='headove-img'>
      <img className='desktop-headove' src={headove} alt='' />
      <img className='mobile-headove' src={headove1} alt='' />
    </div>
  );
}
