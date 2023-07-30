import React from 'react';
import BrideAndGroom from '../../components/bride-and-groom';
import Counter from '../../components/counter';
import ImageSlider from '../../components/imageSlider';
import Resume from '../../components/resume';
import TimelinePhotos from '../../components/timelineHomePhotos';
import './styles.scss';

const HomePage = () => {
  return (
    <div className="home margin85">
      <div>
        <ImageSlider />
      </div>
      <div className="counter block-grey">
        <Counter />
      </div>
      <div className="mr-mrs block-white bride-and-groom">
        <BrideAndGroom />
      </div>
      <div className="block-grey shadow-top">
        <Resume />
      </div>
      <div className="block-grey">
        <TimelinePhotos />
      </div>
      <div className="block-grey"></div>
    </div>
  );
};

export default HomePage;
