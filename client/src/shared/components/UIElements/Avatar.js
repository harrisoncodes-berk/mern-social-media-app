import React from "react";
import "./Avatar.css";
import Mos from '../../../user/mouth_of_sauron.png';

// CHANGE IMG SRC to image prop

function Avatar({ className, style, image, alt, width, height }) {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={Mos} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
}

export default Avatar;
