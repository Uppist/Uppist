/** @format */

import React from "react";
import jessie from "../../assets/desktop/JZB.jpg";
import fl from "../../assets/desktop/F&L.jpg";
import sql from "../../assets/desktop/SASL.png";
import luround from "../../assets/desktop/luroundlogo.jpg";
import broom from "../../assets/desktop/broomApp.png";

export default function Clients() {
  return (
    <div className='clients'>
      <label className='text-about'>
        <label>Our</label> Clients
      </label>
      <div>
        <img src={jessie} alt='' />
        <img src={fl} alt='' />
        <img src={sql} alt='' />
        <img src={luround} alt='' />
        <img src={broom} alt='' />
      </div>
    </div>
  );
}
