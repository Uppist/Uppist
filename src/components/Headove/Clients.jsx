/** @format */

import React from "react";
import jessie from "../../assets/desktop/JZB.png";
import fl from "../../assets/desktop/F&L.png";
import sql from "../../assets/desktop/SASL.png";
import luround from "../../assets/desktop/luroundlogo.png";
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
