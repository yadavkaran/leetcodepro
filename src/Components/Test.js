import React from 'react';
import pic from '../Assets/LEETCODE_PRO.jpg';

function Test() {
  return (
    <div class ="test">
    <div class="topnav">
    <img src = {pic} alt='Home'/>
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact Us</a>
    <a href="#about">About Us</a>
  </div>
  </div>

  );
}

export default Test;