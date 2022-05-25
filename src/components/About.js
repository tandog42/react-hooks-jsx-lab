import React from "react";
import {image} from "../data/data.js";

function About() {
  return <div id="About">
    <h2>About Me</h2>
    <p>Hello i like food</p>
    <img src={image} alt="I made this"/>
  
  </div>;
}

export default About;
