import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className="slicks">
        <div>
          <img className="imgSlick" src="bg.jpg" alt="bg" />
          <div className="thumbnail">
            <p>THIS IS A PLACE WHERE TECHNOLOGY &</p>
            <p>CREATIVITY FUSED INTO DIGITAL CHEMISTRY</p>
          </div>
        </div>
        <div>
          <img className="imgSlick" src="about-bg.jpg" alt="aboutbg" />
          <div className="thumbnail">
            <p>WE DON&apos;T HAVE THE BEST BUT WE HAVE THE</p>
            <p>GREATEST TEAM</p>
          </div>
        </div>
      </Slider>
      <style>{`
      .slick-track {
        position: relative;
        z-index: -10;
      }
      .slick-prev {
        left: 3% !important;
        z-index: 1;
      }
      .slick-next {
        right: 3% !important;
        z-index: 1;
      }
       .slicks {
           max-width: 100vw !important;
       }

       .imgSlick {
           width:100% !important;
           z-index:10
       }

       .thumbnail {
        font-size: 1.8rem;
         color : #fff;
         background: rgba(75, 85, 99, .4);
         padding-top:0.5rem;
         padding-bottom:0.5rem;
         display: flex;
         flex-direction: column;
         width:fit-content;
         padding-right: 5%;
         padding-left: 2%;
         position: relative;
         left : 15%;
         top : -15rem;
         z-index:100;
       }
    `}</style>
    </div>
  );
};

export default Carousel;
