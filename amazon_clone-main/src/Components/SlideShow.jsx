import "./SlideShow.css";
import { useEffect, useState } from "react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Slideshow = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch("https://amazonabc.herokuapp.com/corousel")
      .then((res) => res.json())
      .then((images) => setPic(images));
  }, [pic]);
  //   console.log(pic);

  return (
    <div className="slide-container">
      <Slide className="sliding">
        {pic.map((pic, index) => (
          <div className="each-slide" key={index}>
            <img src={pic.image} alt="images" className="images" />
          </div>
        ))}
      </Slide>
    </div>
  );
};