import React from 'react';
import './index.scss';

const Home = (): JSX.Element => {
  return (
    <div className="h-screen font-sans tracking-wider home">
      <div className="flex items-center">
        <div className="g-parallax-container">
          <div className="item_1 basic_setting"></div>
          <div className="item_2 basic_setting"></div>
          <div className="item_3 basic_setting"></div>
          <div className="item_4 basic_setting"></div>
          <div className="item_5 basic_setting"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
