import React from "react";
import classes from "./Gallery.module.css";
import ImageGallery from "react-image-gallery";
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
  gallery49,
} from "../../images";
import Title from "../Title/Title";

let gallery = () => {
  let images = [
    { original: gallery1, originalClass: classes.image },
    { original: gallery3, originalClass: classes.image },
    { original: gallery4, originalClass: classes.image },
    { original: gallery5, originalClass: classes.image },
    { original: gallery6, originalClass: classes.image },
    { original: gallery7, originalClass: classes.image },
    { original: gallery8, originalClass: classes.image },
    { original: gallery9, originalClass: classes.image },
    { original: gallery10, originalClass: classes.image },
    { original: gallery11, originalClass: classes.image },
    { original: gallery12, originalClass: classes.image },
    { original: gallery13, originalClass: classes.image },
    { original: gallery14, originalClass: classes.image },
    { original: gallery15, originalClass: classes.image },
    { original: gallery16, originalClass: classes.image },
    { original: gallery17, originalClass: classes.image },
    { original: gallery18, originalClass: classes.image },
    { original: gallery19, originalClass: classes.image },
    { original: gallery20, originalClass: classes.image },
    { original: gallery21, originalClass: classes.image },
    { original: gallery22, originalClass: classes.image },
    { original: gallery23, originalClass: classes.image },
    { original: gallery24, originalClass: classes.image },
    { original: gallery25, originalClass: classes.image },
    { original: gallery26, originalClass: classes.image },
    { original: gallery27, originalClass: classes.image },
    { original: gallery28, originalClass: classes.image },
    { original: gallery29, originalClass: classes.image },
    { original: gallery30, originalClass: classes.image },
    { original: gallery31, originalClass: classes.image },
    { original: gallery32, originalClass: classes.image },
    { original: gallery33, originalClass: classes.image },
    { original: gallery34, originalClass: classes.image },
    { original: gallery35, originalClass: classes.image },
    { original: gallery36, originalClass: classes.image },
    { original: gallery37, originalClass: classes.image },
    { original: gallery38, originalClass: classes.image },
    { original: gallery39, originalClass: classes.image },
    { original: gallery40, originalClass: classes.image },
    { original: gallery41, originalClass: classes.image },
    { original: gallery42, originalClass: classes.image },
    { original: gallery43, originalClass: classes.image },
    { original: gallery44, originalClass: classes.image },
    { original: gallery45, originalClass: classes.image },
    { original: gallery46, originalClass: classes.image },
    { original: gallery47, originalClass: classes.image },
    { original: gallery48, originalClass: classes.image },
    { original: gallery49, originalClass: classes.image },
  ];

  return (
    <div id="galeria" className={classes.container}>
      <Title>Galería</Title>
      <div className={classes.gallery}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showNav={false}
          showBullets={false}
          showFullscreenButton={false}
          lazyLoad
          autoPlay
          slideDuration={600}
          slideInterval={2500}
        />
      </div>
    </div>
  );
};

export default gallery;
