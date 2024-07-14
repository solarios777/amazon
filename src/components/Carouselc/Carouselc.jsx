import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Img ,Mimg} from "./Img"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./Carousel.module.css"

const Carouselc = () => {
  return (
    <>
      <Carousel
        className={classes.screen}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {Img.map((imageitem, index) => (
          <img key={index} src={imageitem} />
        ))}
      </Carousel>
      <Carousel
        className={classes.mobscreen}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {Mimg.map((imageitem, index) => (
          <img key={index} src={imageitem} />
        ))}
      </Carousel>
      <div className={classes.Img_shadow}></div>
    </>
  );
}

export default Carouselc
