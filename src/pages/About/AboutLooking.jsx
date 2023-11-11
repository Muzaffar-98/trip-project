import React from 'react';
import './AboutLooking.css';
import rightArrow from './img/rightArrow.svg';
import { Link } from 'react-router-dom';

export function AboutLooking(){
  return (
    <div className="our-destinations">
      <div className="wrap-container">
        <p>Looking to go elsewhere?</p>
        <Link className='link' to="/destinations">Our Destinations <img src={rightArrow} alt="rightArr" /></Link>
      </div>
    </div>
  )
}
