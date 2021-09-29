import React from 'react';
import NavBar from '@/components/navbar';
import Styles from './style.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={Styles['home']}>
      <NavBar />
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
