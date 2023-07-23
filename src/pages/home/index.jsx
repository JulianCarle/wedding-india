import React from 'react';
import Counter from '../../components/counter';
import ImageSlider from '../../components/imageSlider';
import Resume from '../../components/resume';
import './styles.scss';

const HomePage = () => {
  return (
    <div className="home">
      <div>
        <ImageSlider />
      </div>
      <div className="counter block-grey">
        <Counter />
      </div>
      <div className="mr-mrs block-white"></div>
      <div className="block-grey shadow-top">
        <Resume />
      </div>
      <div className="block-white">white</div>
      <div className="block-grey">grey</div>
    </div>
  );
};

export default HomePage;
