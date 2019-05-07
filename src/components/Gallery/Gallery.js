import React from "react";
import classes from "./Gallery.module.css";
import { Carousel } from "antd";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  gallery1,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
  gallery40,
  gallery41,
  gallery42,
  gallery43,
  gallery44,
  gallery45,
  gallery46,
  gallery47,
  gallery48,
  gallery49
} from "../../images";
import Title from "../Title/Title";

let gallery = () => {
  let images = [
    gallery1,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
    gallery32,
    gallery33,
    gallery34,
    gallery35,
    gallery36,
    gallery37,
    gallery38,
    gallery39,
    gallery40,
    gallery41,
    gallery42,
    gallery43,
    gallery44,
    gallery45,
    gallery46,
    gallery47,
    gallery48,
    gallery49
  ];

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div id="galeria" className={classes.container}>
      <Title>Galería</Title>
      <div className={classes.gallery}>
        <Carousel afterChange={onChange} autoplay autoplaySpeed={4000}>
          {images.map((img, index) => (
            <div className={classes.img} key={index}>
              <img src={img}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default gallery;
