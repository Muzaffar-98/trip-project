import './BannerItaly.css';
import React from "react";
// import backgroundItaly  from "./img/ItalyBanner.png";
import bannerIcon1 from "./img/fi-rr-calendar.svg";
import bannerIcon2 from "./img/sun.svg";
import bannerIcon3 from "./img/earth.svg";
import bannerIcon4 from "./img/dollar-sign.svg";
import bannerIcon5 from "./img/BannerIcon1.svg";
import { Link } from 'react-router-dom';


export function BannerItaly() {
    const DescriptionMenuItems = CountryDescriptionData.map((item)=>(
        <ContinentSection icon={item.icon} title={item.title} key={item.id} point={item.point}/>
    ))
    return( 
            <div className='banner-italy'>
                <div className='container-italy'>
                    <div className='background-image'>
                        <div className='text'>
                            <h1 className='title-italy'>Italy</h1>
                            <p>Trips you couldn't plan, even if you wanted to.</p>
                            <button type="button">Create a trip</button>
                        </div>
                        <div className="destinations-section-italy">
                            <div className="destinations-container-italy">
                                {DescriptionMenuItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
const CountryDescriptionData = [
    {
        id:1,
        icon: bannerIcon1,
        title: "BEST TIME TO VISIT",
        point: ["High s/ May-Sept"]
    },
    {
        id: 2,
        icon: bannerIcon2,
        title: "CLIMATE",
        point: ["High 32°C", "Low °C"]
    },
    {
        id: 3,
        icon: bannerIcon3,
        title: "TIMEZONE",
        point: ["Central European", "Time (UTC +1)"]
    },
    {
        id : 4,
        icon: bannerIcon4,
        title: "CURRENCY",
        point: ["Euro", "Dollar"]
    },
    {
        id : 5,
        icon: bannerIcon5,
        title: "LOCAL LANGUAGE",
        point: ["Italian", "English"]
    }
]

function ContinentSection({ title, point, icon }) {
    return (
        <div className="title_section">
            <h3>
                <img src={icon} alt="" />        
                {title}
            </h3>
            <ul>
                {point.map((item, index) => (
                    <li key={index}>
                        <Link className="list_item">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}