import React from "react";
import "../Slider/Slider.scss";

import { Image } from "../../Assets/Image";


const Slider = () => {
  return (
    <div className="carouselSlider">
      <div className="container">
        <div className="sliderWrapper">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
              <img src={Image.Bgfirst} alt='Bgfirst' className='hero_image' />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p className="textwhite">
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
              <img src={Image.Bsthird} alt='Bgsecond' className='hero_image'/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p className="textwhite">
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
              <img src={Image.Bgfirst} alt='Bsthird' className='hero_image'/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p className="textwhite">
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
