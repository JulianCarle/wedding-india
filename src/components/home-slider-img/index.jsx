import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import bottomFlowers from '../../images/home/line_bottom_flowers.png';
import topFlowers from '../../images/home/line_top_flowers.png';
import us from '../../images/home/slider_1.jpeg';
import invitation from '../../images/home/slider_2.jpeg';

import TajMahal from '../../images/home/Taj_Mahal.jpg';

import './styles.scss';

const images = [
  TajMahal,
  us,
  invitation
  // 'https://media.istockphoto.com/id/919525342/fr/photo/taj-mahal-%C3%A0-agra-en-inde-%C3%A0-la-lumi%C3%A8re-de-la-pleine-lune.jpg?s=612x612&w=0&k=20&c=ElPChNdizuPb8P5v3z5mzftsNEAQ40ZuyfNYcOFHxB4=',
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    AOS.init();
    const interval = setInterval(goToNextImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentIndex ? 'active' : ''} 
          `}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
      <div className="slider-text">
        {currentIndex === 0 && (
          <div>
            <img
              src={topFlowers}
              alt="img"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="3000"
            />

            <p
              className="top-text"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="2000"
            >
              21 Août 2023
            </p>
            <p
              className="center-text"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Bienvenue au mariage
            </p>
            <p
              className="bottom-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              d&apos;Aurélia et Julian
            </p>
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="3000"
              src={bottomFlowers}
              alt="img-bottom-flowers"
            />
          </div>
        )}

        {currentIndex === 1 && (
          <div>
            <p
              className="top-text"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="2000"
            >
              Pour célébrer notre union
            </p>
            <p
              className="center-text"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              Nous vous attendons
            </p>
            <p
              className="bottom-text"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              à Pondicherry
            </p>
          </div>
        )}
      </div>

      {currentIndex === 2 && <p data-aos="fade-down"></p>}
    </div>
  );
};

export default ImageSlider;
