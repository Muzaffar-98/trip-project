import React from 'react';
import './LookingDestinations.css';
import rightArrow from './img/rightArrow.svg';
import { Link } from 'react-router-dom';

export function LookingDestinations(){
  return (
    <div className="our-destinations">
      <div className="wrap-container">
        <p>Looking to go elsewhere?</p>
        <Link className='link' to="/destinations">Our Destinations <img src={rightArrow} alt="rightArr" /></Link>
      </div>
    </div>
  )
}
